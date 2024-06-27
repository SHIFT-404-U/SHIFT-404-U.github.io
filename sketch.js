function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // 根据鼠标位置改变形状的颜色
  let shapeColor = map(mouseX, 0, width, 0, 255);
  fill(shapeColor, 150, 150);
  noStroke();
  
  // 在画布中心画一个圆形
  ellipse(width / 2, height / 2, 100, 100);
}
