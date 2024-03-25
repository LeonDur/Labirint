canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
ctx.scale(0.8,0.8);
canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");
ctx2.scale(0.8,0.8);
i=0;

var audio = new Audio('music/backround.mp3');
var explosion = new Audio('music/explosion.mp3');
			audio.volume=0.05;
			document.addEventListener("click", (event) => {
			audio.play();
			});
var explosions = new Array();
				explosions[0] = new Image();
				explosions[0].src = 'images/explosion1.png';
				explosions[1] = new Image();
				explosions[1].src = 'images/explosion2.png';
				explosions[2] = new Image();
				explosions[2].src = 'images/explosion3.png';
				explosions[3] = new Image();
				explosions[3].src = 'images/explosion4.png';
				explosions[4] = new Image();
				explosions[4].src = 'images/explosion5.png';
				explosions[5] = new Image();
				explosions[5].src = 'images/explosion6.png';
				explosions[6] = new Image();
				explosions[6].src = 'images/explosion7.png';
				explosions[7] = new Image();
				explosions[7].src = 'images/explosion8.png';
window.onload = function() {
			  
			  img = document.getElementById("slika");
			  tank = document.getElementById("slika2");
			  tankup = document.getElementById("slika3");
			  tankleft = document.getElementById("slika4");
			  tankright = document.getElementById("slika5");
			  enemy= document.getElementById("slika6");
			  enemy2= document.getElementById("slika7");
			  ctx.drawImage(img, 0, 0);
			  ctx2.drawImage(tank, 389.44-tank.width/2, 0);
			  ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
			  ctx2.drawImage(enemy2, 387-enemy2.width/2, 305-enemy2.height/2+10);
			  ctx2.drawImage(enemy2, 122.84-enemy2.width/2, 342.28-enemy2.height/2+10);
			  sweet();
			  
			}

function reset(){
	i=0;
	clearInterval(timer);
	ctx.clearRect(0, 0, canvas.width*1.25, canvas.height*1.25);
	ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
	ctx.drawImage(img, 0, 0);
	ctx2.drawImage(tank, 389.44-tank.width/2, 0);
	ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
	ctx2.drawImage(enemy2, 387-enemy2.width/2, 305-enemy2.height/2+10);
	ctx2.drawImage(enemy2, 122.84-enemy2.width/2, 342.28-enemy2.height/2+10);
	document.getElementById("start").disabled = false;
}

