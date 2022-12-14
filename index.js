// const windowWidth = 800;
// const windowHeight = 800;
const fr = 200;
const BW = true;
const textStr = "FRAME RATE";
let currentZone = 0;
let isIncreasing = true;
let MAX_ZOOM = 800;

function randomColor() {
   if (!BW) {
      return "black";
   } else {
      return (
         "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
      ).toString();
   }
}
let font;
function preload() {
   font = loadFont(
      "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
   );
}

function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
   textFont(font);
   textSize(width / 3);
   textAlign(CENTER, CENTER);
   let x;
   let y;

   // Background thread
   // setInterval(()=>{
   //   // background(randomColor());
   //   // rotateX(frameCount * 0.01);
   //   // rotateY(frameCount * 0.01);
   // }, 500)

   // Setup FrameRate
   frameRate(fr); // Attempt to refresh at starting FPS
}

function areWeThereYet() {
   // print(currentZone);

   if (isIncreasing) {
      currentZone++;
      if (currentZone == MAX_ZOOM) isIncreasing = false;
   } else {
      currentZone--;
      if (currentZone == MAX_ZOOM) isIncreasing = true;
   }
   // currentZone;
}

function draw() {
   areWeThereYet();
   // console.log(currentZone);
   camera(0, 0, currentZone, 0, 0, 0, 0, 1, 0);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   if (BW) {
      fill("white");
   }
   box(125);
   for (i = 0; i < 5; i++) {
      x = Math.floor(Math.random() * (windowWidth - 1));
      y = Math.floor(Math.random() * (windowHeight - 1));
      // Ramdom stroke color
      if (BW) {
         stroke("white");
      } else {
         stroke(randomColor());
      }
      line(x, y, y, x, y, x);
      if (BW) {
         stroke("black");
      } else {
         // Idk but it looks great!
         stroke(x, y, y, x, y, x);
      }
      square(x, y, 20);
      fill(randomColor());
   }

   // 'word' displayed 3 times going from black, blue to translucent blue
   // text example 0
   textSize(250);
   text(textStr, 10, 30);
   if (BW) {
      fill("white");
   } else {
      fill(0, 102, 153);
   }
   text(textStr, 10, 60);
   fill(0, 102, 153, 51);
   text(textStr, 10, 90);

   x = Math.floor(Math.random() * 801);
   y = Math.floor(Math.random() * 801);
   circle(x, y, 20);
   square(x, y, 20);
   fill(randomColor());
}
