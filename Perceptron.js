
class Perceptron{
    constructor(){
        this.weights=[];
        this.lr = 0.01;
        for(var i=0;i<3;i++)
        {
            var a=random(-1,1);
            this.weights.push(a);
        } 
    }
     guess(input){
        var sum=0;
        
        for(var i=0;i<input.length;i++)
        {
            sum+=input[i]*this.weights[i];
        }
        //console.log(this.weights);
        var  output=sign(sum);
        return output;
    }
    steer(input,target)
    {
        
        var guess=this.guess(input);
        var error=target-guess;
        //console.log(target)
        for(var i=0;i<this.weights.length;i++)
        {
            this.weights[i]+=error*input[i]*this.lr;
        }
       
    }
    guessY(x)
    {
        var m=this.weights[0]/this.weights[1];
        var b=this.weights[2]/this.weights[1];
       // console.log(-m*x-b)
        return -m*x-b;
    }
}
function sign(sum)
{
    
    if(sum>=0)
    {
        return 1;
    }
    else
    {
        return -1;
    }
}