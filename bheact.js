// createElement creates the object you want throught the args you pass
// besides some validation, it doesn't do much, so we safely can replace
// the function call with it's output
const element = {
    type: "h1",
    props: {
        title: "bar",
        children: "Hello, World!",
    },
}
// and this is what an element is. an object with two properties 
// there is more like key, ref, self, source, owner
// source code: 
/*
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };
*/

const container = document.getElementById("root")
ReactDOM.render(element, container)