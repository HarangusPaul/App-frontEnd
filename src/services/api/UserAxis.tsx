import axios, {AxiosResponse} from 'axios';

// @ts-ignore
import {TokenModel} from "../models/TokenModel";
import {UserLoginModel} from "../Models/UserLoginModel";


const ipServer = "http://localhost:8080/app/v1";

export class UserService {
    login(userReq: UserLoginModel) {

        return axios
            .post(
                `${ipServer}/accounts/login`,
                userReq,
            )
            .then(function (response: AxiosResponse<TokenModel>) {
                return response.data;

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getToken(token1: string) {
        const config = {
            headers: {Authorization: `Bearer ${token1}`}
        };
        // axios.defaults.headers.common = {
        //     "Content-Type": "application/json",
        //     "Paul": "Paul",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Credentials":"true",
        //     'Authorization': 'Bearer ' + token1
        // };
        return axios
            .get(
                `${ipServer}/accounts/valid-token`,
                {
                    headers: {
                        "Authorization": `Bearer ${token1}`, "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                    }
                }
            )
            .then(function (response: AxiosResponse<any>) {
                return response.status === 200;

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

