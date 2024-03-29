import axios, {AxiosResponse} from 'axios';
import {UserLoginModel} from "../models/UserLoginModel";
// @ts-ignore
import {TokenModel} from "../models/TokenModel";


const ipServer = "http://localhost:8080/app/v1";

export class UserService {
    login(userReq: UserLoginModel) {

        return axios
            .post(
                `${ipServer}/accounts/login`,
                    userReq,

            )
                    .then(function (response:AxiosResponse<TokenModel>) {
                return response.data;

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

