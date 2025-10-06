import { useState, useEffect } from "react";

export default function ProductsList() {

    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container-card">
            {products.map((product) => (
                <div className="products-card" key={product.id}>
                    <div className="products-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="products-info">
                        <h2>{product.title}</h2>
                        <p className="info">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}