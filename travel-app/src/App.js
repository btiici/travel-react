import Nav from "./components/Nav"
import "./style.css"
import Body from "./components/Body"
import data from "./components/data"


export default function App(){
    const travelData = data.map((item) =>{
        return(
            <Body 
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            <Nav />
            {travelData}
        </div>
    )
}