import { useEffect } from "react";
import React from 'react'

function Contact() {
  useEffect( () => {
  const button = document.getElementsByClassName("send")[0];
  const alert = document.getElementById("alert");
  console.log(button)
  button.addEventListener("mousedown", function(){
    console.log("clicked");
    this.style.width = "125px"
    this.style.height = "45px"
    alert.style.bottom = "20px"
    alert.style.opacity = "1"
    setTimeout(function() {
      alert.style.bottom = "-50px";
      alert.style.opacity = "0";
    }, 2000);
    var data = new FormData(document.getElementById("myForm"));
    var ajax = new XMLHttpRequest();
    var method = "POST";
    var url = "email.php";
    ajax.open(method,url,true);
    ajax.send(data)
    ajax.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        console.log(this.responseText)
      }
    }
  });

  button.addEventListener("mouseup", function(){
    console.log("released");
    this.style.width = "150px"
    this.style.height = "55px"
  });

  // function send(){
  //   console.log("clicked");
  //   var button = document.getElementById('send');
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //   }
  // };
  // xhttp.open("GET", "email.php", true);
  // xhttp.send();
  // }
  });
  return (
    <div id='contact'>
      <div className="backgroundImg">
        <div className='contactTitle'>Contact</div>
        <form id="myForm">
          <h3>GET IN TOUCH</h3>
          <input type= "text" name='name' placeholder='Your Name' required/>
          <input type= "email" name='mail' placeholder='Your Email' required/>
          <input type= "text" name='subject' placeholder='Subject' required/>
          <textarea name = 'message' rows='4' placeholder='Your super nice message here'></textarea>
          <div><button type='button' className="send">Send</button></div>
          
        </form>
        <div id="alert">Message Sent!</div>
      </div>
    </div>
  )
}

export default Contact
