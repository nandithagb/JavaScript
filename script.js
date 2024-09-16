// let newbtn= document.createElement("button");
// newbtn.innerText="Click Me!";
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);


// let para=document.querySelector("p");
// para.classList.add(newclass);




let modbtn=document.querySelector("#mode");
let body =document.querySelector("body");
let currmode="light";

modbtn.addEventListener("click",()=>{
   if(currmode==="light"){
    currmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }else{
    currmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currmode);
})