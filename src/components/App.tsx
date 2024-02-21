// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// three buttons decrease , increase and reset 
// we click on the inc butn value inc by 1 dec by 1 reset by 0

"use client"

import React, { useState } from "react";

import Style from './App.module.css';

function Counter() {
    const [count, setCount] = useState(1)

    const reset = () => {
        setCount( 0 )
    }

    const inc = () => {
        setCount( count + 1 )
    }

    const dec = () => {
        setCount( count - 1 )
    }


    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={reset} className={Style.btn}>reset</button>
            <button onClick={dec} className={Style.btn}>dec</button>
            <button onClick={inc} className={Style.btn}>inc</button>
        </div>
    )
}

export default Counter