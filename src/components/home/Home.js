import React from "react";
import './home.css'
import r from '../../img/r.jpg'
import b from '../../img/back2.png'

const Home = () => {
    return(
        <>
        <div className="main">
            <div className="box-container" >
                <div className="left" >
                    <div className="r-g" style={{backgroundImage:`url(${r})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
                        <div className="b-g">
                            <img src={b}/>
                        </div>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="desc-container">
                        <h1 className='i-name'>Twelve Photography</h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis diam quis laoreet commodo. Proin hendrerit ornare erat, at fringilla ex elementum sed. Nulla sed diam leo. Vestibulum eu elit et lorem gravida posuere. Nam mattis nisi non velit laoreet consequat. Aenean in nisl non leo bibendum sagittis. Duis interdum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home; 