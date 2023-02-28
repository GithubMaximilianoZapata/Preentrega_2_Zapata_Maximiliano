
import "./item.css"
import { Link } from "react-router-dom";

const Item = ({ prod }) => {

    return (
        <>
            <div className="card mb-3 cardProd">
                <img src={prod.img} className="card-img-top foto" alt={prod.nombre} />
                <div className="card-body">
                    <h5 className="card-title nombre">{prod.nombre}</h5>
                    <Link to={`/item/${prod.id}`}><button type="button" className="btn btn-dark">Mas Informacion</button></Link>
                </div>
            </div>
        </>
    );
};
export default Item;

