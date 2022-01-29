import axios from 'axios';

const fetchCamps = async () =>{
    
    try{
        const r= await axios.get(`http://localhost:5000/api/camps`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default fetchCamps;