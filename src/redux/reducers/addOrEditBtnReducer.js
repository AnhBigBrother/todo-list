const addOrEditBtnReducer = (state = true, action) => {
    switch(action.type){
        case "addOrEditBtn": return action.payload;
        default: return state;
    }
}

export default addOrEditBtnReducer;