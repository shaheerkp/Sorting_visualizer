import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([2,1,4,3]);

  useEffect(() => {
    
    console.log("eeee");
   
    
    
  }, []);
  
  

  const a = () => {
    
    for (let i = 0; i < data.length - 1; i++) {
     
      for (let j = i + 1; j < data.length; j++) {
     
        if (data[i] > data[j]) {
          let temp = data[j];
          let tempArr=[...data]
          console.log("t",tempArr);
          console.log("d",data);
          console.log("$$$$$$$$$$$$$$$$$$$$$$");
          tempArr[j]=tempArr[i]
          tempArr[i]=temp;
          setData(tempArr)
          console.log("t",tempArr);
          console.log("d",data);
          
        }
       
      }
    }
  };
 

  return (
    <>
      <button onClick={a}  >start</button>
      <div
        style={{
          padding: "5px",
          background: "black",
          alignContent: "center",
          margin: "auto",
          width: "500px",
        }}
        className="App"
      >
        {data.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                marginLeft: "5px",
                background: "red",
                width: "20px",
                display: "inline-block",
                height: `${ele * 10}px`,
              }}
            >
              {ele}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
