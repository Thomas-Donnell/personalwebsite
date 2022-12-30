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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
  })

  const target = document.getElementsByClassName("accordion");
  for (let i = 0; i < target.length; i++){
    observer.observe(target[i]);
  }

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
                <a className='button' href = 'https://github.com/Thomas-Donnell' target="_blank" rel="noopener noreferrer"><span class="text">Repo</span></a>
                <a className='button' href = 'https://github.com/Thomas-Donnell' target="_blank" rel="noopener noreferrer"><span class="text">Demo</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion" >Type Racer Bot</div>
        <div className="panel">
        <div className='contentWrapper'>
            <div className='content'>
              <p>
                The Type Racer Bot was built in Python using the Selenium package 
                for browser automation, and the Pynput library was used to replicate
                strokes.
              </p>
              <div className='resourceWrapper1'>
                <div className='resourceWrapper2'>
                  <div className='resource'>Python</div>
                </div>
              </div>
            </div>
            <div className='buttonWrapper1'>
              <div className='buttonWrapper2'>
                <a className='button' href = 'https://github.com/Thomas-Donnell' target="_blank" rel="noopener noreferrer"><span class="text">Repo</span></a>
                <a className='button' href = 'https://github.com/Thomas-Donnell' target="_blank" rel="noopener noreferrer"><span class="text">Demo</span></a>
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
                <a className='button' href = 'https://github.com/Thomas-Donnell/aim-trainer' target="_blank" rel="noopener noreferrer"><span class="text">Repo</span></a>
                <a className='button' href = 'https://aimtrainer.clarkdonnell.dev' target="_blank" rel="noopener noreferrer"><span class="text">Demo</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">Personal Website</div>
        <div className="panel">
        <div className='contentWrapper'>
            <div className='content'>
              <p>
                The Personal Website was built with React, Nodejs, and CSS.
                Git and GitHub were used for version control. This website really
                challenged me to improve my skills in CSS. 

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
                <a className='button' href = 'https://github.com/Thomas-Donnell/personalwebsite' target="_blank" rel="noopener noreferrer"><span class="text">Repo</span></a>
                <a className='button' href = 'https://clarkdonnell.dev' target="_blank" rel="noopener noreferrer"><span class="text">Demo</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
