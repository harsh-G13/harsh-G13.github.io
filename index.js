const b1 = document.querySelector('.button1');
const b2 = document.querySelector('.button2');
const b3 = document.querySelector('.button3');
let first = document.querySelector('.first');
let second = document.querySelector('.second');




let inside1 = Number(first.innerText);
b1.addEventListener('click',()=>
{
    inside1++;
if(inside1<=document.querySelector('select').value)   first.innerText = `${inside1}`;
// if(inside1==5)first.style.color ='red';
if(inside1+inside2==document.querySelector('select').value){
    if(inside1>inside2){second.style.color='red';first.style.color='green';}
   else {first.style.color='red';second.style.color='green';
}
b1.disabled = true;
 b2.disabled = true;
}


});
let inside2 = Number(first.innerText);
b2.addEventListener('click',()=>
{
    inside2++;
if(inside2<=document.querySelector('select').value)   second.innerText = `${inside2}`;
// if(inside2==5)first.style.color ='red';
if(inside1+inside2==document.querySelector('select').value){
    if(inside1>inside2){second.style.color='red';first.style.color='green';}
   else {first.style.color='red';second.style.color='green';}
   b1.disabled = true;
 b2.disabled = true;
}


});
b3.addEventListener('click',()=>{
    inside1=0;inside2=0;
    first.innerText = `${inside1}`
    second.innerText = `${inside2}`
    second.style.color='black';first.style.color='black';
    b1.disabled = false;
    b2.disabled = false;
})
