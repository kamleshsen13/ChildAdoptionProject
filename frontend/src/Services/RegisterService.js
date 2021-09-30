import axios from 'axios';

const Register_API_BASE_URL = "http://localhost:8080/api/v1/registers";

class RegisterService {

    getRegisters(){
        return axios.get(Register_API_BASE_URL);
    }

    createRegister(register){
        return axios.post(Register_API_BASE_URL, register);
    }

    getRegisterById(registerId){
        return axios.get(Register_API_BASE_URL + '/' + registerId);
    }

    updateRegister(register, registerId){
        return axios.put(Register_API_BASE_URL + '/' + registerId, register);
    }

    deleteRegister(registerId){
        return axios.delete(Register_API_BASE_URL + '/' + registerId);
    }
}

export default new RegisterService()