import axios from 'axios';
import Cookies from 'js-cookie';

const addCamp = async (title,image,description,price,lat,long) =>{
    console.log(title,image,description,price,lat,long);
    
    try{
        const r= await axios.post(`https://yelpcampserver.herokuapp.com/api/camp/new`,{
            title,
            image,
            description,
            price,
            location:'New York',
            lat,
            long
        },{
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

export default addCamp;