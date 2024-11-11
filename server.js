const express=require('express');
const fs=require('fs');

const app=express();

app.use(express.static('public'))

app.get('/',function(req,res){
	res.send(fs.readFileSync('./public/index.html'))
})
app.get('/data/:abc',function(req,res){

	var str=JSON.parse(fs.readFileSync('data2.json').toString()).filter(function(elem){
		return elem[0][0].toLowerCase()==req.params.abc.toLowerCase()
	}).map(function(elem,index,arr){
		var a=[]
		for(let i=5;i<elem.length;i+=2){
			a.push(`<span class="explain">${elem[i]+elem[i+1]}</span>`)
		}

		var s= `<div class="item">
					<div class="top">
						<span class="name">${elem[0]}</span>
						<span class="uk">${elem[1]+elem[2]}</span>
						<span class="usa">${elem[3]+elem[4]}</span>
					</div>
					<div class="bottom">
						${a.join("<br/>")}
					</div>
				</div>`
		return s
	})

	res.send(str.join(""))
})

app.listen(80,()=>{
	console.log('express server running at http://localhost')
})
