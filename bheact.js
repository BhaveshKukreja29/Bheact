function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

// children may contain primitive values like strings or numbers
// for those we simply create a text node. even though react doesn't do this
// we want to keep this simple

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

// convert JSX to JS
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b"),
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
