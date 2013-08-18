/* loader.js multipaper/canvas fix by 
https://github.com/zgrossbart/multipaper/blob/master/loader.js
*/

loader = {
};

function loadDrawing(/*string*/ url, /*string*/ id) {
    $.ajax({
        url: 'js/' + url + '.pjs',
        dataType: 'html',
        success: function(data) {
            paper = new paper.PaperScope();
            paper.setup(document.getElementById(id));
            paper.evaluate(data);
            
            loader[url].layout();
        }
    });
}


$(document).ready(function() {
	var data = $.parseJSON('{"sA": [5], "fBA": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}'); /* parseJSON test */
    loadDrawing('drawing1', 'canvas1');
    loadDrawing('drawing2', 'canvas2');
});

function getData(){
	/* in the future this will be updated by bluetooth code.
	for now, we just try with manually updating string by using a textbox */
	var str = document.getElementById('textbox').value;
	//console.log(textStr);
	try { /* only run below code if the passed data is JSON and can be parsed, 
		otherwise run catch(err) block, aka can be console.log, error or nothing (ignore)
		JSON structure is {"name": "jian"} or {"name": [0, 1, 2, 3]}
		note the double quotes */
		var data = $.parseJSON(str);

		console.log(data.sA[0]);
		console.log(data.fBA[0]);
		console.log(data.fBA[1]);
		console.log(data.fBA[2]);
		console.log(data.fBA[3]);
		console.log(data.fBA[4]);
		console.log(data.fBA[5]);
		console.log(data.fBA[6]);
		console.log(data.fBA[7]);
		console.log(data.fBA[8]);
		console.log(data.fBA[9]);
		console.log(data.fBA[10]);
		console.log(data.fBA[11]);

	}
	catch(err) {
		console.log("input not JSON");
	}

};