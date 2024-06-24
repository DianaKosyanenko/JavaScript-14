// Задачи:

// Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

// Задача 2:
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.



// const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// const getData = async(argUrl) =>{
//     try {
//         const res = await fetch(argUrl);
//         const data = await res.json();
//         return data;
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }

// const fetchData = await getData(apiUrl);
// console.log(fetchData);

// const divEl = document.querySelector('div.container');
// fetchData.forEach(element => {
//     divEl.insertAdjacentHTML('beforeend',
//         `
//          <div class="card">
//               <h3>Пользователь ${element.id}</h3>
//               <p class="name">Имя: ${element.name}</p>
//               <p class="username">Ник: ${element.username}</p>
//               <p class="email">Email: ${element.email}</p>
//               <p class="adress">Street: ${element.address.street}</p>
//               <p class="suite">Suite: ${element.address.suite}</p>
//               <p class="city">City: ${element.address.city}</p>
//               <p class="zipcode">Zipcode: ${element.address.zipcode}</p>
//               <p class="lat">Lat: ${element.address.geo.lat}</p>
//               <p class="lng">Lng: ${element.address.geo.lng}</p>
//               <button class="btn__del">Удалить пользователя</button>
//           </div>

//         `

//     )
    
// });




// const delBtn = document.querySelectorAll('.btn__del');
// delBtn.forEach((button) => {
//     button.addEventListener('click', () => {
//         const product = button.closest('.card');
//         product.remove()
        
//     })
    
// });



const nasaUrl = 'https://dog.ceo/api/breed/hound/images/random/10';

const getData2 = async (argUrl) => {
    try {
        const res = await fetch(argUrl);
        const  data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error);
        
    }
};

const fetchData =  await getData2(nasaUrl);
console.log(fetchData);


const containerDiv = document.querySelector('div.container');
fetchData.message.forEach(element => {
    containerDiv.insertAdjacentHTML('beforeend',
        `
        <figure>
            <img src="${element}" />
        </figure>
        `
    )
    
});

