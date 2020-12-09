function setup() {
    createCanvas(625, 625);
    background(100)

    /*
    input = createInput();
    input.position(20,65);

    button = createButton("submit");
    button.position(input.x + input.width, 65);

    var t0 = performance.now();
    console.log(lusPassword("lmao what the frick is this password lol"))
    var t1 = performance.now();
    console.log(t1-t0);
    */
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);

} 