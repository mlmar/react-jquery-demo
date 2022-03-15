const { useState } = React;

function TestComponent2(props) {
  const { list } = props;
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = (event) => setInputValue(event.target.value);

  return (
    <div className="test-component">
      <h3> Test Component 2 </h3>
      <label> Current input value: {inputValue} </label>
      <input value={inputValue} onChange={handleInputValueChange} placeholder="Current input value" style={{ outline: 'none' }}/>
      <label> Some random list </label>
      <ul>
        {
          list.map((item, index) => <li key={index}> {item} </li>)
        }
      </ul>
    </div>
  )
}