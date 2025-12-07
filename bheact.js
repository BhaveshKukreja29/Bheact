// this is some basic jsx, and react render, none of this works rn
// next we'll replace element to vanilla js
// cuz under the hood jsx get converted into js somehow
const element = <h1 title="bar">Hello, World!</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)