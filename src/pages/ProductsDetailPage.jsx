// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetailPage() {

     const { id } = useParams();

    return(
        <h1>prodotto id:{id} </h1>
    )
}