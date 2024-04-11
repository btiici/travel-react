
export default function Body(props){
    return(
        <div>
            <div className="option">
                <img src={props.item.img}/>
                <div>
                    <div className="location">
                        <img src={props.item.map}/>
                        <span className="country">{props.item.country}</span>
                        <span><a href={props.item.GoogleMap}>View on Google Maps</a></span>
                    </div>
                    <h2>{props.item.place}</h2>
                    <h4>{props.item.Date}</h4>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}