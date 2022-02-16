import { Link } from "react-router-dom";

const MyCard = (props)=>{
    const{title, image, price ,catId , gendId, id} = props;
    return(
        <div className="col mb-5">
            <div className="card h-100">    
            <div className="piam">             
                <img className="card-img-top" src={image} alt="..." />     
            </div>               
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>                       
                      {price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {catId} : {gendId}
                    <div className="text-center">
                        <Link className="btn btn-outline-dark mt-auto" to={`productscreen/${id}`}>description</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyCard;