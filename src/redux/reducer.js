
export const listReducer = (state = { list: ["Sujan2", "Rajiv", "Charan"] }, action) => {
    switch (action.type) {
        case "ADD_TO_LIST": let oldList = state.list;
            oldList.push(action.value);
            return Object.assign({}, state, { list: oldList });
        default: return state;
    }
}