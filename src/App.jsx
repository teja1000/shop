import React, { useState } from 'react';
import Card from './card';
import data from './data';



export default function App() {
  const [sign, setsign] = useState("login");
  const handler = () => {
    setsign((prevText) => (prevText === 'login' ? 'logout' : 'login'));
  }
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
            <button>Cool Drinks</button>
          </li>
          <li>About</li>
          <li><button className='btn' onClick={handler}>{sign === 'login' ? 'Login' : 'Logout'}</button></li>
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
