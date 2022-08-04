import { Button } from '@mui/material'
import React,{useState,useEffect} from 'react'
import styles from "../Styles/Home.module.css"

function Main() {
  const[data,setData]=useState([])
  useEffect(() => {
    fetch(`https://metals-api.com/api/latest?access_key=y6juqjlcgw59us010y0frvlz7g5j7xnfsmzxt4r4hfq2o4et7p6ctj2cfzl6&base=INR&symbols=XAG`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
    });
   }, []);
  return (
    <div className={styles.home}>
      <div className={styles.home1}>
      <img src="https://4.bp.blogspot.com/-AVKNzTfMtSY/XSRSn21yIvI/AAAAAAAAEuo/ZlLqie7bTMEZJBXZsfWwos2NranSQRSWACK4BGAYYCw/s1600/296E7861-D4B9-4773-A402-AF88609C18DA.jpeg" 
      style={{width:'500px',height:'615px'}} className={styles.homeimg}
      />
      </div>
      <div className={styles.home2}>
         <div className={styles.div1}>
          <h1 style={{ fontSize: '65px'}}>Elegant & Luxury</h1>
          <h4 style={{ fontSize: '40px'}}>Remarkabale Jewellery for the modern woman</h4>
          <h3 style={{marginLeft:'160px',fontWeight:'100'}}>Silver Rate tdy Rs : Rs:63.20 per gram</h3>
  
         </div>
         <div style={{marginTop: '30px',marginLeft:'-150px'}}>
          <Button variant="contained" style={{backgroundColor: 'white' ,color:'black',padding:'10px 20px 10px 20px',
          fontWeight:'500',borderRadius:'0 10px 0 10px'}}
           href="#product">Shop Product</Button>
         </div>
      </div>

    </div>
  )
}

export default Main

