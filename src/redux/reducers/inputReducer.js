const inputReducer = (state = "", action) => {
    switch(action.type){
        case "updateInput" : return action.payload;
    }
    return state;
}

export default inputReducer;