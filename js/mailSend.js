const url = 'https://script.google.com/macros/s/AKfycbzkfr9e3DfYNfXwW_4fDIjtRaeKjESkoqwaaACs5HJv5xYq3mKDbnuFmT9HF7CRK5ka/exec'
const form = document.forms['contactform'];
form.addEventListener("submit",(e)=>{
   e.preventDefault();

fetch(url,{
    method:"POST",
    body : new FormData(form)
}).then((res)=>res.text())
.then((finalRes)=>console.log(finalRes))
.catch(error => console.error("Error : ", error));
})
