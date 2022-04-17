const p1 = new promise((resolve,reject)=> 
{
	setTimeOut(resolve('hiii'),6000);
});

const p2 = new promise((resolve,reject)
=>{
	setTimeOut(reject('error'),6000);
});

Promise.allSettled([p1,p2])
   .then(value => console.log(value))
   .catch(err => console.log('sorry!'));