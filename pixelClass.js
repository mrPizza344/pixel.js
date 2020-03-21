function Pixel(x,y,color){
	this.x=x;
	this.y=y;
	this.color=color;
	this.width=1;
	this.height=1;
}

Pixel.prototype.render=function(ctx){
	oldColor=ctx.fillStyle;
	ctx.fillStyle=this.color;
	ctx.fillRect(this.x,this.y,1,1);
	ctx.fillStyle=oldColor;
}

Pixel.prototype.detectPixelCollision=function(pix1,pix2){
	if(pix1.x==pix2.x && pix1.y==pix2.y){
		return true;
	}
	if(pix1.x==(pix2.x-1) | pix1.x==(pix2.x+1)){
		return true;
	}
	if(pix1.y==(pix2.y-1) | pix1.y==(pix2.y+1)){
		return true
	}
	return false
}
