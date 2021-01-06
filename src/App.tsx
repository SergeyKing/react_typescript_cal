import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [first, setFirst] = React.useState<number>()
  let [second, setSecond] = React.useState<number>()
  let [result, setResult] = React.useState<number>()
  const calculate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.post(`http://localhost:3001/sum`, { first: first, second: second })
      .then(({ data }) => {
        setResult(data.result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="App">
      <div className='header'><span className='header-title'>Calculator</span></div>
      <div className='content'>
        <div className='operands_form'>
          <form onSubmit={calculate}>
            <div className='operands_form_title'>Enter the numbers</div>
            <div><input className='number_input' placeholder='number 1' type='number' name='first' onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setFirst(parseInt(e.currentTarget.value));
            }} /></div>
            <div><input className='number_input' placeholder='number 2' type='number' name='sencond' onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setSecond(parseInt(e.currentTarget.value));
            }} /></div>
            <div><button className='submit_button' type='submit'>Sum</button></div>
          </form>
        </div>
        <div className='result_field'>
          <div className='result_title'>Results</div>
          <div><input className='number_input' placeholder='1523' type='number' name='result' value={result} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
