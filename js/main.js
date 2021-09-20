const teamContainer = document.querySelector('#team');
const team = [
    {
        name: 'Uziel Meliton Hernandez',
        email: 'uzielmelitonh@gmail.com'
    },
    {
        name: 'Yony Garcia',
        email: '20181138@uthh.edu.mx'
    },
    {
        name: 'Anastasio Del Angel Del Angel',
        email: '20181168@uthh.edu.mx'
    },
    {
        name: 'Babel Sanjuan Sanjuan',
        email: 'babel10202000@gmail.com'
     }
]


const render = () => {
    let content = '';
    team.forEach(item => {
        return content += `<li>${item.name} - ${item.email}</li>`
    })

    teamContainer.innerHTML = content;
}

render();
