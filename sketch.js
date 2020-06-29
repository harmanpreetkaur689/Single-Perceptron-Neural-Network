
var point;
var p;
var trainingIndex=0;
var width;
var height;
function setup() {
  width = innerWidth;
  height = innerHeight;
  console.log(width);
  console.log(height);
  console.log(innerWidth);
  console.log(innerHeight)
  p=new Perceptron();
  point=[];
  createCanvas(innerWidth,innerHeight); 
  for(var i=0;i<1000;i++)
  {
    point.push(new Point());
  } 
  //var input=[-1,0.5];
 // var guess =p.guess(input);
  //console.log(guess);
  //frameRate(1)
}

function draw() {
 
  background(255);
 /*stroke(0);
  line(0,innerHeight,innerWidth,0);*/
 var point1=new Point();
  var point2=new Point();
  point1.setX(-1);
  point1.setY(f(-1));
  point2.setX(1);
  point2.setY(f(1));
  stroke(0);
  line(point1.pixelX(),point1.pixelY(),point2.pixelX(),point2.pixelY())
  var point3=new Point();
  var point4=new Point();
  point3.setX(-1);
  point3.setY(p.guessY(-1));
  point4.setX(1);
  point4.setY(p.guessY(1));
  console.log(point3.pixelY());
  console.log(point4.pixelY());
  stroke(0);
  line(point3.pixelX(),point3.pixelY(),point4.pixelX(),point4.pixelY())
  
   for(var i=0;i<1000;i++)
  {
    point[i].show();
  }
  for(var i=0;i<1000;i++)
  {
    //var inputs=[point[i].pixelX(),point[i].pixelY(),point[i].bias];
    var inputs=[point[i].x,point[i].y,point[i].bias];
    var target=point[i].label;
    
    var guess=p.guess(inputs);
    //console.log(guess);
    if(guess==target)
    {
      console.log("hii");
      fill(0,255,0);
      
    }
    else{
      //console.log("h");
      fill(255,0,0);
      
    }
   // p.steer(inputs,target);
    noStroke();
      ellipse(point[i].pixelX(),point[i].pixelY(),8,8);
  }
  var training=point[trainingIndex];
  var inputs=[training.x,training.y,training.bias];
  var target=training.label;
  p.steer(inputs,target);
  trainingIndex++;
  if(trainingIndex==point.length)
  {
    trainingIndex=0;
  }

}