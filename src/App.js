import React, {useState} from 'react';
import './App.css';
import data from './data/data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0) {
      amount = 0;
    }
    if(count > 5) {
      amount = 5;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>lorem ipsum app</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Sentence</label>
        <input type="number" id='amount' name='amount' 
        value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article>
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  );
}

export default App;
