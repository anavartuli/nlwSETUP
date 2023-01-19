// colocando o formulário em uma variável
const form = document.querySelector('#form-habits')

// iniciando a biblioteca
const nlwSetup = new NLWSetup(form)

const data = {
    water: ['01-01', '01-02', '01-03', '01-07'],
    study:['01-01', '01-02', '01-03', '01-04', '01-07'],
    healthy: ['01-04'],
    sleep: ['01-01', '01-06'],
    meditate: [],
    pills: ['01-01', '01-03', '01-05']
}

nlwSetup.setData(data)
nlwSetup.load()