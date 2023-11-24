const listReducer = (state = JSON.parse(localStorage.getItem('list')), action) => {
    switch(action.type){
        case "updateList" : return action.payload
    }
    return state;
}

export default listReducer;