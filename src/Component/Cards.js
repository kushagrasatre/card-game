import React, { useEffect, useState } from "react"
import DrawComponent from "./DrawComponent";
import InnerCard from "./InnerCard";
import { connect } from "react-redux";
import { DrawnCreator, ResetCreator, SelectCardCareator, ShuffleCreator, SortCreator } from "../Redux/CardActions";
import { clubCreator, diamondCreator, drawnResetCreator, heartCreator, spadeCreator } from "../Redux/DrawnActions";
import { Button } from "../Styled/Button";
const Cards = (props) => {
    let cardTypes = ["spade", "heart", "diamond", "club"]
    const [updatedCard, setUpdatedCard] = useState([]);
    const [choseRemoveCard, setChooseRemovedCard] = useState("")
    const [drawnArray, setDrawnArray] = useState([]);
    const [removeButtonClickd,setRemovedButtonClicked]=useState(false)
    useEffect(() => {
        setUpdatedCard(props.mutableCardState);


    }, [props.mutableCardState])

    useEffect(() => {
       if(removeButtonClickd){
        let body = document.body,
            html = document.documentElement;
        let height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        window.scrollTo(0, height);
       }
    },[removeButtonClickd])

    if (!updatedCard) {
        return false;
    }


    // Shuffle Method
    const Shuffle = () => {
        const shuffle_New_array = []
        while (shuffle_New_array.length < updatedCard.length) {
            let RandomNumber = Math.floor(Math.random() * updatedCard.length);
            if (!shuffle_New_array.includes(updatedCard[RandomNumber])) {
                shuffle_New_array.push(updatedCard[RandomNumber])
            }
        }
        props.shuffleDispatch(shuffle_New_array)
        setUpdatedCard(shuffle_New_array)
        setRemovedButtonClicked(false)
    };

    // Sorting Method
    const SortCards = () => {
        let sorted_New_array = [];
        sorted_New_array = updatedCard.sort(function (a, b) {
            return a["cardNumber"] - b["cardNumber"];
        });
        props.sortDispatch(sorted_New_array)
        setUpdatedCard([...sorted_New_array])
        setRemovedButtonClicked(false)
    }

    // Reset Method
    const Reset = () => {
        const Reset_New_array = [...props.mutableCardState];
        setUpdatedCard([...Reset_New_array]);
        props.resetDispatch([...Reset_New_array])
        props.drawnResetDispatch([])
        setDrawnArray([]);
        setRemovedButtonClicked(false)
    }

    // Selected Card Method
    const SelectCard = (card) => {
        let select_New_array = [];
        setChooseRemovedCard({ ...card, selected: true })
        select_New_array = updatedCard.map((element) => {
            if (element.cardNumber === card.cardNumber) {
                return { ...element, selected: true }
            }
            return { ...element, selected: false }
        })

        props.selectDispatch(select_New_array);
        setUpdatedCard(select_New_array)
        setRemovedButtonClicked(false)
    }

    const DrawnArrayMethod = (slectObject) => {
        switch (slectObject.type.toLowerCase()) {
            case "spade":
                props.spadeDispatch(slectObject);
                break;

            case "heart":
                props.heartDispatch(slectObject);
                break;

            case "diamond":
                props.diamondDispatch(slectObject);
                break;

            case "club":
                props.clubDispatch(slectObject);
                break;

            default:
                break;
        }
    }
    // Remove Card Method
    const Remove = () => {
        var remove_New_array = [];
        //removed selected element from main array

        remove_New_array = updatedCard.filter((element) => {
            //if selected element card number is not equal to main elements card number  
            return element.cardNumber !== choseRemoveCard.cardNumber;
        })

        //push removed element in Drawn Array
        setDrawnArray([...drawnArray, { ...choseRemoveCard, selected: false }]);

        props.drawnDispatch(remove_New_array)
        // Updated main cards on the state after removing the selected element
        setUpdatedCard(remove_New_array);
        DrawnArrayMethod({ ...choseRemoveCard, selected: false })
        //update redux state after removing the selected element
        setRemovedButtonClicked(true)

    }

    return (
        <>

            <div className="ButtonContainer">
                <Button onClick={Shuffle}>Shuffle</Button>
                <Button onClick={SortCards}>Sort</Button>
                <Button onClick={Remove} disabled={!Boolean(props.mutableCardState.find((element) => {
                    return element.selected == true
                }))}>Remove</Button>
                <Button onClick={Reset}>Reset</Button>
            </div>

            <div className="orignalCardContainer">
                {
                    props.mutableCardState.map((element, index) => {
                        return (
                            <InnerCard element={element} key={index} SelectCard={SelectCard} />
                        )
                    })
                }
            </div>

            {
                drawnArray.length > 0 && <div className="DrawnContainer">
                    {
                        cardTypes.map((element, index) => {
                            return <DrawComponent key={index} icon={element} drawnArray={drawnArray} drawnCardState={props.drawnCardState} />
                        })
                    }

                </div>
            }


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        mutableCardState: state.mcards,
        drawnCardState: state.drawnCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        shuffleDispatch: (payload) => {
            dispatch(ShuffleCreator(payload))
        },
        resetDispatch: (payload) => {
            dispatch(ResetCreator(payload))
        },
        sortDispatch: (payload) => {
            dispatch(SortCreator(payload))
        },
        drawnDispatch: (payload) => {
            dispatch(DrawnCreator(payload))
        },
        selectDispatch: (payload) => {
            dispatch(SelectCardCareator(payload))
        },

        // DrawnCreators

        spadeDispatch: (drawnPayload) => {
            dispatch(spadeCreator(drawnPayload))
        },
        heartDispatch: (drawnPayload) => {
            dispatch(heartCreator(drawnPayload))
        },
        diamondDispatch: (drawnPayload) => {
            dispatch(diamondCreator(drawnPayload))
        },
        clubDispatch: (drawnPayload) => {
            dispatch(clubCreator(drawnPayload))
        },
        drawnResetDispatch: (drawnPaylaod) => {
            dispatch(drawnResetCreator(drawnPaylaod))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);