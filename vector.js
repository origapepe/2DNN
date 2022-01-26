function Vector(x, y){
	this.x = x || 0;
	this.y = y || 0;

	this.add = function(other){
		this.x += other.x;
		this.y += other.y;
	};

	this.mult = function(num){
		this.x *= num;
		this.y *= num;
	};

	this.random2D = function(){
		this.x += random(-2,2);
		this.y += random(-2,2);
		return new Vector(this.x, this.y);
	}
};