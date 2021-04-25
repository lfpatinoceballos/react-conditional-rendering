import React from 'react';
import './matter-category.style.css';
const MatterCategory = (props) => {
    return (
        <div className="matter-category-container">
           {props.categoryName}
        </div> 
    );
}

export default MatterCategory;