import React from 'react';
import ProductTable from '../subjects-table/subjects-table.comp';
import './filterable-subjects-table.style.css';
const FilterableProductTable = () => {
    return (
        <div className="filterable-subjects-tabe-container"> Subjects
            <ProductTable/>
        </div>
    );
}

export default FilterableProductTable;