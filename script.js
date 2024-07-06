 const cart2=document.getElementsByClassName('user-list')[0];
 const search = document.getElementById('search');
 let arr = [];
 getData();
 search.addEventListener('input' , (e)=>solve(e.target.value));
 async function getData(){
    const res = await fetch('https://randomuser.me/api?results=30');

    const { results } = await res.json();
    console.log(results);
    cart2.innerHTML = '';
    results.forEach(user => {
        const li = document.createElement('li');
        arr.push(li);
        li.innerHTML= `<img src="${user.picture.large}" alt="${user.name.first} class = "profile" ">
                  <div class = "user_list"> 
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city},${user.location.country}</p>
                  </div>`;

                  li.querySelector('img').classList.add('profile');
                  cart2.appendChild(li);
    });
    
 };

 async function solve(e){
    arr.forEach(ele=>{
        if(ele.innerText.toLowerCase().includes(e.toLowerCase())){
            console.log(ele.innerText.toLowerCase() + e.toLowerCase());
            ele.classList.remove('hide');
        }
        else{
            ele.classList.add('hide');
        }
    })
    
 }