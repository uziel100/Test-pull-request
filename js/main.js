const teamContainer = document.querySelector('#team');
        const team = [
            { 
                name: 'Uziel Meliton Hernandez',
                email: 'uzielmelitonh@gmail.com'                
            }
        ]

        
        const render = () => {
            let content = '';
            team.forEach(item => {
                return content += `<li>${ item.name } - ${  item.email }</li>`   
            })

            teamContainer.innerHTML = content;
        }

        render();