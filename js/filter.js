function filter(type){
	if (document.getElementById("in-ear").checked){
		objs = document.querySelectorAll(".in-ear")
		for (i = 0; i < objs.length; i++){
			objs[i].style.display="block";
		}
		objs = document.querySelectorAll(".over-ear")
		for (i = 0; i < objs.length; i++){
			objs[i].style.display="none";
		}
	}else if (document.getElementById("over-ear").checked){
		objs = document.querySelectorAll(".in-ear")
		for (i = 0; i < objs.length; i++){
			objs[i].style.display="none";
		}
		objs = document.querySelectorAll(".over-ear")
		for (i = 0; i < objs.length; i++){
			objs[i].style.display="block";
		}
	}else{
		objs = document.querySelectorAll(".in-ear")
		for (i = 0; i < objs.length; i++){
			objs[i].style.display="block";
		}
		objs = document.querySelectorAll(".over-ear")
		for (i = 0; i < objs.length; i++){
			objs[i].style.display="block";
		}
	}
}