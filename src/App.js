import { data } from './data';
import './App.css';
import Carousel from './Carousel';
import { useState } from 'react';

function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id)=> {
    let newGift = gifts.filter( gift =>
      gift.id !==id
    );
    setGifts(newGift);
  }

  return (
    <div className='bigContainer'>
      <div className="container">
      <h1>List of {gifts.length} gift category</h1>
      </div>
      {gifts.map((category => {
        const {id, gifts, header} = category;

        return(
          <div key={id}>
            <div className="container">
              <h2>{header}</h2>
            </div>
            <div>
            <Carousel gifts={gifts}/>
            </div>
            <div className = "container" >
              <button className="btnRevome" onClick ={() => removeGift(id)}>REMOVE</button>
            </div>
          </div>
          
        )

      }))}

      <div className = "container">
        <button className="btnDelete" onClick={() => setGifts([])}>Delete All</button>
      </div>
      
    </div>
  );
}

export default App;
