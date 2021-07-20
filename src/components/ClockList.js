
import Clock from "./Clock";
function ClockList({quantity=[]}){
    return(
       quantity.map((cl,index)=><Clock key={Math.random()}/>) 
    )
}

export default ClockList;