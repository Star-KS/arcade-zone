import React, { useState } from 'react'
import Categories from './Categories'
import '../../css/Homepage/Game.css'

const Game = () => {
      
    const [data, setData] = useState(Categories);
    const  filterResult = (catItem) =>{
        const result=Categories.filter((curData) =>{
            return curData.category===catItem;
        });
        setData(result);

    }

  return (
    <div className="games" id="games">
        <h1>Popular Games</h1>
        <ul>
            <li className="list"  onClick={() => setData(Categories)}>All</li>
            <li className="list" onClick={() => filterResult('pc')}>Pc games</li>
            <li className="list"  onClick={() => filterResult('mobile')}>Mobile games</li>
        </ul>
        
        <div className="cardBx">        
          {data.map((values) =>{
                const {id, title, rating, image} = values;
                return (
                    <>
                        <div className="card" key={id}>
                           <img src={image} alt="" />
                            <div className="content">
                               <h2>{title}</h2>
                                <div className="progress-line"><span></span></div>
                                   <div className="info">
                                   <p>Rating <br/> <span>⭐ {rating}</span></p>
                                   <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>  
                    </>
                )
            })}

        </div>
     </div>
        
    
  )
}

export default Game