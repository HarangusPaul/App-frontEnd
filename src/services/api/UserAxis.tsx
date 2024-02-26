import axios, {Axios, AxiosResponse} from "axios";

const ipServer = "http://localhost:8080/app/v1";

export class UserService {
    get() {
        axios.get(`${ipServer}/users/get`)
            .then(function (response:AxiosResponse<string>) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

