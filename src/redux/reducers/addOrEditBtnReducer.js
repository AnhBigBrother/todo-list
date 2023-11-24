const addOrEditBtnReducer = (state = true, action) => {
    switch(action.type){
        case "addOrEditBtn": return action.payload
    }
    return state;
}

export default addOrEditBtnReducer;