import { useState } from 'react'
import people from "./data.js"
import './App.css';
import './index.css';



function App() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text, id } = people[index]
  // console.log(name);

  const nextPerson = () => {

  }

  const prevPerson = () => {

  }

  return (
    <main>
      <h1>Reviews</h1>
      <article>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div>
          <button onClick={prevPerson}>Previous</button>
          <button onClick={nextPerson}>Next</button>
        </div>
      </article>
    </main>
  );
}

export default App;

