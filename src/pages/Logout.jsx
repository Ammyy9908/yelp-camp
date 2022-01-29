import Cookies from 'js-cookie';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Logout({setUser}) {

    const history = useHistory();

    React.useEffect(()=>{
        setUser(null);
        Cookies.remove('jwt-token');
        history.push('/browse');
    },[])
  return <div></div>;
}


const mapDispatchToProps = (dispatch) => ({
    setUser:(user)=>dispatch({type:'SET_USER',user})
})

export default connect(null,mapDispatchToProps)(Logout);
