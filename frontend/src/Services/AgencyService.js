import axios from 'axios';

const Agency_API_BASE_URL = "http://localhost:8080/api/v1/agencies";

class AgencyService {

    getAgencies(){
        return axios.get(Agency_API_BASE_URL);
    }

    createAgency(agency){
        return axios.post(Agency_API_BASE_URL, agency);
    }

    getAgencyById(agencyId){
        return axios.get(Agency_API_BASE_URL + '/' + agencyId);
    }

    updateAgency(agency, agencyId){
        return axios.put(Agency_API_BASE_URL + '/' + agencyId, agency);
    }

    deleteAgency(agencyId){
        return axios.delete(Agency_API_BASE_URL + '/' + agencyId);
    }
}

export default new AgencyService()