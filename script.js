
// Event delegation is a concept in JavaScript where you attach a single event listener to a common ancestor of multiple elements instead of attaching individual event listeners to each element. 

document.querySelector("#form").addEventListener('keyup', (e)=>{
   if(e.target.dataset.uppercase!=undefined){
    e.target.value=e.target.value.toUpperCase();
   }
   console.log(e.target.dataset.uppercase)
 
})