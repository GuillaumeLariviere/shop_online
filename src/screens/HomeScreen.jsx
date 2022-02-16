import {useState } from "react";
import  FilterMenu  from "../components/layouts/filter_menu";
import  Products  from "../components/layouts/Products";
// import {Gender}  from "../models/gender.model";

const HomeScreen = () => {

    const [gender_id,setGenderId] = useState(null)
    const [category_id,setCategoryId] = useState(null)
    
    const genderOnClick = (e,id)=> {
        e.preventDefault()
        setGenderId(id)
    }
    const categoryOnClick = (e,id)=> {
        e.preventDefault()
        setCategoryId(id)
    }
    
        return (
          <>

            <FilterMenu gender_id={gender_id} category_id={category_id} genderOnClick={genderOnClick} categoryOnClick={categoryOnClick}/>
            <Products gender_id={gender_id} category_id={category_id}  />

          </>
        );
};

export default HomeScreen;