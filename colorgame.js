var noo=6;
var colors=[];
var pickedcolor;
var squares=document.getElementsByClassName("square");
var dmessage=document.getElementById("dmessage");
var message=document.getElementById("message");
var head=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var level=document.querySelectorAll(".level"); 
var selected=document.querySelector("#selected");
dmessage.textContent=pickedcolor;
init();
function setlvl(){
	for(var i=0;i<level.length;i++)
{
	level[i].addEventListener("click",function(){
		level[0].classList.remove("selected");
		level[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
			noo=3;
		else
			noo=6;
		reset();
	});	
}
}
function setblocks(){
	for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
			var clickedcolor=this.style.backgroundColor;
			if(clickedcolor===pickedcolor)
				{
					message.textContent="correct";
					changecolor(pickedcolor);
					head.style.backgroundColor=clickedcolor;
	 				resetbtn.textContent="Play Again?";
				}
			else{
				this.style.backgroundColor="#232323";
				message.textContent="try again";
			}
	});
}
}
function init(){
	setlvl();
	setblocks();
	reset(); 
}

function reset()
{
	colors=generatecolors(noo);
	 pickedcolor=pickcolor();
	 dmessage.textContent=pickedcolor;
	 resetbtn.textContent="New Colors";
	 head.style.backgroundColor="steelblue";
	 message.textContent="";
	 for(var i=0;i<6;i++)
		{
			if(colors[i])
			{
				squares[i].style.display="block";
				squares[i].style.backgroundColor=colors[i];
			}
		else
		{
			squares[i].style.display="none";
		}
	}
}

resetbtn.addEventListener("click",reset);


function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=color;
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generatecolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		var x=Math.floor(Math.random()*256);
		var y=Math.floor(Math.random()*256);
		var z=Math.floor(Math.random()*256);
		var current="rgb("+x+", "+y+", "+z+")";
		arr.push(current);
	}
	return arr;
}
