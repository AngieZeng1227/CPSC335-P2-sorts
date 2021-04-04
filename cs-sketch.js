/* Zhi Zeng */
/* Email: zengzhi@csu.fullerton.edu */
/* Github: ZZ1227 */

/* This is the main .js file containing the bot and the move/draw functions. It also
updates the canvas every frame.  */

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = {
    cell_size: 10,
    wid: 120,
    hgt: 60
}; // JS Global var, w canvas size info.

var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 10; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height); // Make a P5 canvas.
    draw_grid(300, 50, 'white', 'white');
    textSize(18);
    text("Selection  Sort",100,32);
    text("Gold's Poresort",400,32);
    text("   Mergesort   ",700,32);
    text("   QuickSort   ",1000,32);
}

function quickSort() {



}

function reset(){


}

function swap_pass(input,firstIndex, secondIndex) {
    var temp = input[firstIndex];
    input[firstIndex] = input[secondIndex]
}

function draw_update() // Update our display.
{
    //console.log( "g_frame_cnt = " + g_frame_cnt );

}

function draw() // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod) {
        if (!g_stop) draw_update();
    }
}
