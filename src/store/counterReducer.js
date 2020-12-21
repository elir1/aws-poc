const initialState = {
    counter: 0,
    lang: "en"
}

const counterStore = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 }

        case "DECREMENT":
            return { counter: state.counter - 1 }

        case "CHANGE_LANG":
            return {...state, lang: action.payload }

        default:
            return state;
    }

}

export default counterStore;