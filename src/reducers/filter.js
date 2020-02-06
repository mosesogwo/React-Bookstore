const filterReducer = (state='All', action) => {
  switch(action.type){
    case 'CHANGE_FILTER':
      console.log(action.filter)
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;