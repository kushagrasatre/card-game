import { combineReducers } from "redux";
import { CardReducer, drawnCardsReducer } from "./CardReducer";

const rootReducer=combineReducers({
    mcards:CardReducer,
    drawnCards:drawnCardsReducer
})

export default rootReducer;