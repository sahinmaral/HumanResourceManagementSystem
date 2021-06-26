import axios from "axios"

export default class JobAdvertService{
    getAllJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdverts/getAllAdsByDetails")
    }

    getActiveJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdverts/getAllActiveAdsByDetails")
    }

    getJobAdvertById(id){
        return axios.get("http://localhost:8080/api/jobAdverts/getJobAdvertById?id="+id)
    }

    addJobAdvert(){
        return axios.post("http://localhost:8080/api/jobAdverts/getJobAdvertById")
    }
}