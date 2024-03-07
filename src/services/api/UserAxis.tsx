import axios, {AxiosResponse} from 'axios';

// @ts-ignore
import {TokenModel} from "../models/TokenModel";
import {UserLoginModel} from "../models/UserLoginModel";
import {UserRegisterModel} from "../models/UserRegisterModel";


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


    register(userReq: UserRegisterModel) {

        return axios
            .post(
                `${ipServer}/accounts/register`,
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

