import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

//Core React
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [
//         React.createElement(
//         "div",
//         {id:"child1"},
//         [
//             React.createElement("h1",{},"hello"),
//             React.createElement("h2",{},"it's arish here")
//         ]
//     ),
//         React.createElement(
//             "div",
//             {id:"child2"},
//             React.createElement(
//                 "h1",
//                 {},
//                 "this is h1 tag"
//             ),
//             React.createElement(
//                 "h2",
//                 {},
//                 "this is h2 tag"
//             )
//         )
//     ]

// )

//JSX -> is not HTML inside Javascript
// JSX is HTML like structure or xml like structure
const jsxHeading = <h1>Its Arish here with usman lala</h1>
console.log(jsxHeading)


const content = (
    <h1>I am main content</h1>
)

const number = 18297917

// React component 
// functional component 
const Main = ()=>{
    return <h1>I am Main Body</h1>
}
const Footer = ()=>{
    return <h1>this is footer</h1>
}
const Heading = ()=>(
    <div>
        <h1>Its zaheen here</h1>
        <div>{number}</div>
        <div>{content}</div>
        <Main/>
        <Footer/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)
root.render(<Heading/>)