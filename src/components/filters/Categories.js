
import React, { useState, useContext, useEffect } from "react";
import { useFirestore } from '../../hooks/useFirestore';
import { FilterContext } from '../../context/FilterContext';

const Categories = () => {
      const { handleDB } = useContext(FilterContext);

      const { docs } = useFirestore('auctions');

      let db = [...docs]
      
      const[oxxo, setoxxo]=useState(true); 
      const[otro1, setotro1]=useState(true); 
      const[otro2, setotro2]=useState(true); 

      const handleoxxo =(e)=>{ 
            setoxxo(!oxxo) 
            oxxo  ? setArrFilter([...arrFilter, e.target.value]) 
                  : removeItemFromArr( arrFilter, e.target.value )
      }

      const handleotro1 =(e)=>{ 
            setotro1(!otro1) 
            otro1  ? setArrFilter([...arrFilter, e.target.value]) 
                  : removeItemFromArr( arrFilter, e.target.value )
      }
      
      const handleotro2 =(e)=>{ 
            setotro2(!otro2) 
            otro2  ? setArrFilter([...arrFilter, e.target.value]) 
                  : removeItemFromArr( arrFilter, e.target.value )
      }

      const[arrFilter, setArrFilter]=useState([])
 
      function removeItemFromArr( arrFilter, item ) {
            let index = arrFilter.indexOf( item );
            if(index>-1){ arrFilter.splice( index, 1 )} 
      }
      /* console.log('Array-false:', arrFilter) */
     
      useEffect(() => {
            for (let index = 0; index < arrFilter.length; index++) {
                  const element = db.filter(el => el.categorie !== arrFilter[index]);
                  db = element
                 /*  console.log('for:', db)  */
            } 
               handleDB(db)
      
      }, [arrFilter, oxxo, otro1, otro2])
    
      useEffect(() => {
             setTimeout(() => {
                  setoxxo(!oxxo)  
                  setoxxo(true)  
            }, 200); 
      }, [docs])
                  
  return (
    <div>
      <div className="w-75">
        <h2>Clientes</h2>
        <label>
          <input type="checkbox" className="m-1" value='oxxo' onChange={e=>handleoxxo(e)}  checked={oxxo}/>
          oxxo 
        </label>
        <br />
        <label>
          <input type="checkbox" className="m-1" value='otro1' onChange={e=>handleotro1(e)} checked={otro1}/>
          otro1 
        </label>
        <br />
        <label>
          <input type="checkbox" className="m-1" value='otro2' onChange={e=>handleotro2(e)} checked={otro2}/>
          otro2 
        </label>
      </div>
    </div>
  );
};

export default Categories;
