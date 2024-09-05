let data= await fetch("./data.json");
let response= await data.json();

let btn=document.querySelector("#bt");
let sectn=document.querySelector("#section");
let arr=[]
function matchPair(){
for(let i=0;i<16;i++){
let divBox=document.createElement("div");
divBox.className="divBox"
  
let img=document.createElement("img");
img.id="img";

// divBox click function
  divBox.addEventListener("click",(event)=>{
  if(divBox.id==""){
    divBox.id=i
    divBox.append(img);
    img.src=response.img[Math.round(Math.random()*(response.img.length-1))];
    document.querySelector("span").innerHTML=+document.querySelector("span").innerHTML+1;
    if(arr.length<2){
    arr.push({img:img.src,id:i});
  
    }else{
       if(arr[arr.length-1].img!=arr[arr.length-2].img){
           arr.forEach((item)=>{
             document.getElementById(item.id).innerHTML=""
              document.getElementById(item.id).id=""
              
            })
           
            arr.splice(0,2);
            arr.push({img:img.src,id:i});
        }else{
            arr.length=0
            arr.push({img:img.src,id:i});
        }
      
       
      }
    
}
})
//    append divBox in sectn
      sectn.append(divBox);
}
}
// onload function call
matchPair();
// click Restart button
btn.addEventListener("click",()=>{
 for(let i of document.querySelectorAll(".divBox")){
    sectn.innerHTML=""
    document.querySelector("span").innerHTML="0"
    arr.length=0;
   matchPair();
 }
 
})
