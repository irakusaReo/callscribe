import React from 'react';
import { Link } from 'react-router-dom';

const CallTypeSelection = () => {
    return (
        <div>
            <h1>Select Call Type</h1>
            <Link to="/prospect">Prospect Call</Link>
            <Link to="/inbound">Inbound Call</Link>
        </div>
    );
};

export default CallTypeSelection;
