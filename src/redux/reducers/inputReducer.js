const inputReducer = (state = "", action) => {
    switch(action.type){
        case "updateInput" : return action.payload;
        default: return state;
    }
}

export default inputReducer;