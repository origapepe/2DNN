var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	stop = false;


let a = 100;
let b = 100;
let w = 3;
let h = 3;
let grid;
let we;


function setup(){
	console.log('ready');

	grid = [];
	for(let i = 0; i < a; i++){
		grid.push([]);
		for(let j = 0; j < b; j++){
			grid[i][j]=0;//(i+j)/(a+b);//random();
		}
	}

	we = [];
	for(let i = 0; i < a; i++){
		we.push([]);
		for(let j = 0; j < b; j++){
			we[i][j]=(i+j)/(a+b)+random(-0.2,0.2);
		}
	}

	console.log(grid,we)
};

function draw(){
	ctx.clearRect(0,0,width,height);

	grid[0][0]=0;

	for(let i = 0; i < a; i++){
		for(let j = 0; j < b; j++){
			let v = grid[i][j]*255;
			fill(v,v,v);
			rect(i*w, j*h, w, h);
		}
	}
	grid=next(grid);
	//console.log(1)
	if(!stop){
		requestAnimationFrame(draw);
	};
};

setup();
draw();
//setInterval(draw, 100);

function act(x){
	return sin(x);//(Math.exp(x)-Math.exp(-x))/(Math.exp(x)+Math.exp(-x));
}

function next(state){
	let next=[];
	for(let i = 0; i < a; i++){
		next.push([]);
		for(let j = 0; j < b; j++){
			next[i][j]=0;
		}
	}

	for(let i = 0; i < next.length; i++){
		for(let j = 0; j < next[i].length; j++){
			next[i][j]=act(sum(state, we, i, j));
		}
	}

	return next;
}

function sum(arr, val, x, y){
	let n = 0;
	for(let i = -1; i < 2; i++){
		for(let j = -1; j < 2; j++){
	    	if(i+x>=0&&j+y>=0&&i+x<a&&j+y<b){
	        	n+=arr[i+x][j+y]*val[i+x][j+y];
	     	}
	    }
	}
	n-=arr[x][y]*val[x][y];
	return n;
}