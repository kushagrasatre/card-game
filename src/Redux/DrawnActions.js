import { CLUB, DIAMOND, DRAWN_RESET, HEART, SORT_DRAWN_CLUB, SORT_DRAWN_DIAMOND, SORT_DRAWN_HEART, SORT_DRAWN_SPADE, SPADE } from "./CardType";


const spadeCreator = (payload) => {
    return {
        type: SPADE,
        payload: payload
    }
}

const diamondCreator = (payload) => {
    return {
        type: DIAMOND,
        payload
    }
}

const heartCreator = (payload) => {
    return {
        type: HEART,
        payload
    }


}
const clubCreator = (payload) => {
    return {
        type: CLUB,
        payload
    }
}

const drawnResetCreator = (payload) => {
    return {
        type: DRAWN_RESET,
        payload
    }
}

const sortSpadeCreator = (payload) => {
    return {
        type: SORT_DRAWN_SPADE,
        payload
    }

}

const sortDiamondCreator = (payload) => {
    return {
        type: SORT_DRAWN_DIAMOND,
        payload: payload
    }
}

const sortHeartCreator = (payload) => {
    return {
        type: SORT_DRAWN_HEART,
        payload: payload
    }
}


const sortClubCreator = (payload) => {
    return {
        type: SORT_DRAWN_CLUB,
        payload: payload
    }
}

export { spadeCreator, clubCreator, diamondCreator, heartCreator, drawnResetCreator, sortClubCreator, sortDiamondCreator, sortHeartCreator, sortSpadeCreator }