import Counter from "../Counter/Counter";
import "./itemDetail.css";

const ItemDetail = ({ prod }) => {

    return (
        <>
            <div className="card mb-3 cardDetail" style={{ max_widht: "200px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={prod.img} className="img-fluid rounded-start" alt={prod.nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">{prod.descripcion}</p>
                            <p className="card-text">$ {prod.precio} x Kg/Unid.</p>
                            <p className="card-text">Stock Disponible: {prod.stock} Kg/Unid.</p>
                            <Counter stock={prod.stock} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ItemDetail;


