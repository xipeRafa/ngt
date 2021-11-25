
import React, {useState, useContext, useEffect} from 'react';
import { FilterContext } from '../../context/FilterContext';
import { useFirestore } from '../../hooks/useFirestore';

const Range = () => {
      const { docs } = useFirestore('auctions');

      let db = [...docs]

  const { handleDB } = useContext(FilterContext);
  const [selectState, setSelectState] = useState([]);

  const handleSelect = (e) => {
    const techs = Array.from(e.target.selectedOptions, (el) => el.value);
    setSelectState(techs);
  };

  useEffect(() => {
      if(selectState[0]==='all'){
            let all = db.filter(el => el)
            handleDB(all)
            return
          }
      if(selectState[0]==='done'){
            let done = db.filter(el => el.completed === true)
            handleDB(done)
            return
          }
      if(selectState[0]==='fallen'){
            let fallen = db.filter(el => el.completed === false)
            handleDB(fallen)
            return
      }
  }, [selectState])

  /* console.log("selectState:", selectState); */
 

  return (
    <div>
      <div className="w-75">
        <h2>Resultados</h2>

        <select className="form-select w-100 " onChange={handleSelect} value={selectState}>
          <option value="all">
            Todos
          </option>
          <option value="done">
           Completados
          </option>
          <option value="fallen">
            Sin Completar
          </option>
        </select>
      </div>
    </div>
  );
};

export default Range;

