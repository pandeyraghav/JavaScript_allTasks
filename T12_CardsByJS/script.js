var users = [
    {
        name: 'Raghav',
        age: 20,
        city: 'Bhopal'
    },
    {
        name: 'Ishant',
        age: 21,
        city: 'Harda'
    },
    {
        name: 'Nikita',
        age: 22,
        city: 'Indore'
    }
]
var sum = '';
users.forEach(function(item){
    sum += `<div class="card">
        <h1>${item.name}</h1>
        <h4>${item.age},${item.city}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>`;
})

document.querySelector('body').innerHTML = sum;
