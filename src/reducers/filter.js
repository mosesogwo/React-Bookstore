const initFilter = 'All'

const filterReducer = (state=initFilter, action) => {
  switch(action.type){
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;