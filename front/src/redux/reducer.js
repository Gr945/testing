
const initialstate = {arr:[{data:'21.02.2020', name:'Ttttt',
amount:5, distance:1000 }, {data:'25.01.2018', name:'SSSSS',
amount:8, distance:3000 },{data:'5.10.2018', name:'RRRR',
amount:1, distance:1500 }],
 fil:{ heading:'data', condition:'',meaning:''}
}

function reducer(state = initialstate, action) {
  switch (action.type) {
    case 'INIT_OBJECTS':
      return {...state, arr:action.payload}
    case "ADD_HEADING":
      return {...state, fil: {...state.fil,heading:action.payload}};
    case "ADD_CONDITION":
      return {...state, fil: {...state.fil,condition:action.payload}};
    case "ADD_MEANING":
        return {...state, fil: {...state.fil,meaning:action.payload}};
    default:
      return {...state};
  }
}

export default reducer
