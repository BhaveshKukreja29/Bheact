// convert JSX to JS
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b"),
) // now the only thing that our function needs to do is create this element
const container = document.getElementById("root")
ReactDOM.render(element, container)
