import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-oasis-35139.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default useProducts;