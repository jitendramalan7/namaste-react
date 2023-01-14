import React  from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// JSX?
// JSX => React.createElement => Object => HTML(DOM)

// const heading = <h2 id="title2" key="heading2">Nameste React</h2>
const Title = () => {
    return <h1 id="title2" key="heading">Nameste React</h1>
} 

// React Component
// - Functional Component - This is a new way of writing code
// - Class Based Component - This is the old way of writing code

//  Name of component starts with Capital letter - It's not mandatory

const HeaderComponent = () => {
    return <div><Title /><h2>Nameste React Functional Component</h2><h2>This is Header2 Component</h2></div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
