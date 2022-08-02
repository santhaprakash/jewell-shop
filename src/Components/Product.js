import React, { useEffect } from 'react'
import data from "./data.json"
import {jewell} from "../firebase";
import { limit, onSnapshot, orderBy, query } from 'firebase/firestore';
function Product() {
  const[pro,setPro]=React.useState();
  const q = query(jewell, orderBy("type"), limit(8));
  useEffect(()=>{
    onSnapshot(q,jewell,((e)=>{
      const post=[]
      e.docs.map((s)=>{
        post.push({...s.data(),id:s.id})
      })
      setPro(post);
    }))
    
  },[])
  
  return (
    <div style={{height:'100vh',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
      <h2 style={{textAlign:'center',color:'white',marginBottom:'100px'}}>Our Products</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,  1fr)',gridGap: '50px'}}>
    {
     pro && pro.map((e)=>{
        return(     
          <div style={{display:'flex',flexDirection: 'column'}}>
            <img src={e.img} style={{width:'200px',height:'200px'}}></img>
            <h3 style={{marginLeft:'50px'}}>{e.type}</h3>
            </div>           
        )
      })
    }
     </div>
    </div>
  )
}

export default Product