import React from 'react';
import MatterCategory from '../matter-category/matter-category.comp';
import Information from '../information-row/information.comp';
import './subjects-table.style.css';
const ProductTable = () => {
    return (
        <div className="subjects-table-container">
            <MatterCategory categoryName="Mathematics"/>
            <Information information={{
                name:"Luis Fernando",
                grade: 3 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Carlos Mario",
                grade: 2 ,
                gender: "Male",
            }}/>
            <Information information={{
                name:"Juan Diego",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Cesar Cardona",
                grade: 3 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Camila Giraldo",
                grade: 2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Pedro Jose",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Juan Martin",
                grade: 4 ,
                gender: 15,
            }}/>
            <MatterCategory categoryName="Programming 4"/>
            <Information information={{
                name:"Juan Jose",
                grade: 3 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Ricardo",
                grade: 2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Pedro",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Camilo",
                grade: 3 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Felipe",
                grade: 2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Andres",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Mauricio",
                grade: 4 ,
                gender: 15,
            }}/>
            <MatterCategory categoryName="English 5"/>
            <Information information={{
                name:"Edwin",
                grade: 3 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Mariana",
                grade: 2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Lucas",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Mario",
                grade: 3 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Eugenio",
                grade: 2 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Liliana",
                grade: 4 ,
                gender: 15,
            }}/>
            <Information information={{
                name:"Juliana",
                grade: 4 ,
                gender: 15,
            }}/>
        </div> 
    );
}

export default ProductTable;