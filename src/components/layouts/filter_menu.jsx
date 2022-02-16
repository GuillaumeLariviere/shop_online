

import { useEffect,useState } from "react";
import FilterLink from "./filterLink";


const FilterMenu =(props) =>{

  const{genderOnClick, categoryOnClick, gender_id, category_id}=props;

  const [genders, setGenders] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchGenders = async () => {
      const json = await (await fetch("http://localhost:5000/gender",{method:"get"})).json()
      setGenders(json);
    }
    const fetchCategories = async () => {
      const json = await (await fetch("http://localhost:5000/category",{method:"get"})).json()
        setCategories(json);
    }


    fetchGenders()
      .catch(console.error);;

    fetchCategories()
      .catch(console.error);;
        
    }, [])
    
  return(
    <div>
        <ul className="nav justify-content-center">
        {
          genders.map(gender =>{
              return <FilterLink key={gender.id} name={gender.title} onClick={genderOnClick} value={gender.id}/>
          })
        }
        <FilterLink key={0} name={"tous les genre"} onClick={genderOnClick} value={null}/>
        </ul>
        <ul className="nav justify-content-center">
        {
          categories.map(category =>{
              return <FilterLink key={category.id} name={category.title} onClick={categoryOnClick} value={category.id}/>
          })
        }
        <FilterLink key={0} name={"toutes les categories"} onClick={categoryOnClick} value={null}/>
        </ul>      
        <p>genre selectionné {gender_id}</p>
        <p>categorie selectionnée {category_id}</p>
    </div>
  )
}
export default FilterMenu;