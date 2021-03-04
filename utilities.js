function animate(){
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background_lv12,0,0,canvas.width, canvas.height);
    frogger.update();
    frogger.draw();
    handleObstacles();
    handleScore();
    requestAnimationFrame(animate);
} 
animate();

window.addEventListener('keydown', function(e){ 
    keys =e.code;
   
        if(keys =="ArrowLeft" || keys =="ArrowRight" || keys=="ArrowUp" || keys=="ArrowDown"){
            frogger.jump();
        }
        frogger.moving=false;
});


function scored(){
    score++;
    gameSpeed += 0.05;
    
    
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
}
function handleScore(){
    ctx4.fillStyle ='black';
    ctx4.strokeStyle ='black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score',265,15)
    ctx3.font ='60px Verdana';
    ctx3.fillText(score, 270 , 65);
    ctx4.font = '15px Verdana';
    
}
