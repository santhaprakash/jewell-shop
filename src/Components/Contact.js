import { Button } from "@mui/material";
import React, { useState, useRef } from "react";
import styles from "../Styles/Contact.module.css";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const[phonenum,setPhonenum]=useState("");
  const form = { useRef };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r6yy8ib",
        "template_u350fml",
        form.current,
        "user_nOaMpicfl8w5ryUcymy4W"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName(" ");
    setMail(" ");
    setMessage(" ");
    setPhonenum(" ");
  };
  return (
    <>
    <h2 style={{textAlign: "center",color: "white",marginTop: "20px"}}>Contact Us</h2>
    
    <div className={styles.root}>
      <form ref={form} onSubmit={handleSubmit}>
        <label style={{color:'white',fontSize:'18px'}}>Name : </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="@hey"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label style={{color:'white',fontSize:'18px'}}>Mail id :</label>
        <br />
        <input
          type="email"
          name="mail"
          placeholder="hey@gmail.com"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label style={{color:'white',fontSize:'18px'}}>Phone number :</label>
        <br />
        <input
          type="text"
          name="number"
          placeholder="9876557832"
          value={phonenum}
          onChange={(e) => setPhonenum(e.target.value)}
          className={styles.inputbox}
        ></input>
        <br />
        <label style={{color:'white',fontSize:'18px'}}>Message</label>
        <br />
        <textarea
          type="textbox"
          name="message"
          placeholder="Hey i need this"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.inputbox}
        ></textarea>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#F4511E" }}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Contact;
