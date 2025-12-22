// now we restart after step 0 is done. this time we will actually implement the functions. 
// we will first build our own version of createElemetnt. 
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
