import React from 'react';
import { connect } from 'react-redux';
import HeaderMain from '../components/HeaderMain';
import addCamp from '../utils/add_camp';
import "./NewCamp.css";

function NewCamp({insertCamp}) {

    const [title,setTitle] = React.useState('');
    const [image,setImage] = React.useState('');
    const [description,setDescription] = React.useState('');
    const [price,setPrice] = React.useState('');


    const handleCampAdd = ()=>{
        if(title && image && description && price){
            addCamp(title,image,description,price).then((data)=>{
                const {camp} = data;
                insertCamp(camp);
                setTitle('');
                setImage('');
                setDescription('');
                setPrice('');
            }).catch((e)=>{
                console.log(e);
            });
        }
    }
  return <div className='new-camp-page'>
            <HeaderMain/>
            <div className="new-camp-body">
                <h2>Add New Campground</h2>
                <div className="new-camp-form">
                    <div className="input-field">
                        <label htmlFor="camp_name">Campground Name</label>
                        <input type="text" name="camp_name" id="camp_name" placeholder='Camp Name' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Price">Price</label>
                        <input type="text" name="Price" id="Price" placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" id="image" placeholder='Enter Image URL' value={image} onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Enter Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <button className="add_camp_btn" onClick={handleCampAdd}>Add Campground</button>
                </div>
            </div>
        </div>;
}



const mapDispatchToProps = (dispatch) => ({
    insertCamp: (camp) => dispatch({type:'ADD_CAMP',camp})
})
export default connect(null,mapDispatchToProps)(NewCamp);
