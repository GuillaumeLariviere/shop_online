const FilterLink =(props) =>{
    const {value,name,onClick} = props
    return(
        <li className="nav-item">
            <a className="nav-link" href=""  onClick={(e) => onClick(e,value)}>{name} </a>
        </li>
    )
}
export default FilterLink;