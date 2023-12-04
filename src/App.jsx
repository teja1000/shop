import React from 'react';
import Card from './card';
import data from './data';

export default function App() {
  return (
    <div>
      <h1 className="title">Gangajal water Plant</h1>
      <div className="box">
        <ul>
          <li>
            <button>Water Can</button>
          </li>
          <li>
            <button>Cooling water Can</button>
          </li>
          <li>
            <button>Cool drinks</button>
          </li>
        </ul>
      </div>

      <div className='body'>
      {data.map((item) => (
        <Card key={item.one.number} props={item} />
      ))}
      </div>
    </div>
  );
}
