import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProspectCall = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [script, setScript] = useState(null);

    useEffect(() => {
        // Fetch products from server or define them statically
        setProducts(['Product 1', 'Product 2']);
    }, []);

    const handleProductSelect = async (product) => {
        setSelectedProduct(product);
        const res = await axios.get(`/api/scripts?product=${product}`);
        setScript(res.data);
    };

    return (
        <div>
            <h1>Prospect Call</h1>
            <div>
                {products.map(product => (
                    <button key={product} onClick={() => handleProductSelect(product)}>
                        {product}
                    </button>
                ))}
            </div>
            {script && (
                <div>
                    <h2>{script.title}</h2>
                    <p>{script.content}</p>
                    {/* Implement branching logic and checkpoints */}
                </div>
            )}
        </div>
    );
};

export default ProspectCall;
