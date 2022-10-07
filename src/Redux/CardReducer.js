import { CLUB, DIAMOND, DRAWN, DRAWN_RESET, HEART, RESET, SELECT_CARD, SHUFFLE, SORT, SORT_DRAWN_CLUB, SORT_DRAWN_DIAMOND, SORT_DRAWN_HEART, SORT_DRAWN_SPADE, SPADE } from "./CardType";


const cardNANMethod = (cardNumber) => {
    switch (cardNumber) {
        case 1:
            return "A"
            break;
        case 11:
            return "J"
            break
        case 12:
            return "Q"
            break

        case 13:
            return "K"
            break
        default:
            return cardNumber;
            break;
    }
}
const IntialState = () => {
    const my_cards = [];
    const cardLength = 52;
    const totalSet = 4;
    const eachSetCards = cardLength / totalSet;
    let cardType = "";
    let cardIcon = "";
    let counter = 1;
    for (var i = 1; i <= cardLength; i++) {
        if (i <= 13) {
            cardType = "SPADE";
            cardIcon = "♠"
        } else if (i <= 26) {
            cardIcon = "♥";
            cardType = "HEART";
        }
        else if (i <= 39) {
            cardType = "DIAMOND";
            cardIcon = "♦️"
        }
        else if (i <= 52) {
            cardType = "CLUB";
            cardIcon = "♣️"
        }
        if (my_cards.length < cardLength) {
            my_cards.push({
                cardNumber: i,
                type: cardType,
                cardValue: cardNANMethod(counter),
                cardIcon: cardIcon,
                selected: false
            })
        }
        if (counter === eachSetCards) {
            counter = 0;
        }
        counter++;
    }

    return my_cards;
}
export const CardReducer = (state = IntialState(), action) => {
    switch (action.type) {
        case SHUFFLE:
            return [...action.payload];
        case SORT:
            return [...action.payload];
        case DRAWN:
            return [...action.payload];
        case RESET:
            return [...IntialState()];
        case SELECT_CARD:
            return [...action.payload];
        default:
            return [...state];
    }
}


const drawIntialState = [{
    spade: [],
    heart: [],
    diamond: [],
    club: []
}]

export const drawnCardsReducer = (drawnstate = drawIntialState, action) => {
    switch (action.type) {
        case SPADE:
            return drawnstate.map((element) => {
                if (action.payload.type.toLowerCase() === "spade") {
                    return { ...element, spade: [...element.spade, action.payload] }
                }
                return element;
            })
        case HEART:
            return drawnstate.map((element) => {
                if (action.payload.type.toLowerCase() === "heart") {
                    return { ...element, heart: [...element.heart, action.payload] }
                }
                return element;
            })

        case DIAMOND:
            return drawnstate.map((element) => {
                if (action.payload.type.toLowerCase() === "diamond") {
                    return { ...element, diamond: [...element.diamond, action.payload] }
                }
                return element;
            })

        case CLUB:
            return drawnstate.map((element) => {
                if (action.payload.type.toLowerCase() === "club") {
                    return { ...element, club: [...element.club, action.payload] }
                }
                return element;
            })


        // SORT

        case SORT_DRAWN_SPADE:
            return drawnstate.map((element) => {
                if (element.spade) {
                    return {
                        ...element, spade: [...element.spade].sort(function (a, b) {
                            return a["cardNumber"] - b["cardNumber"];
                        })
                    }
                }
                else {
                    return { ...element }
                }
            })

        case SORT_DRAWN_HEART:
            return drawnstate.map((element) => {
                if (element.heart) {
                    return {
                        ...element, heart: [...element.heart].sort(function (a, b) {
                            return a["cardNumber"] - b["cardNumber"];
                        })
                    }
                }
                else {
                    return { ...element }
                }
            })

        case SORT_DRAWN_DIAMOND:
            return drawnstate.map((element) => {
                if (element.diamond) {
                    return {
                        ...element, diamond: [...element.diamond].sort(function (a, b) {
                            return a["cardNumber"] - b["cardNumber"];
                        })
                    }
                }
                else {
                    return { ...element }
                }
            })

        case SORT_DRAWN_CLUB:
            return drawnstate.map((element) => {
                if (element.club) {
                    return {
                        ...element, club: [...element.club].sort(function (a, b) {
                            return a["cardNumber"] - b["cardNumber"];
                        })
                    }
                }
                else {
                    return { ...element }
                }
            })

        case DRAWN_RESET:
            return drawIntialState;

        default:
            return [...drawnstate]

    }
}
