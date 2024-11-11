

f()
async function f(){

	var data=await new Promise(function(resolve,reject){
		var xhr=new XMLHttpRequest();

		xhr.open('GET','/data/a',true);

		xhr.onload=function(){
			resolve(xhr.response)
		}

		xhr.send();
	})
	
	document.querySelector("#box").innerHTML= data;

	var arr=document.querySelectorAll("#side .item")
	for(let i=0;i<arr.length;i++){
		arr[i].onclick=function(){
			// var name=document.querySelectorAll(".name")
			// for(var j=0;j<name.length;j++){
			// 	if(name[j].innerHTML.substring(0,1)==this.innerHTML.toLowerCase()){
			// 		name[j].parentElement.parentElement.scrollIntoView()
			// 		break;
			// 	}
			// }
			var xhr=new XMLHttpRequest();
			console.log(this.innerHTML)
			xhr.open('GET','/data/'+this.innerHTML,true);

			xhr.onload=function(){
				document.querySelector("#box").innerHTML=xhr.response
			}

			xhr.send();
			
		}
	}

	document.querySelector("#show1").onclick=function(){
		// Array.prototype.slice.call(document.querySelectorAll('.name')).forEach(function(elem){
		// 	elem.classList.toggle('hidden')
		// })
		var a=document.querySelectorAll('.name')
		for(let i=0;i<a.length;i++){
			a[i].classList.toggle('hidden')
		}
	}

	document.querySelector("#show2").onclick=function(){
		// Array.prototype.slice.call(document.querySelectorAll('.explain')).forEach(function(elem){
		// 	elem.classList.toggle('hidden')
		// })
		var a=document.querySelectorAll('.explain')
		for(let i=0;i<a.length;i++){
			a[i].classList.toggle('hidden')
		}
	}

	document.querySelector("#in").oninput=function(){
		

	}
}



