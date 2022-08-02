import React from 'react'
import styles from "../Styles/Home.module.css"

function About() {
  return (
  <>
  <h1 style={{textAlign: "center",color:"white"}}>Prakash Jewells</h1>
   <div style={{display:'flex', flexDirection: 'row',marginLeft:'20px'}}>
       
       <div className={styles.about1}>
       <h1>Life isn't perfect but your jewelery can be</h1>
<h2>We usher the era of magnificient jewellery with a committment of
excellence and trust.</h2> 
<h4 style={{letterSpacing: '2px'}}>The story of Prakash Jewellery 
began a little less than a ten years ago.It was the year 2010,when Kumarason opened
a 500 sq.ft,jewellery store in pannagadu,salem.sice then Prakash Jewellery 
has been a pioneer,inspiring innovation and establishing milestone achievement.with our exquiste 
artistry,iconic designs and personalised approach to business,we won over hearts of customers who made
us a part of their celebrations and everyday life.Today,our designs are sought after as a much for our 
futuristic verve as for our reverence for tradition.
The story of Prakash Jewellery 
began a little less than a ten years ago.It was the year 2010,when Kumarason opened
a 500 sq.ft,jewellery store in pannagadu,salem.sice then Prakash Jewellery 
has been a pioneer,inspiring innovation and establishing milestone achievement.with our exquiste 
artistry,iconic designs and personalised approach to business,we won over hearts of customers who made
us a part of their celebrations and everyday life.Today,our designs are sought after as a much for our 
futuristic verve as for our reverence for tradition. 
The story of Prakash Jewellery 
began a little less than a ten years ago.It was the year 2010,when Kumarason opened
a 500 sq.ft,jewellery store in pannagadu,salem. </h4>
        </div>
        <div style={{marginLeft:'150px',marginTop:'150px'}}>
        <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-59300705,width-600,resizemode-4/59300705.jpg"
     style={{width:'500px',height:'400px'}}
     ></img>
        </div>
    </div>
    </>
  )
}

export default About


{/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<div >


</div>
<div>
<img src="https://static.toiimg.com/thumb/imgsize-23456,msid-59300705,width-600,resizemode-4/59300705.jpg"
style={{width:'400px',height:'300px'}}
></img>
</div> */}
