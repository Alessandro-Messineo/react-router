import { Link } from "react-router-dom";

export default function ProductsCard(props) {

    const { image, title, price, id } = props;
    //  const {character } = props;

    return (
        <div className="products-card">
            <div className="products-image">
                <img src={image} alt={title} />
            </div>
            <div className="products-info">
                <h2>{title}</h2>
                <p className="info">{price}</p>
                <Link to={`/prodotti/${id}`}>
                    <p>Dettaglio prodotto</p>
                </Link>
            </div>
        </div>
    )
}