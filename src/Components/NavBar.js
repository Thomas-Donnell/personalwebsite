import React, {useEffect, useRef} from 'react'
import GitHubIcon from './GitHubIcon';
import Icon from './Icon'
import LinkedIcon from './LinkedIcon';

function NavBar() {
  const hamRef = useRef(null);
  const navRef = useRef(null);

  useEffect( () => {
    const ham = hamRef.current;
    const nav = navRef.current;
    let ready = true;

    nav.addEventListener("mouseup", function(){
      if(ready){
        ready = false;
        nav.classList.toggle("hamburger-active");
        setTimeout(function() {
          ready = true;
        }, 500);
      }
    })
    
    ham.addEventListener("mouseup", function(){
      nav.classList.toggle("hamburger-active");
      console.log("pressed");
      // if (nav.classList.contains('hamburger-active')) {
      //   //nav.style.height = nav.scrollHeight+"px";
      //   nav.style.display = "block"
           
      // }else{
      //   nav.style.display = "none"
      // }
      
    });
  });

  return (
    
    <>
        <header>
            <Icon />
            <div className='nav-bar' >
              <div className='hamburger' ref={hamRef}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
                
              </div>
                <ul ref={navRef}>
                    <li><a href='#about'>// About</a></li>
                    <li><a href='#projects'>// Projects</a></li>
                    <li><a href='#contact'>// Contact</a></li>
                    <li><div className='icons'><GitHubIcon /> <LinkedIcon /></div></li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default NavBar
