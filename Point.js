function f(x){
    return -0.3*x-0.2;
}
class Point{
    constructor(){
        this.x=random(-1,1);
        this.y=random(-1,1);
        this.bias=1;
        this.label=0;
        
    }
    func(){
       /*if((this.x/this.y)*(innerWidth/innerHeight)>1){
            this.label=1;
        }*/
        var lineY=f(this.x);

        if(this.y>lineY)
        {
            this.label=1;
        }
        else{
            this.label=-1;
        }
    }
    setX(x)
    {
        this.x=x;
    }
    setY(y)
    {
        this.y=y;
    }
    pixelX(){
        
        return map(this.x,-1,1,0,innerWidth);
        
    }
    pixelY(){
        return map(this.y,-1,1,innerHeight,0);
        
    }
    show(){
        this.func();
        stroke(0);
       
        
        if(this.label==1)
        {

            fill(255);
            ellipse(this.pixelX(),this.pixelY(),16,16);
        }
        else
        {
            fill(0);
            ellipse(this.pixelX(),this.pixelY(),16,16);
        }
    }
    
}