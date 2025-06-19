import axios from 'axios';
export default axios.create({
    baseURL:"https://pfadmin.workstream.club/public/api",
    headers:{
        "Content-Type":"application/json"
    }
})