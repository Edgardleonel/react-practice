export default function click(state = {open: false, anchor: 'left'}, action) {
    console.log(state)

    switch (action.type) {
        case "ADD_CLICK":
            return {
            ...state,
           open: action.open,
           anchor: action.anchor,
  
        }
        default:
            return state;
    }

}