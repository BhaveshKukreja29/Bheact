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
    props: props, // all the key values we define in our jsx attr like title, alt text, etc. 
                  // it also has children, which can contain an array of elements
                  // that's why, elements are also trees
    // Record the component responsible for creating this element. (so basically parent?)
    _owner: owner,
  };
*/

const container = document.getElementById("root")

// now we replace this. 
// ReactDOM.render(element, container)
// .render() is where react changes the DOM, so let's do that manually 

// simple assignment
const node = document.createElement(element.type)
node["title"] = element.title // i will need to automate this somehow later

// now we need to create DOM nodes for the children and set them into parent node
const text = document.createTextNode("") // spent time reading bout this/innerText/innerHTML
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)








