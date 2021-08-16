import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css'
function Pagination({objectPerPage, paginFunc}) {
  const storeArr = useSelector(store => store.arr)

  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(storeArr.length / objectPerPage); i ++){
    pageNumbers.push(i)
  }
  return (
    <div>
      <div className='pagDiv'>
        {pageNumbers.map(el => (
          <div className='litlPagDiv' key={el} onClick={()=>paginFunc(el)}>
             <a>
               {el}
             </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Pagination;
