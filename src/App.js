import { useState } from "react";
import { useRef } from "react";

function App() {
  const number = useRef(null);

  const [n, setN] = useState(0);

  console.log(n);

  function blackWhite(n) {
    let arr = [];

    for (let i = 0; i <= n - 1; i++) {
      if (i % 2 == 0) {
        arr.push("w");
      } else {
        arr.push("b");
      }
    }

    return arr;
  }

  function create2DArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = new Array(n);
      for (let j = 0; j < n; j++) {
        arr[i][j] = (i + j) % 2;
      }
    }
    return arr;
  }

  let chessN = blackWhite(n);
  let chessN2 = create2DArray(n);

  console.log(chessN2);

  return (
    <div className="App">
      <button onClick={() => setN(number.current.value)}>done</button>
      <input type="number" ref={number} />

      {chessN2.map((m, i) => (
        <div key={i} className="bar">
          {
            m.map((m, i) => (
              <div className={m == 0 ? "black" : "white"}></div>
            ))

          }
        </div>
      ))}
    </div>
  );
}

export default App;
