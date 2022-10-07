const InnerCard=({element,SelectCard})=>{
    return (
        <section  onClick={() => {
            SelectCard(element);
        }} className={`card card-${element.type.toLocaleLowerCase()} ${element.selected ? "select" : "noSelect"}`} key={element.cardNumber} value={element.cardValue}>
            <div className="card__inner card__inner-centered">
                <div className="card__column">
                    {
                        Array.apply(null, Array(element.cardValue)).map((element,index)=>{
                            return <div className="card__symbol" key={index}></div>
                        })
                    }
                </div>
            </div>
            <div className="card-front"></div>
        </section>
    )
}
export default InnerCard;