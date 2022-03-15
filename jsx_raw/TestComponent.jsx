const { useState } = React;

function TestComponent(props) {
  const { count } = props;
  const [counter, setCounter] = useState(count);

  const handleCounterClick = () => setCounter(prev => prev + 1);

  return (
    <div className="test-component">
      <h3> This is a test component. </h3>
      <label className={counter % 2 === 0 ? 'even' : 'odd'}> Current click count: {counter} </label>
      <button onClick={handleCounterClick} > Increment Counter </button>
    </div>
  )
}