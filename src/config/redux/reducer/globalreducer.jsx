const globalinitialState = () => {
    nama='pambudi'
}

const globalreducer = (state = globalinitialState, action) => {

    if(action.type === "UPDATE_NAMA") {
        return {
            ...state,
            nama: 'Pambudi doyok'
        }
    }


    return state;
}


export default globalreducer;