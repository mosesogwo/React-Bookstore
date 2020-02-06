const filterReducer = (state='', action) => {
  switch(action.type){
    case 'CHANGE_FILTER':
      console.log(action.filter)
      return action.filter;
    default:
      return 'All';
  }
}

export default filterReducer;