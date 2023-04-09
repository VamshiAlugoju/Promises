  let userposts = []
 function updateLastUserActivityTime(){
  return new Promise((res,rej)=>{
     setTimeout(()=>{
          let n = userposts.length;
      userposts[n-1].time = new Date;
      res(userposts[n-1].time)
     } , 2000)
  })
}
function createPost()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
             userposts.push({name:"new Post"})
            //  console.log("hello")
        res();
        } , 1000)
       
    })
}
// createPost();
Promise.all([createPost() , createPost(),  updateLastUserActivityTime()]).then(res=>{
    console.log(res);
})
