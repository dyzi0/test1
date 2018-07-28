 var user = {
	 name: "Patryk",
	 surname: "Gasiewski",
	 age: 18,
	 plusAge: function(number){
		this.age = this.age + number;
	 }
	 
 }
 

 function waitSeconds(second) {
	 setTimeout(newName,second*1000);
 }
 function newName(){
  var a = document.getElementById("userName");
 a.innerHTML = user.name;
 a.setAttribute("class","redtext");
 };
 window.onload = waitSeconds(5);
 


