import axios, {Axios, AxiosResponse} from "axios";
import {TokenModel} from "../models/tokenModel";

const ipServer = "http://localhost:8080/app/v1";

export class UserService {
    async login() {
        return axios.get(`${ipServer}/accounts/login`)
            .then(function (response:AxiosResponse<TokenModel>) {
                return response.data.token;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

