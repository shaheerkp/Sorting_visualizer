import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([5, 2, 1, 8, 16, 10, 4, 3]);

  useEffect(() => {
    console.log("eeee");
  }, []);

  const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr
  };

  const a = () => {
    let tempArr = sort(data)
    console.log(data);
     setData([...tempArr]);
     console.log(data);
  };

  return (
    <>
      <button onClick={a}>start</button>
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
