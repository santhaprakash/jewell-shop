import { onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {jewell} from "../firebase";
function Details() {
    const { id } = useParams();
    const q=query(jewell,where("type",'==',id));
    const[data,setData]=useState([])
    const[temp,setTemp]=useState([])
    useEffect(()=>{
        onSnapshot(q,jewell,((e)=>{
            const post=[]
            e.docs.map((s)=>{
                post.push({...s.data(),id:s.id});
            })
            setData(post);
        }))
    },[])
    // useEffect(() => {
    //     fetch(`https://metals-api.com/api/latest?access_key=y6juqjlcgw59us010y0frvlz7g5j7xnfsmzxt4r4hfq2o4et7p6ctj2cfzl6&base=INR&symbols=XAG`)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setTemp(data);
    //     });
    //    }, []);
    // console.log(temp);
    const resulMultiply =(a,b)=>{
        return a*b;
    }
  return (
    <div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginBottom:"50px"}}>
      <h2 style={{textAlign:'center',marginBottom:'80px',color:'white'}}>Products</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,  1fr)',gridGap:'100px'}}>
    {
     data && data.map((e)=>{
         var mul=resulMultiply(28.3495,e.gram)
        return(     
          <div style={{display:'flex',flexDirection: 'column',alignItems: 'center',color:'white'}}>
            <img src={e.img} style={{width:'300px',height:'300px'}}></img>
            <h3 >{e.type}</h3>
            <h5 >{e.gram} grams</h5>
            {/* {
                temp && temp.map((z)=>{
                    return(
                        <>
                        <h2>{z.rate}</h2>
                        </>
                    )
                })
            } */}
            <h4 style={{marginTop:'-2px'}}>Prize : Rs:{mul}</h4>
            </div>         
        )
      })
    }
     </div>
    </div>
    </div>
  )
}

export default Details