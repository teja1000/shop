import {data} from "./data";
const Card=(props)=>{
    const { resdata}=props;
    
    return(
        <div>
            <div className="card">
                <img className="image" src={resdata.one.image} alt={name}/>
                 <h3>{resdata.one.name}</h3>
                 <h3>{resdata.one.price}</h3>

                 

                </div>
            </div>
    )
}
export default Card;