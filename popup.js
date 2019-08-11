// Copyright 2018 linkwebbie.com . All rights reserved.


/*auto scripts*/



/*encode*/
function encode(){
	var getVal = document.getElementById("textinput").value;
	document.getElementById("textinput").value = window.btoa(getVal);
	document.getElementById("resultBlock").style.display = "block";
	document.getElementById("textinput").style.height = "100px";
	
}

/*make text box empty*/
function clear(){
	var getVal = document.getElementById("textinput").value;
	document.getElementById("textinput").value = "";
	document.getElementById("charCount").innerHTML = "Please type in Characters";
	
}

/*decode*/
function decode(){

	var getVal = document.getElementById("textinput").value;
	document.getElementById("textinput").value = window.atob(getVal);
	document.getElementById("resultBlock").style.display = "block";
	document.getElementById("textinput").style.height = "100px";
	
}
/*copying from text*/
function copy(){
  var copyText = document.getElementById("textinput");
  copyText.select();
  document.execCommand("Copy");
}

/*as the user types counte the number of chars*/
function typing() {
	var getVal = document.getElementById("textinput").value;
	var letterCount = getVal.length;
	
	if(letterCount == 0)
	{
		document.getElementById("charCount").innerHTML = "Please type in Characters";
	}
	else if (letterCount <= 1)
	{
		document.getElementById("charCount").innerHTML =  letterCount + " Character";
	}
	else
	{
		document.getElementById("charCount").innerHTML =  letterCount + " Character";
		
	}
	
	
	
	
}


/*click on the text area*/
function expand(){
	
	document.getElementById("textinput").style.height = "300px";
	
	
}



//make the body bigger 
function zoomOut() {
	
	//the current height 
	var curH = document.body.style.height;
	//the current width
	var curW = document.body.style.width;
	document.body.style.height = "100px";
	document.body.style.width = "100px";
	
}

//make the body bigger 
function zoomIn() {
	
	//the current height 
	var curH = document.body.style.height;
	//the current width
	var curW = document.body.style.width;
	document.body.style.height = "600px";
	document.body.style.width  =  "600px";
	
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('textarea').addEventListener('click', expand);
  document.querySelector('#encoder').addEventListener('click', encode);
  document.querySelector('#decoder').addEventListener('click', decode);
  document.querySelector('#copyer').addEventListener('click', copy);
  document.querySelector('#clearer').addEventListener('click', clear);
  document.querySelector('#textinput').addEventListener('keyup', typing);
  document.querySelector('#textinput').addEventListener('drop', typing);
  document.querySelector('#zoomOut').addEventListener('click', zoomOut);
  document.querySelector('#zoomIn').addEventListener('click', zoomIn); 
  main();
});

//searchUrbanDict = function(word){
   // var query = word.selectionText;
//chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
 //};

chrome.contextMenus.create({
 title: "Search in UrbanDictionary",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});
