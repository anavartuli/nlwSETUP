// colocando o formulário em uma variável
const form = document.querySelector('#form-habits')

// iniciando a biblioteca
const nlwSetup = new NLWSetup(form)

// funções para botão de registro do dia e salvar dados
const button = document.querySelector('.plus')
button.addEventListener('click', add)
form.addEventListener("change", save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists){
        alert("Dia já incluso 🌞")
        return
    }

    alert('Dia adicionado com sucesso ✔️')
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

// funções para limpar histórico
const clear = document.querySelector('.minus')
clear.addEventListener('click', clean)

function clean (){
    localStorage.removeItem('NLWSetup@habits')
    location.reload()
}


nlwSetup.setData(data)
nlwSetup.load()