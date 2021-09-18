const teamContainer = document.querySelector('#team');
const team = [
    {
        name: 'Uziel Meliton Hernandez',
        email: 'uzielmelitonh@gmail.com'
    },
    {
        name: 'Yony Garcia',
        email: '20181138@uthh.edu.mx'
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