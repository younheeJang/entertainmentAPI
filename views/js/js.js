const log = console.log;

const filter = (f, iter)=>{
	let res = [];
	for(const a of iter){
		if(f(a)){ res.push(a)}else{}
	}
return res;
}