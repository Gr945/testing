
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import React,{useEffect, useState} from 'react';
import Pagination from './Pagination';


function App() {

  const dispatch = useDispatch()
  const storeArr = useSelector(store => store.arr)
  const storeName = useSelector(store => store.fil.heading)
  const storeCondition = useSelector(store => store.fil.condition)
  const storeMeaning = useSelector(store => store.fil.meaning)
  const [carrentPage, setCarrentPage] = useState(1)
  const [objectPerPage] = useState(5)


  const lastIndex = carrentPage * objectPerPage  
  const firstIndex = lastIndex - objectPerPage
  const carrentObj = storeArr.slice(firstIndex,lastIndex)    ///текущая страничка

  const paginFunc = (num) => { setCarrentPage(num) }  //пагинация


  const dounloadObjects = async () => {
    fetch(`http://localhost:2224`)
   .then( res => res.json())
   .then(data => dispatch({type:'INIT_OBJECTS',payload: data}))

  }
  useEffect(()=>{
    dounloadObjects()
  },[dispatch])


  const addHeading = (e) =>{
    dispatch({type:'ADD_HEADING', payload:e.target.value})

  }

  const addCondition = (e) =>{
    dispatch({type:'ADD_CONDITION', payload:e.target.value})
  }

  const addMeaning = (e) =>{
    dispatch({type:'ADD_MEANING', payload:e.target.value})
  }

  
  return (
    <div className="App">
       <form>
         <select onChange={(e) => addHeading(e)}>
     
        
           <option value='name' >Название</option>
           <option value='amount' >Количество</option>
           <option value='distance' >Расстояние</option>
         </select>
         <select onChange={(e) => addCondition(e)}>
 
           <option value='равно' > Равно </option>
           <option value='содержит' >Содержит</option>
           <option value= 'больше' >Больше</option>
           <option value='меньше' >Меньше</option>
         </select>
         <input style={{margin:'10px 10px 10px 10px'}} placeholder='значение для фильтра' onChange={(e) => addMeaning(e)}></input>
       </form>


     TABLE
     <tr style={{marginTop:'50px'}} className='zag'>
                <th className='th'>Дата</th>
                <th className='th'>Название</th>
                <th className='th'>Количество</th>
                <th className='th'>Расстояние</th>
     </tr>
    {carrentObj.filter(a => {
   
      switch(storeCondition){
        case('равно'):{
          return a[storeName].toUpperCase() ==  storeMeaning.toUpperCase()}
        case('содержит'):{
            return a[storeName].toUpperCase().includes(storeMeaning.toUpperCase()) }
        case('больше'):{
              return a[storeName] > storeMeaning }
        case('меньше'):{
                return a[storeName] < storeMeaning }          
        default: return a[storeName]
      }}
      )
      .map(el => <tr className='zag'  key={el.name}> 
                <th className='th'>{el.data}</th>
                <th className='th'>{el.name}</th>
                <th className='th'>{el.amount}</th>
                <th className='th'>{el.distance}</th>
     </tr>)}

     <Pagination  objectPerPage={objectPerPage}  paginFunc={paginFunc} />

    </div>
  );
}

export default App;
