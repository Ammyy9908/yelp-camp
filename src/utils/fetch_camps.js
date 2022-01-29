import axios from 'axios';

const fetchCamps = async () =>{
    
    try{
        const r= await axios.get(`https://yelpcampserver.herokuapp.com/api/camps`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default fetchCamps;