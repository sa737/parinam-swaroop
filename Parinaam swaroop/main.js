car_image = "car2.png";
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

cargreen_width = 70;
cargreen_height = 140;

background_image = "parkingLot.jpg";

greencar_image = "car2.png";

greencar_x = 10;
greencar_y = 260;

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	
	car_imgTag = new Image();
	car_imgTag.onload = uploadgreencar;
	car_imgTag.src = car_image;	
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, greencar_x, greencar_y, cargreen_width, cargreen_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0 )
    {  
		greencar_y = greencar_y - 10;
        console.log("when up arrow is preesed, x = "+ greencar_x +"| y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
            
    } 
}

function down()
{
	if(greencar_y <= 500 )
    {
        greencar_y = greencar_y + 10;
        console.log("when down arrow is preesed, x = "+ greencar_x +"| y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
            
    } 
}

function left()
{
	if(greencar_x >= 0 )
    {
        greencar_x = greencar_x - 10;
        console.log("when left arrow is preesed, x = "+ greencar_x +"| y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
            
    } 
}

function right()
{
	if(greencar_x <= 700 )
    {
        greencar_x = greencar_x + 10;
        console.log("when up arrow is preesed, x = "+ greencar_x +"| y ="+ greencar_y);
        uploadBackground();
        uploadgreencar();
            
    } 
}
