import Card from './card';

export default function App(){
  return(
    <div>
        <h1 className="title">Gangajal water Plant</h1>
        <div className="box">
          <ul>
            <li><button>Water Can</button></li>
            <li><button>Cooling water Can</button></li>
            <li><button>Cool drinks</button></li>
            
          </ul>
        </div>
      
        <Card/>

    </div>

  );
}
