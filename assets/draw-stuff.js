/* Zhi Zeng */
/* Email: zengzhi@csu.fullerton.edu */
/* Github: ZZ1227 */

/* This contains the draw_grid function which draws the canvas on the webpage. */

function draw_grid(rminor, rmajor, rstroke, rfill) {
    stroke(rstroke);
    fill(rfill);;
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid * sz;
    let height = g_canvas.hgt * sz
    for (var ix = 0; ix < width; ix += rminor) {
        let big_linep = (ix % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight(line_wgt);
        line(ix, 0, ix, height);
        strokeWeight(1);

    }
        let big_linep = ( rmajor % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight(line_wgt);
        line(0, 50, width, 50);
        strokeWeight(1);
      

}