function line(){
	document.getElementById("start").disabled = true;
	path=[[389.44, 0], [389.44, 16.6], [401.12, 16.6],[412.12, 16.6],[423.12, 16.6],[434.12, 16.6],[445.12, 16.6],[456.12, 16.6],[467.12, 16.6], [467.12, 29.76],[467.12, 42.76],[456.12, 42.76],[445.12, 42.76],[434.12, 42.76],[423.12, 42.76],[412.12, 42.76],[401.12, 42.76], [389.44, 42.76], [389.44, 52.84], [389.44, 62.84], [389.44, 72.84], [389.44, 82.84], [389.44, 92.84],[389.44, 102.84],[389.44, 112.84],[389.44, 122.84], [375.28, 122.84],[362.28, 122.84], [362.28, 133.76],[362.28, 144.76],[362.28, 155.76],[362.28, 166.76],[362.28, 176.76], [371.44, 176.76],[380.44, 176.76],[389.44, 176.76],[389.44, 186.08],[389.44, 196.08],[389.44, 206.08], [389.44, 217.08],[389.44, 229.08],
	[365.32, 229.08],[355.32, 229.08],[345.32, 229.08],[335.32, 229.08], [335.32, 243.84],[335.32, 256.84],[326, 256.84],[315.76, 256.84],[308.76, 256.84],[308.76, 245.52],[308.76, 234.52], [308.76, 223.52],[308.76, 212.52],[308.76, 203.52],[292.2, 202.52],[282.2, 202.52],[282.2, 212.52],[282.2, 222.52], [282.2, 229.08], [273.76, 229.08],[264.76, 229.08],[256.76, 229.08], [256.76, 222.52],[256.76, 212.52],[256.76, 202.52], [247.08, 202.52],[236.08, 202.52],[229.08, 202.52],[229.08, 192.4], [229.08, 181.4],[229.08, 171.4],[229.08, 160.4],[229.08, 149.4],[220.08, 149.4],[211.08, 149.4],
	[202.52, 149.4], [202.52, 140.84],[202.52, 130.84],[202.52, 122.84], [192.84, 122.84],[182.84, 122.84],[172.84, 122.84],[162.84, 122.84],[152.84, 122.84],[142.84, 122.84],[132.84, 122.84],[122.84, 122.84], [122.84, 131.4],[122.84, 140.4],[122.84, 149.4], [112.72, 149.4],[102.72, 149.4],[91, 149.4],[80.72, 149.4],[69.72, 149.4],[69.72, 160.08],[69.72, 170.08],[69.72, 180.08],[69.72, 190.08],[69.72, 200.08],[69.72, 210.08],[69.72, 219.08], [69.72, 229.08], [80.84, 229.08],[90.84, 229.08],[100.84, 229.08],[112.84, 229.08],[122.84, 229.08], [122.84, 238.84],[122.84, 247.84],[122.84, 256.84], [114.28, 256.84],[106.28, 256.84],[96.28, 256.84], [96.28, 265.2],[96.28, 275.2],[96.28, 282.2],/**/ [104.84, 282.2],[114.84, 282.2],[122.84, 282.2], [122.84, 292.28],[122.84, 302.28],[122.84, 312.28],[122.84, 322.28],[122.84, 332.28],[122.84, 342.28],[122.84, 352.28],[122.84, 362.28], [114.28, 362.28],[106.28, 362.28],[96.28, 362.28], [96.28, 371.44],[96.28, 380.44],[96.28, 389.44], [87.72, 389.44],[79.72, 389.44],[69.72, 389.44],[69.72, 398.44],
	[69.72, 406.32],[69.72, 415.32],/*id 141*/ [78.28, 415.32],[86.28, 415.32],[96.28, 415.32],[96.28, 425.32],[96.28, 435.12],[96.28, 445.12],[96.28, 456.12],[96.28, 467.12], /*tu enemy perchance, id 149*/[107.4, 467.12],[118.4, 467.12],[129.4, 467.12],[140.4, 467.12], [149.4, 467.12], [149.4, 457.32],[149.4, 447.32],[149.4, 437.32], [149.4, 426.32],[149.4, 415.32], [158.76, 415.32],[166.76, 415.32],[176.76, 415.32], [176.76, 425.32],[176.76, 435.12],[176.76, 445.12],[176.76, 456.12],[176.76, 467.12],[187.76, 467.12],[198.76, 467.12],[209.76, 467.12], [219.08, 467.12],[229.08, 467.12], [229.08, 475.68],[229.08, 483.68],[229.08, 493.68], [221.52, 493.68],[211.52, 493.68],[202.52, 493.68], [202.52, 502.24],[202.52, 510.24],[202.52, 520.24], [190, 520.24],[180, 520.24],[170, 520.24],[160, 520.24],[149.4, 520.24],
	[149.4, 510.24],[149.4, 502.24],[149.4, 493.68], [140.84, 493.68],[130.84, 493.68],[122.84, 493.68], [122.84, 503.24],[122.84, 513.24],[122.84, 523],[122.84, 533],[122.84, 543],[122.84, 553],[122.84, 563],[122.84, 573.76], [114.28, 573.76],[106.28, 573.76],[96.28, 573.76], [96.28, 565.2],[96.28, 557.2],[96.28, 547.2],[88.72, 547.2],[79.72, 547.2],[69.72, 547.2], [69.72, 558.32],[69.72, 569.32],[69.72, 580.32],[69.72, 590.32],[69.72, 600.32], [80, 600.32],[90, 600.32],[101, 600.32],[112, 600.32],[122.84, 600.32],[122.84, 611.32],[122.84, 622.32],[122.84, 632.32], [122.84, 643],[122.84, 653.44], [114.28, 653.44],[106.28, 653.44],[96.28, 653.44], [96.28, 662.84],[96.28, 672.84],[96.28, 682.84], [107, 682.84],[118, 682.84],[129, 682.84],[140, 682.84],[149.4, 682.84], [149.4, 672.44], [149.4, 663.44], [149.4, 653.44],[160, 653.44], [170, 653.44],[180, 653.44],[190, 653.44],[200, 653.44],[210, 653.44],[220, 653.44],  [229.08, 653.44], [229.08, 644.88],[229.08, 635.88],[229.08, 626.88], [240, 626.88],[250, 626.88],[260, 626.88],[271, 626.88],[282.2, 626.88],
	[282.2, 636.08],[282.2, 646,28],[282.2, 656,48],[282.2, 666,68],[282.2, 676,68],[282.2, 686,68],[282.2, 696,68],[282.2, 706,68],[282.2, 716,68],[282.2, 726,68],[282.2, 737.08], [291.76, 737.08],[300, 737.08],[308.76, 737.08], [308.76, 729.88],[308.76, 721.88],[308.76, 713.88],[308.76, 705.88],/*here??*/ [318.93, 705.88],[328.93, 705.88],[338.1, 705.88],[348.1, 705.88],[358.1, 705.88],[368.27, 705.88],[379.27, 705.88],[389.44, 705.88], [389.44, 697.84],[389.44, 689.84],[389.44, 682.84], [397, 682.84],[406, 682.84],[415, 682.84],[415, 693.96],[415, 704.96],[415, 715.96], [415, 726.08],[415, 737.08], [423.66, 737.08],[431.66, 737.08],[441.66, 737.08], [441.66, 745.28],[441.66, 753.28],[441.66, 760.28],[450.66, 760.28],[459.66, 760.28], [467.12, 760.28], [467.12, 787.84],[456.12, 787.84],[445.12, 787.84],[435.12, 787.84],[425.12, 787.84],[415, 787.84], [415, 795],[415, 802],[415, 810]];
	ctx.beginPath();
	
		timer=setInterval(function() {
			draw(path[i][0]-2,path[i][1]-2,path[i+1][0]-2,path[i+1][1]-2);
			i++;
			if(i>=path.length-2){
				ctx2.clearRect(0, 0, canvas.width, canvas.height);
				ctx2.drawImage(tank,415-tank.width/2,810-tank.height/2+10);
				sweet2();
				clearInterval(timer);
				
			}
			if(i==272||i==38||i==121){
				clearInterval(timer);
				setTimeout(explosionAnimation,500);
			}
			else{
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				if(i<=272)
					ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
				
				if(i<=38)
					ctx2.drawImage(enemy2, 387-enemy2.width/2, 305-enemy2.height/2+10);
				if(i<=121)
					ctx2.drawImage(enemy2, 122.84-enemy2.width/2, 342.28-enemy2.height/2+10);
				// console.log(i);
				if(path[i][0]<path[i+1][0]){
					ctx2.drawImage(tankright,path[i][0]-tank.width/2+10,path[i][1]-tank.height/2+8);
					
				}
				else if(path[i][0]>path[i+1][0]){
					ctx2.drawImage(tankleft,path[i][0]-tank.width/2-10,path[i][1]-tank.height/2+8);
				}
				else if(path[i][1]>path[i+1][1]){
					ctx2.drawImage(tankup,path[i][0]-tank.width/2,path[i][1]-tank.height/2);
				}
				else{
					ctx2.drawImage(tank,path[i][0]-tank.width/2,path[i][1]-tank.height/2+18);
				}
			}
		},80);
		
	}
	function stop(i){
		clearInterval(timer);
		clearInterval(timer2);
	}
