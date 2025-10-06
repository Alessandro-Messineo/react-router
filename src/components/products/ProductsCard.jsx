export default function ProductsCard( props ) {

    const { image, title, price } = props;

    return(
        <div className="products-card">
                    <div className="products-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="products-info">
                        <h2>{title}</h2>
                        <p className="info">{price}</p>
                    </div>
                </div>
    )
}