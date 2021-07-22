import { useState ,useEffect} from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [text,setText]=useState('')
  const tick = () => {
    setDate(new Date());
  };

  useEffect(()=>{
      console.log("Le Halua")
      document.title=`Clicked ${count} times`;
  
  },[count])
  useEffect(()=>{
      const interval=setInterval(tick,1000 );
    return ()=>{
        clearInterval(interval);
    }

  },[])


  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      </p>
      <p>
        <button onClick={addClick} type="button">
          Click
        </button>
      </p>
    </div>
  );
}
