const BASE_URL = "http://[::1]:3000/api/v1/weapons"

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(BASE_URL)
    .then(resp => console.log(resp))

})