function enter(inputs){
	document.getElementById('output').value+=inputs;
}

function sqrt(){
    document.getElementById('output').value = Math.sqrt(document.getElementById('output').value);
}

function square(){
 	document.getElementById('output').value = Math.pow(document.getElementById('output').value,2);
}

function exp(){
 	document.getElementById('output').value = Math.exp(document.getElementById('output').value);
}

function pow(){ 
 	var x = document.getElementById('output').value
 	var p = x**x;
 	//var po = Math.pow(p);
 	document.getElementById('output').value = p;
}

function clean(){
	document.getElementById('output').value="";
}

function calculate(){
	var output=document.getElementById('output').value;
	var res=eval(output);
	document.getElementById('output').value=res;
}

function del(){
	var a = document.getElementById('output').value;
    document.getElementById('output').value = a.slice(0,-1)
}

function sin(){
 	document.getElementById('output').value = Math.sin(document.getElementById('output').value);
}

function cos(){
 	document.getElementById('output').value = Math.cos(document.getElementById('output').value);
}

function log(){
 	document.getElementById('output').value = Math.log(document.getElementById('output').value);
}

function deg(){
	var degree = document.getElementById('output').value;
	var deg    = (180/3.14159)*degree;
	document.getElementById('output').value = deg;
}

function pi(){
	const p = 3.14159;
 	document.getElementById('output').value = p;
}

function fact(){
	var n = document.getElementById('output').value;
	let answer = 1;
  if (n == 0 || n == 1){
    answer = 1; 
  }else{
    for(var i = n; i > 1; i--){
      answer *= i;
    }
    
  }
    document.getElementById('output').value = answer;
}


function apx(){
	document.getElementById('output').value = Math.round(document.getElementById('output').value);
}


