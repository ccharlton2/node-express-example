
 async function getData (){
       const req = await fetch("http://localhost:3000/api/v1");
       const res = await req.json()
       console.log(res)
 }

 getData()