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
var A = 10;
var B = 11;
var C = 12;
var D = 13;
var E = 14;
var F = 15;
var selectSortLine = 65;
function setup() // P5 Setup Fcn
{
  
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height); // Make a P5 canvas.
    draw_grid(300, 50, 'white', 'white');
    textSize(18);
    text("Selection  Sort", 100, 32);
    text("Gold's Poresort", 400, 32);
    text("   Mergesort   ", 700, 32);
    text("   QuickSort   ", 1000, 32);
    var mergeSortArray = [0, 5, B, 1, A , 2, 8, F, 9,2, 2, 4, 6, 1, 0, 3];

    var output = mergesort(mergeSortArray);
    text(output,620,textpos+32);

    selectionsort();

}


function draw_update() // Update our display.
{
    console.log("g_frame_cnt = " + g_frame_cnt);

}

function draw() // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod) {
        if (!g_stop) draw_update();
    }
}

function selectionsort() { //Selection sort function
    selectSortArray = [0, 5, 'C', 'A', 6, 2, 'A', 7, 'B', 'C', 2, 'B', 6, 'F', 0, 3];

    selectSort = selectSortArray => {
        length = selectSortArray.length;
        for (let i = 0; i < length; i++) {
            let minValue = i;

            for (let j = i + 1; j < length; j++) {
                if (selectSortArray[j] < selectSortArray[minValue])
                    minValue = j
            }
            if (minValue !== i) { //swaps
                const temp = selectSortArray[minValue];
                selectSortArray[minValue] = selectSortArray[i];
                selectSortArray[i] = temp
                text(selectSortArray, 0, selectSortLine);
                selectSortLine = selectSortLine + 20;
            }
        }
        return selectSortArray;
    }
    const output = selectSort(selectSortArray);
    console.log(selectSortArray);
}
var textpos = 35;
function mergesort(input){

    var length = input.length;
    if(length<2){
      return input;
    }
    var middle = Math.floor(length/2);
    var L = input.slice(0,middle);
    var R = input.slice(middle);

    return merge(mergesort(L),mergesort(R));

}

function merge(L,R){
    var output = [];
    text(L,620,textpos+32);
    text(R,760,textpos+32);
    while(L.length && R.length){
      if(L[0]<=R[0]){
        output.push(L.shift());
      }else{
        output.push(R.shift());
      }


    }
    while(L.length)
        output.push(L.shift());

    while(R.length)
        output.push(R.shift());
    textpos += 32

    return output;
}