function explosionAnimation(){
	c=0;
	explosion.play();
	if(i==272){
		timer2=setInterval(function() {
			if(c>=8){
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				ctx2.drawImage(tankright,318.93-tank.width/2,707.3-tank.height/2+8);
				clearInterval(timer2);
				setTimeout(line,500);
			}
			else{
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				ctx2.drawImage(tankright,318.93-tank.width/2,707.3-tank.height/2+8);
				ctx2.drawImage(explosions[c],383.27-explosions[c].width/2,718-explosions[c].height/2);
				c++;
			}
		},125);
	}
	if(i==38){
		timer2=setInterval(function() {
			if(c>=8){
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				ctx2.drawImage(tank,389.44-tank.width/2,196.08-tank.height/2+18);
				ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
				ctx2.drawImage(enemy2, 122.84-enemy2.width/2, 342.28-enemy2.height/2+10);
				clearInterval(timer2);
				setTimeout(line,500);
			}
			else{
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				ctx2.drawImage(tank,389.44-tank.width/2,196.08-tank.height/2+18);
				ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
				ctx2.drawImage(enemy2, 122.84-enemy2.width/2, 342.28-enemy2.height/2+10);
				ctx2.drawImage(explosions[c],389.44-explosions[c].width/2,315-explosions[c].height/2);
				c++;
			}
		},125);
	}
	if(i==121){
		timer2=setInterval(function() {
			if(c>=8){
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				ctx2.drawImage(tank,122.843-tank.width/2,282.2-tank.height/2+18);
				ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
				clearInterval(timer2);
				setTimeout(line,500);
			}
			else{
				ctx2.clearRect(0, 0, canvas2.width*1.25, canvas2.height*1.25);
				ctx2.drawImage(tank,122.843-tank.width/2,282.2-tank.height/2+18);
				ctx2.drawImage(enemy, 379.27-enemy.width/2, 707.3-enemy.height/2+10);
				ctx2.drawImage(explosions[c],122.84-explosions[c].width/2,362.28-explosions[c].height/2);
				c++;
			}
		},125);
	}
}
function draw( x,  y,  x1,  y1){ 
    
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.lineWidth = 8;
    ctx.strokeStyle ="#7f8f57";
	// ctx.strokeStyle ="#89604d";
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