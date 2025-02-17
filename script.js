

let calcbody = document.querySelector(".calcbody");
let display = document.querySelector(".display");

let j=0, k=0, l=0;
let arr = ["AC","Del",".","/","*","-","+"];
let array = [7,8,9,4,5,6,1,2,3];
let arra = ["00" , "0", "="]; 
//making buttons

const issign = (a) =>{
    yes = false;
    for(let c=3; c<arr.length; c++) {
        if(a==arr[c]) {
        yes = true; break; 
        }  
    }
    return (yes);
};

for(let i=0; i<16; i++){
    let btn = document.createElement("button");
    btn.setAttribute("class","btns");

    if(i<2) {
        btn.classList.add("acdel");
    }

    if(i<4 || i%4 == 3) {
        if(i>1) btn.classList.add("signs");
        btn.innerText=arr[j];
        btn.id = btn.innerText;
        j++;
        if(i>=2) btn.id = btn.innerText;
    }
    else{
        btn.classList.add("number");
        btn.innerText = array[k];
        k++;
        btn.id = btn.innerText;
    }
    calcbody.append(btn);
}

for(let i=0; i<3; l++, i++){
    let btn = document.createElement("button");
    btn.setAttribute("class","btns");
    btn.classList.add("lastrow");
    btn.innerText = arra[l];
    btn.id = btn.innerText;
    if(i==2) 
        btn.classList.add("equal");

    calcbody.append(btn);
}

let s="0";
display.innerText = s;

let allsigns = document.querySelectorAll(".signs");
let allnum = document.querySelectorAll(".number");

let look2 = document.getElementById("00");  
let look1 = document.getElementById("0");  

let ac = document.querySelector("#AC");
let del = document.querySelector("#Del");
let equal = document.querySelector(".equal");

for(let sign of allsigns){
    sign.addEventListener("click",()=>{
        if(!issign(s[s.length-1]))
        s+=sign.innerText;
        else{
            s=s.slice(0,-1);
            s+=sign.innerText;
        }
        display.innerText = s;
    })
}



for(let num of allnum){
    num.addEventListener("click",()=>{
        if(s=="0") s=num.innerText;
        else s+=num.innerText;
        display.innerText = s;
    })
}

ac.addEventListener("click",()=>{
    s=0;
    display.innerText = s;
})
look1.addEventListener("click",()=>{
    if(s!="0") s+="0";
    display.innerText = s;
})
look2.addEventListener("click",()=>{
    if(s!="0") s+="00";
    display.innerText = s;
})


del.addEventListener("click",()=>{
    s=s.slice(0,s.length-1);
    display.innerText = s;
})

equal.addEventListener("click", ()=>{
    let res = math.evaluate(s);
    console.log(res);
    display.innerText = res;
})






