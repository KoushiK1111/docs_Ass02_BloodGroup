import { InitialData } from "../data/InitialData";

const initialState=InitialData;

const Reducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD_DONAR":
            return[...state,action.payload];
        default:
            return state;
    }
}

export default Reducer;