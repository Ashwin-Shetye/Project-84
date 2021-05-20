uploadRover;
    rover_imagetag.src=rover_image;
function uploadBackground()
{
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38')
    {up();
        console.log("up");
    }
    
    if(keypress=='40')
    {down();
      console.log("down");
    }
        
    if(keypress=='37')
    {left();
      console.log("left");
    } 

    if(keypress=='39')
    {right();
      console.log("right");
    }
}