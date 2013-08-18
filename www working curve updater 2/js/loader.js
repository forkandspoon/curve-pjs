/* loader.js multipaper/canvas fix by 
https://github.com/zgrossbart/multipaper/blob/master/loader.js
*/

loader = {
};

function loadDrawing(/*string*/ url, /*string*/ id, dataJSON) {
    $.ajax({
        url: 'js/' + url + '.pjs',
        dataType: 'html',
        success: function(data) {
            paper = new paper.PaperScope();
            paper.setup(document.getElementById(id));
            paper.evaluate(data);
            
            loader[url].layout(dataJSON);
        }
    });
}




$(document).ready(function() {
	var dataJSON = $.parseJSON('{"sA": [-7], "fBA": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}'); /* parseJSON test */

	/* assume we've already seperated the JSON */

    loadDrawing('drawing1', 'canvas1', dataJSON.fBA);
    loadDrawing('drawing2', 'canvas2', dataJSON.sA);
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
		var dataJSON = $.parseJSON(str);

		console.log(dataJSON.sA[0]);
		console.log(dataJSON.fBA[0]);
		console.log(dataJSON.fBA[1]);
		console.log(dataJSON.fBA[2]);
		console.log(dataJSON.fBA[3]);
		console.log(dataJSON.fBA[4]);
		console.log(dataJSON.fBA[5]);
		console.log(dataJSON.fBA[6]);
		console.log(dataJSON.fBA[7]);
		console.log(dataJSON.fBA[8]);
		console.log(dataJSON.fBA[9]);
		console.log(dataJSON.fBA[10]);
		console.log(dataJSON.fBA[11]);

		loadDrawing('drawing1', 'canvas1', dataJSON.fBA);
    	loadDrawing('drawing2', 'canvas2', dataJSON.sA);


	}
	catch(err) {
		console.log("input not JSON");
	}

};