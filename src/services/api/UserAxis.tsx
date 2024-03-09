import axios, {AxiosResponse} from 'axios';

// @ts-ignore
import {TokenModel} from "../models/TokenModel";
// @ts-ignore
import {UserLoginModel} from "../Models/UserLoginModel";



const ipServer = "https://app-backserver1.onrender.com/app/v1";

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

