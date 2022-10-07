import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortClubCreator, sortDiamondCreator, sortHeartCreator, sortSpadeCreator } from "../Redux/DrawnActions";
import { Button } from "../Styled/Button";
import InnerCard from "./InnerCard";

const DrawComponent = ({ icon, drawnCardState }) => {
    const sortCardsCrator = `sort${icon[0].toLocaleUpperCase() + icon.slice(1)}Creator`;
    const DrawnArray = useSelector((state) => {
        return state.drawnCards[0][icon];
    })
    const Dispatch = useDispatch()
    return <div className="dContainer">
        <div className="icon">{icon.toLocaleUpperCase()}</div>
        <div className="drawnItemsContainer">
            {
                DrawnArray.map((element) => {
                    return (
                        <InnerCard key={element.cardNumber} element={element} />
                    )
                })
            }
        </div>
        <Button onClick={() => {
            switch (sortCardsCrator) {
                case "sortSpadeCreator":
                    Dispatch(sortSpadeCreator(DrawnArray));
                    break;
                case "sortDiamondCreator":
                    Dispatch(sortDiamondCreator(DrawnArray))
                    break;

                case "sortHeartCreator":
                    Dispatch(sortHeartCreator(DrawnArray))
                    break;

                case "sortClubCreator":
                    Dispatch(sortClubCreator(DrawnArray))
                    break

                default:
                    break;
            }
        }} disabled={DrawnArray.length<2}>Sort</Button>
    </div>
}


export default DrawComponent;

