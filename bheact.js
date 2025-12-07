// JSX is transformed into JS by build tools like Babel
// so JSX -> createElement call passing tag name, props and children as args
// const element = <h1 title="bar">Hello, World!</h1>
const element = React.createElement(
    "h1",
    { title: "bar"},
    "Hello, World!"
)

const container = document.getElementById("root")
ReactDOM.render(element, container)