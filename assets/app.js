'use strict';
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.getElementById('fixture-form');
 if(form) form.addEventListener('submit',(event)=>{
   event.preventDefault();
   document.getElementById('result').textContent='Local-only demonstration. Nothing was sent.';
 });
});
