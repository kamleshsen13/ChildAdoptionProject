import axios from 'axios';

const User_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(User_API_BASE_URL);
    }

    createUser(user){
        return axios.post(User_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(User_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(User_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(User_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()