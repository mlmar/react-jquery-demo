$(document).ready(() => {
  init();
});

// init react component in index.html
function init() {
  function rand() {
    return Math.floor(Math.random() * 10);
  }

  // get element with jquery and create the component
  let el1 = $('#test-component-wrapper')[0]; 
  const testComponentReact = React.createElement(TestComponent, { 
    count: rand(),
  });
  ReactDOM.render(testComponentReact, el1); // render the component


  let el2 = $('#test-component-wrapper2')[0];
  const testComponentReact2 = React.createElement(TestComponent2, {
    list: [rand(), rand(), rand(), rand(), rand()]
  });
  ReactDOM.render(testComponentReact2, el2);
}