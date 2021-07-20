import ClockList from "./components/ClockList";

function App(){
    const quantities=[1,2,3,4,5,6,7,8]
    
    return(
        <>
            <ClockList quantity={quantities}/>
        </>
    )
}
export default App;