import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetailPage() {

    const { id } = useParams();
    const [products, setProducts] = useState();

    function fetchProducts() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [id])

    return (
        <>
            {products ?
                (
                        <div className="products-card">
                            <div className="products-image">
                                <img src={products.image} alt={products.title} />
                            </div>
                            <div className="products-info">
                                <h2>{products.title}</h2>
                                <p className="info">{products.price}</p>
                            </div>
                        </div>
                ) 
                : 
                (<p>caricamento...</p>)
            }
        </>
    )
}