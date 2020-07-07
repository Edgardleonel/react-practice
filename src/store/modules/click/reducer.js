export default function click(state = {}, action) {
    console.log(action)

    switch (action.type) {
        case "ADD_CLICK":
            return {
            ...state,
           open: action.open,
        }
        default:
            return state;
    }

}