import { Link } from "react-router-dom"


const ProductDetails = (props) => {

    const{title, image, price , description} = props;

return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{title}</h1>    
                </div>
            </div>
            <div className="row">
                        <div className="col-6">
                            <img src={image} alt="" />
                        </div>
                        <div className="col-6">
                            <div>{description}</div>
                            <div>{price}</div>
                        <a href="#" className="btn btn-outline-dark"> add to cart</a>
                     <Link to="/" className="btn btn-outline-dark mt-auto">retour</Link>
                </div>
            </div>
        </div>
    </>
)

}
export default ProductDetails;