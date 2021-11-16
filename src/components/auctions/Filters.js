import React, { useContext} from 'react';
import Select from "../filters/Select";
import Range from "../filters/Range";
import Categories from "../filters/Categories";

const Filters = () => {
  return (

   
    <div
      style={{ paddingLeft: "16px" }}
      className="d-flex justify-content-between flex-column pb-5  "
    >


             <Select />

             <Range />

             <Categories />
      
    
     
    </div>
  );
};

export default Filters;
