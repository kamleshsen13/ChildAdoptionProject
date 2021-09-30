import axios from 'axios';

const Child_API_BASE_URL = "http://localhost:8080/api/v1/childes";

class ChildService {

    getChildes(){
        return axios.get(Child_API_BASE_URL);
    }

    createChild(child){
        return axios.post(Child_API_BASE_URL, child);
    }

    getChildById(childId){
        return axios.get(Child_API_BASE_URL + '/' + childId);
    }

    updateChild(child, childId){
        return axios.put(Child_API_BASE_URL + '/' + childId, child);
    }

    deleteChild(childId){
        return axios.delete(Child_API_BASE_URL + '/' + childId);
    }
}

export default new ChildService()