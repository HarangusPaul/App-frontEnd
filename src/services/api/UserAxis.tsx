import axios, {AxiosResponse} from 'axios';

// @ts-ignore
import {TokenModel} from "../models/TokenModel";
// @ts-ignore
import {UserLoginModel} from "../Models/UserLoginModel";


const ipServer = "http://localhost:8080/app/";

export class UserService {
    login(userReq: UserLoginModel) {

        return axios
            .post(
                `${ipServer}v1/accounts/login`,
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

        try {
            axios
                .get(
                    `${ipServer}v2/accounts/valid-token`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token1}`, "Cache-Control": "no-cache"
                        }
                    }
                )
                .then(function (response: AxiosResponse<any>) {
                    return response.status === 200;

                })
                .catch(function (error) {
                    // console.log(error);
                    return false
                });
            return true;
        } catch (e) {
            return false;
        }
    }
}

