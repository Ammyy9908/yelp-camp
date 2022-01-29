import axios from 'axios';
import Cookies from 'js-cookie';

const getuser = async () =>{
    
    try{
        const r= await axios.get(`http://localhost:5000/auth/user`,{
            headers:{
                'Authorization':`${Cookies.get('jwt-token')}`
            }
        });
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getuser;