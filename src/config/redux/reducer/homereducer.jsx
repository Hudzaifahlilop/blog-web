const initialStateHome = () => {
    dataBlog=[];
}

const homereducer = (state = initialStateHome, action) => {

    if(action.type === "UPDATE_DATA_BLOGS"){
        return {
            ...state,
            dataBlogs: action.payload
        }
    }


    return state;
}

export default homereducer;