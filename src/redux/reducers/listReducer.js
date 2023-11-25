const listReducer = (state = localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list')), action) => {
    switch(action.type){
        case "updateList" : return action.payload;
        default: return state;
    }
}

export default listReducer;