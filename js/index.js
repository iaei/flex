var username= document.getElementById('username');
var form = document.getElementById("form");
username.addEventListener("blur",function(){
	var p_name = form.elements[0].value;
	if (p_name !=p_name.match(/^\w +[@]\w +[.][\w.] +$/)){
		username.style.backgroundColor ="red";
	}else{
		username.style.backgroundColor ="green";
	}
},false);