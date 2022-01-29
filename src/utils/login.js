import axios from 'axios';


const login = async (username,password) =>{
    try{
        const r= await axios.post(`http://localhost:5000/auth/login`,{username,password});
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default login;