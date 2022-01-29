import axios from 'axios';


const signup = async (username,password) =>{
    try{
        const r= await axios.post(`http://localhost:5000/auth/new`,{username,password});
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default signup;