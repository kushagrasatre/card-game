import { DRAWN, RESET, SHUFFLE, SORT } from "./CardType"

const ShuffleCreator = (payload) => {
    return {
        type: SHUFFLE,
        payload: payload
    }
}

const SortCreator = (payload) => {
    return {
        type: SORT,
        payload
    }
}

const ResetCreator = (payload) => {
    return {
        type: RESET,
        payload
    }


}
const DrawnCreator = (payload) => {
    return {
        type: DRAWN,
        payload
    }
}

const SelectCardCareator=(payload)=>{
    return {
        type: DRAWN,
        payload
    }
}

export { ShuffleCreator, SortCreator, ResetCreator, DrawnCreator,SelectCardCareator }