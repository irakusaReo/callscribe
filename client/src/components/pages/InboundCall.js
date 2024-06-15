import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InboundCall = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [problems, setProblems] = useState([]);
    const [selectedProblem, setSelectedProblem] = useState('');
    const [script, setScript] = useState(null);

    useEffect(() => {
        // Fetch products from server or define them statically
        setProducts(['Product 1', 'Product 2']);
    }, []);

    const handleProductSelect = async (product) => {
        setSelectedProduct(product);
        // Fetch problems related to the selected product
        setProblems(['Problem 1', 'Problem 2']);
    };

    const handleProblemSelect = async (problem) => {
        setSelectedProblem(problem);
        const res = await axios.get(`/api/scripts?product=${selectedProduct}&problem=${problem}`);
        setScript(res.data);
    };

    return (
        <div>
            <h1>Inbound Call</h1>
            <div>
                {products.map(product => (
                    <button key={product} onClick={() => handleProductSelect(product)}>
                        {product}
                    </button>
                ))}
            </div>
            {problems.length > 0 && (
                <div>
                    {problems.map(problem => (
                        <button key={problem} onClick={() => handleProblemSelect(problem)}>
                            {problem}
                        </button>
                    ))}
                </div>
            )}
            {script && (
                <div>
                    <h2>{script.title}</h2>
                    <p>{script.content}</p>
                    {/* Implement prompts for agent inputs and escalation logic */}
                </div>
            )}
        </div>
    );
};

export default InboundCall;
