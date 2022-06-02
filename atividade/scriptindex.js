const user = document.querySelector('#user')
const pws = document.querySelector('#senha')
const btn = document.getElementById('divbtn')


btn.addEventListener('click', () => {
    fetchdados();
})
let fetchdados = async function () {
    const usus = "./usuario.json"
    const dadosFetch = await fetch(usus)
    const json = await dadosFetch.json();

    if (conferir(json.users)) {
        window.location.href = `./painel.html`
    } else {
        alert(`Usuario ou senha incorreta`)
    }
}

function conferir(Json) {
    for (let usuario of Json) {
        if (usuario.user === user.value && usuario.pws === pws.value) {
            return true
        }
    }
}
