import React, {useEffect} from 'react'

function Projects() {
  useEffect( () => {
    const acc = document.getElementsByClassName("accordion");
    var i;
    let ready = true;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("mouseup", function() {
        if(ready){
          const panel = this.nextElementSibling;
          for (i = 0; i < acc.length; i++) {
            if(acc[i].classList.contains('active') && acc[i] != this){
              console.log("pressed")
              acc[i].classList.toggle("active");
              let child = acc[i].nextElementSibling;
              child.style.height = child.scrollHeight+"px";
              setTimeout(function() {
                child.style.height = "0px"
              }, 1);
            }
          }
          this.classList.toggle("active");
          
          if (this.classList.contains('active')) {
            panel.style.height = panel.scrollHeight+"px";
            ready = false;
      
            setTimeout(function() {
              panel.style.height = "fit-content";
              panel.style.minHeight = "fit-content";
              ready = true;
            }, 325);
            
          }else{
            panel.style.height = panel.scrollHeight+"px";
            setTimeout(function() {
              panel.style.height = "0px"
            }, 1);
            
          }
        }
      });
    }
  });

  return (
    <div id='projects'>
      <div className='wrapper'>
        <div className='title'>Projects</div>
        <div className="accordion">Hue Sampler (Mobile App)</div>
        <div className="panel">
          <div className='contentWrapper'>
            <div className='content'>
              <p>
                Hue Sampler is a mobile app that takes pixel
                data from images in storage and returns RGB and HEX values.
                Hue Sampler was built in Android Studio with JAVA and XML. 
              </p>
              <div className='resourceWrapper1'>
                <div className='resourceWrapper2'>
                  <div className='resource'>JAVA</div>
                  <div className='resource'>XML</div>
                </div>
              </div>
            </div>
            <div className='buttonWrapper1'>
              <div className='buttonWrapper2'>
                <button className='button'><span class="text">Repo</span></button>
                <button className='button'><span class="text">Demo</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion" >Type Racer Bot</div>
        <div className="panel">
        <div className='contentWrapper'>
            <div className='content'>
              <p>
                This is Content Im just rsadjfjasdlkfjaslkdjflkaasdfadfasdfasdfasdfsdjfklajsdfkasjdf 
              </p>
              <div className='resourceWrapper1'>
                <div className='resourceWrapper2'>
                  <div className='resource'>Python</div>
                </div>
              </div>
            </div>
            <div className='buttonWrapper1'>
              <div className='buttonWrapper2'>
                <button className='button'><span class="text">Repo</span></button>
                <button className='button'><span class="text">Demo</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion">Aim Trainer</div>
        <div className="panel">
        <div className='contentWrapper'>
            <div className='content'>
              <p>
                Aim Trainer was the first website I built. I used canvas elements
                to build the game, and a mix of Javascript, PHP, and SQL to build the 
                leaderboard database.  
              </p>
              <div className='resourceWrapper1'>
                <div className='resourceWrapper2'>
                  <div className='resource'>HTML</div>
                  <div className='resource'>Javascript</div>
                  <div className='resource'>CSS</div>
                  <div className='resource'>PHP</div>
                  <div className='resource'>SQL</div>
                </div>
              </div>
            </div>
            <div className='buttonWrapper1'>
              <div className='buttonWrapper2'>
                <button className='button'><span class="text">Repo</span></button>
                <button className='button'><span class="text">Demo</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">Personal Website</div>
        <div className="panel">
        <div className='contentWrapper'>
            <div className='content'>
              <p>
                This is Content Im just rsadjfjasdlkfjaslkdjflkaasdfadfasdfasdfasdfsdjfklajsdfkasjdf 
              </p>
              <div className='resourceWrapper1'>
                <div className='resourceWrapper2'>
                  <div className='resource'>React</div>
                  <div className='resource'>Nodejs</div>
                  <div className='resource'>CSS</div>
                </div>
              </div>
            </div>
            <div className='buttonWrapper1'>
              <div className='buttonWrapper2'>
                <button className='button'><span class="text">Repo</span></button>
                <button className='button'><span class="text">Demo</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
