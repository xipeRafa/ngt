import React, {useState, useContext, useEffect} from 'react';
import { FilterContext } from '../../context/FilterContext';
import { useFirestore } from '../../hooks/useFirestore';

const Select = () => {
      const { docs } = useFirestore('auctions');

      let db = [...docs]

  const { handleDB } = useContext(FilterContext);
  const [selectState, setSelectState] = useState([]);

  const handleSelect = (e) => {
    const techs = Array.from(e.target.selectedOptions, (el) => el.value);
    setSelectState(techs);
  };

  useEffect(() => {
      if(selectState[0]==='Price'){
            let price = db.sort((o1, o2) => o1.curPrice - o2.curPrice)
            handleDB(price)
            return
          }
      if(selectState[0]==='PriceMaxToMin'){
            let price = db.sort((o1, o2) => o2.curPrice - o1.curPrice)
            handleDB(price)
            return
      }
      if(selectState[0]==='DateMaxToMin'){
            let Date = db.sort((o1, o2) => o2.createdAt - o1.createdAt)
            handleDB(Date)
            return
      }
      if(selectState[0]==='Date'){
            let Date = db.sort((o1, o2) => o1.createdAt - o2.createdAt)
            handleDB(Date)
            return
      }
  }, [selectState])

/*   console.log("selectState:", selectState); */
 

  return (
    <div>
      <div className="w-75">
        <h2>Filtros</h2>

        <select className="form-select w-100 " onChange={handleSelect} value={selectState}>
          <option>
           Filtrar por
          </option>
          <option value="Price">
            Precio
          </option>
          <option value="PriceMaxToMin">
            Precio Max to Min
          </option>
          <option value="Date">
            Fecha
          </option>
          <option value="DateMaxToMin">
            Fecha Max to Min
          </option>
        </select>
      </div>
    </div>
  );
};

export default Select;
