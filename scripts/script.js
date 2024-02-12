canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");
window.onload = function() {
			  
			  img = document.getElementById("slika");
			  tank = document.getElementById("slika2");
			  tankup = document.getElementById("slika3");
			  tankleft = document.getElementById("slika4");
			  tankright = document.getElementById("slika5");
			  ctx.drawImage(img, 0, 0);
			  ctx2.drawImage(tank, 389.44-tank.width/2, 0);
			  sweet();
			  }

function reset(){
	clearInterval(timer);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	ctx.drawImage(img, 0, 0);
	ctx2.drawImage(tank, 389.44-tank.width/2, 0);
	document.getElementById("start").disabled = false;
}

function line(){
	document.getElementById("start").disabled = true;
	path=[[389.44, 0], [389.44, 16.6], [467.12, 16.6], [467.12, 42.76], [389.44, 42.76], [389.44, 122.84], [362.28, 122.84], [362.28, 176.76], [389.44, 176.76], [389.44, 229.08],
	[335.32, 229.08], [335.32, 256.84], [308.76, 256.84], [308.76, 202.52], [282.2, 202.52], [282.2, 229.08], [256.76, 229.08], [256.76, 202.52], [229.08, 202.52], [229.08, 149.4],
	[202.52, 149.4], [202.52, 122.84], [122.84, 122.84], [122.84, 149.4], [69.72, 149.4], [69.72, 229.08], [122.84, 229.08], [122.84, 256.84], [96.28, 256.84], [96.28, 282.2], [122.84, 282.2], [122.84, 362.28], [96.28, 362.28], [96.28, 389.44], [69.72, 389.44],
	[69.72, 415.32], [96.28, 415.32],[96.28, 467.12], [149.4, 467.12], [149.4, 415.32], [176.76, 415.32], [176.76, 467.12], [229.08, 467.12], [229.08, 493.68], [202.52, 493.68], [202.52, 520.24], [149.4, 520.24],
	[149.4, 493.68], [122.84, 493.68], [122.84, 573.76], [96.28, 573.76], [96.28, 547.2],[69.72, 547.2], [69.72, 600.32], [122.84, 600.32], [122.84, 653.44], [96.28, 653.44], [96.28, 682.84], [149.4, 682.84], [149.4, 653.44], [229.08, 653.44], [229.08, 626.88], [282.2, 626.88],
	[282.2, 737.08], [308.76, 737.08], [308.76, 705.88], [389.44, 705.88], [389.44, 682.84], [415, 682.84], [415, 737.08], [441.66, 737.08], [441.66, 760.28], [467.12, 760.28], [467.12, 787.84],
	[415, 787.84], [415, 810]];
	i=0;
		
		 timer=setInterval(function() {
			 draw(path[i][0],path[i][1],path[i+1][0],path[i+1][1]);
			 i++;
			 if(i>=path.length-1){
				ctx2.clearRect(0, 0, canvas.width, canvas.height);
				ctx2.drawImage(tank,415-tank.width/2,810-tank.height/2+10);
				sweet2();
				clearInterval(timer);
				
			}
			else{
			 ctx2.clearRect(0, 0, canvas.width, canvas.height);
			 if(path[i][0]<path[i+1][0])
				ctx2.drawImage(tankright,path[i][0]-tank.width/2+10,path[i][1]-tank.height/2);
			else if(path[i][0]>path[i+1][0])
				ctx2.drawImage(tankleft,path[i][0]-tank.width/2-10,path[i][1]-tank.height/2);
			else if(path[i][1]>path[i+1][1])
				ctx2.drawImage(tankup,path[i][0]-tank.width/2,path[i][1]-tank.height/2-10);
			else
				ctx2.drawImage(tank,path[i][0]-tank.width/2,path[i][1]-tank.height/2+10);
			}
		 },150);
	}
function draw( x,  y,  x1,  y1){ 
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.lineWidth = 8;
    ctx.strokeStyle ="#836539";
	ctx.stroke();
}
function sweet() {
  Swal.fire({
    imageUrl:'images/tank_side.png',
    title: 'Battle of Hannut',
	confirmButtonColor: '#9f9c57',
	background:'#201c24',
	color:'white',
    text: 'The tank must get across the battlefield using the safest route!',
  });
}function sweet2() {
  Swal.fire({
    icon: 'success',
    title: 'Battle of Hannut',
	confirmButtonColor: '#9f9c57',
	background:'#201c24',
	color:'white',
    text: 'The tank made it across safely!',
  });
}