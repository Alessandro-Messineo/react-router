import { Link } from "react-router-dom";

export default function ProductsCard(props) {

    // const { image, title, price, id } = props;
     const { product } = props;

    return (
        
        // <div className="products-card">
        //     <div className="products-image">
        //         <img src={image} alt={title} />
        //     </div>
        //     <div className="products-info">
        //         <h2>{title}</h2>
        //         <p className="info">{price}</p>
        //         <Link to={`/prodotti/${id}`}>
        //             <p>Dettaglio prodotto</p>
        //         </Link>
        //     </div>
        // </div>


        <div className="products-card">
            <div className="products-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="products-info">
                <h2>{product.title}</h2>
                <p className="info">{product.price}</p>
                <Link to={`/prodotti/${product.id}`}>
                    <p>Dettaglio prodotto</p>
                </Link>
            </div>
        </div>
    )
}