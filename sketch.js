var radius_min = 200;
var radius_hr = 250;

var angle_min = 0;
var angle_hr = 0;

var centerX = 300;
var centerY = 300;


// setup() is called once at page-load
function setup() {
    createCanvas(windowWidth, windowHeight); // make an HTML canvas element width x height pixels
}



// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(220);
    
    textAlign('LEFT');
    textSize(45);
    fill(120, 0, 255);
    text(hr + ':' + min + ':' + sec, centerX, centerY);
    
    var x_min = centerX + radius_min * cos(angle_min);
    var y_min = centerY + radius_min * sin(angle_min);
    fill(255, 0, 255);
    ellipse(x_min, y_min, 50, 50);
    
    var x_hr = centerX + radius_hr * cos(angle_hr);
    var y_hr = centerY + radius_hr * sin(angle_hr);
    fill(255, 0, 0)
    ellipse(x_hr, y_hr, 50, 50);
    
    // angle_sec = angle_sec + sec/60;
    angle_min = angle_min + sec/(60*60);
    angle_hr = angle_hr + sec/(60*60*60);
}

window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
  };