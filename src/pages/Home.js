import React, { useEffect, useRef } from 'react'

function Home() {
  const canvasRef = useRef(null);

  useEffect( () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pr = window.devicePixelRatio;
    canvas.width = undefined;
    canvas.height = undefined;
    
    function getSize(){
      const elWidth = window.innerWidth;
      const elHeight = window.innerHeight;
      canvas.width = elWidth * pr;
      canvas.height = elHeight * pr;
      canvas.style.width = elWidth + 'px';
      canvas.style.height = elHeight + 'px';
    }
   
    getSize();

    function handleResize() {
      getSize();
      console.log(window.InnerHeight);
      console.log(window.innerWidth);
      scaler = canvas.width * .004
      particleArray = [];
      for(let y = 0; y < data.height; y++){
        for(let x = 0; x < data.width; x++){
          if(data.data[(y * 4 * data.width) + (x * 4) +3] > 128){

            particleArray.push(new Particle(x * scaler + (canvas.width * .5 - (70*scaler)) , y * scaler + (canvas.height * .5 - (30*scaler))));
          }
        }
      }
      for(let i = 0; i < particleArray.length; i++){
        particleArray[i].size = canvas.width * .0012
        particleArray[i].draw();
      }
    }

    window.addEventListener('resize', handleResize)
    
    
    ctx.fillStyle = 'white';
    ctx.font = '30px Verdana'
    ctx.fillText('Hi,',0,30)
    ctx.fillText("I'm Clark",0,60)
    const data = ctx.getImageData(0, 0, 200, 100);
    ctx.clearRect(0,0,200,50)
    
    console.log(data.data);
    
    class Particle {
      constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = canvas.width * .0012;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 60 * pr) + 1;
        
      }

      draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx.closePath();
        ctx.fill();
      }

      update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius){
          this.x -= directionX;
          this.y -= directionY;
        } else{
            if(this.x != this.baseX){
              let dx = this.x - this.baseX;
              this.x -= dx/20;
            }
            if(this.y != this.baseY){
              let dy = this.y - this.baseY;
              this.y -= dy/20;
            }
        }

      }
      
    }

    const mouse = {
      x: null,
      y: null,
      radius: 150 * pr
    }

    window.addEventListener('mousemove',function(event){
      let rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX * pr - (rect.left * pr);
      mouse.y = event.clientY * pr - (rect.top * pr);
    });

    console.log(canvas.width )
    let particleArray = [];
    let scaler = canvas.width * .004
    for(let y = 0; y < data.height; y++){
      for(let x = 0; x < data.width; x++){
        if(data.data[(y * 4 * data.width) + (x * 4) +3] > 128){
          particleArray.push(new Particle(x * scaler + (canvas.width * .5 - (70*scaler)) , y * scaler + (canvas.height * .5 - (30*scaler))));
        }
      }
    }
    
    for(let i = 0; i < particleArray.length; i++){
      particleArray[i].x = (Math.random() * canvas.width) + 1;
      particleArray[i].y = (Math.random() * canvas.height) + 1;
    }
    
    function animate(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      for(let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
      }
      setTimeout(() => {
        requestAnimationFrame(animate);
      },1000/60);
    }
    animate();

  })


  return (
    <div id='home'>
      <div className='backgroundImg'>
        <div className='mobile-title'>Hi,<br/>I'm Clark</div>
        <canvas className='canvas' ref={canvasRef}/>
      </div>
      
    </div>
  )
}

export default Home
