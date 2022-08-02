import React from 'react'

function Temp() {
  return (
    <>
   <a href="#div1">section1</a> 
   <a href="#div2">section2</a> 
   <a href="#div3">section3</a> 
   <div>
       <section id="div1" style={{width:'100vw',height:'100vh'}}>
          <h1>i am 1</h1>
       </section>
       <section id="div2" style={{width:'100vw',height:'100vh'}}>
       <h1>i am 2</h1>
       </section>
       <section id="div3" style={{width:'100vw',height:'100vh'}}>
       <h1>i am 3</h1>
       </section>
    </div>
    </>
  )
}

export default Temp