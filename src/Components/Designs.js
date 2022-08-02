import React from 'react'
import { Link } from 'react-router-dom'

function Designs() {
  return (
   <>
  <div style={{height:'100vh',display: 'flex',flexDirection:'column',alignItems: 'center'}}>
    <h2 style={{textAlign:'center',color:'white',marginTop:'50px'}}>Shop by category</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gridGap:'60px',marginTop:'130px',marginLeft:'150px'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/necklace">
        <img src="https://m.media-amazon.com/images/I/619c9GF1X9L._UL1200_.jpg"
        style={{width:'200px',height:'200px',borderRadius:'50%'}}
        ></img>
        </Link>
        <h3 style={{marginLeft:'60px',color:'white'}}>Chain</h3>
        
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/Ring" >
        <img src="https://tajmahalsilver.com/gorillas/upload/16035597646.jpg"
        style={{width:'200px',height:'200px'}}
        ></img>
        </Link>
        <h3 style={{marginLeft:'60px',color:'white'}}>Ring</h3>
        
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/braclet">
        <img src="https://m.media-amazon.com/images/I/615yC6VSdML._UY500_.jpg"
        style={{width:'200px',height:'200px',borderRadius:'50%'}}
        ></img>
        </Link>
        <h3 style={{marginLeft:'60px',color:'white'}}>bracelet</h3>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/anklet">
        <img src="http://cdn.shopify.com/s/files/1/0004/7215/4121/products/1402NP44_3.jpg?v=1618488792"
        style={{width:'200px',height:'200px',borderRadius:'50%'}}
        ></img>
        </Link>
        <h3 style={{marginLeft:'60px',color:'white'}}>Anklet</h3>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/earnings">
        <img src="https://m.media-amazon.com/images/I/712eXHAnGyL._UL1500_.jpg"
        style={{width:'200px',height:'200px',borderRadius:'50%'}}
        ></img>
        </Link>
        <h3 style={{marginLeft:'60px',color:'white'}}>Earnings</h3>
      </div>
    </div>
    </div>
   </>
  )
}

export default Designs