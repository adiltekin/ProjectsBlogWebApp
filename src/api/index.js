import axios from 'axios';

const BASE_URL = "http://localhost:8056/api/";

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + "/";
    return{
        fetchAll : action => axios.get(url + action),
        fetchById : (id, action) => axios.get(url + id + "/" + action),
        create : (action, newRecord) => axios.post(url + action, newRecord),
        update : (id, action, updatedRecord) => axios.put(url + id + "/" + action, updatedRecord),
        delete : (id, action) => axios.delete(url + id + "/" + action),
        authenticate : (action, values) => axios.post(url + action, values),
    }   

}

