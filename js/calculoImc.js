const pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {
    const p = pacientes[i];
    console.log(p)


    const peso = p.querySelector('.info-peso').innerHTML
    const altura = p.querySelector('.info-altura').innerHTML
    const imc = p.querySelector('.info-imc')
    let valueImc = (imc).innerHTML
    console.log(peso)
    console.log(altura)
    if (peso > 0 && peso < 300) {
        if (altura > 0 && altura < 3) {

            valueImc = peso / (altura * altura)
            console.log(valueImc)
            imc.textContent = valueImc
        } else {
            valueImc = "Altura Invalida"
            imc.textContent = valueImc
            document.querySelector('tr').style.color = 'red';
            
            
        }
    } else {
        valueImc = "Peso Invalido"
        imc.textContent = valueImc
        
        
        
    }
 
}
var valueImc = document.getElementsByClassName('.info-imc')



const cadastrar = (classList) => {

    classList.preventDefault();
    const inputNome = document.getElementById('nome').value;
    const inputPeso = document.getElementById('peso').value;
    const inputAltura = document.getElementById('altura').value;
    const inputGordura = document.getElementById('gordura').value;

    if(inputPeso >0 && inputPeso<300 && inputAltura>0 && inputAltura<3){
            const tbody = document.querySelector('tbody');
            const tr = document.createElement('tr');
            var resultado = inputPeso /(inputAltura*inputAltura);
            resultado = resultado.toFixed(2);
             conteudo = `<td class = "info-nome">${inputNome}</td>
            <td class = "info-peso">${inputPeso}</td>
            <td class = "info-altura">${inputAltura}</td>
            <td class = "info-gordura">${inputGordura}</td>
            <td class = "info-imc">${resultado}</td>`
          
            tr.innerHTML = conteudo;

            tr.classList.add("tr")
            tbody.appendChild(tr);
            constValida = document.getElementById('titulo-form').innerHTML = 'Cadastro realizado com sucesso!'
            document.getElementById('titulo-form').style.color = '#04D939';
            document.querySelector('h2').style.color = '#04D939'

    }else{
        window.alert("informe uma altura válida e um peso válido")
        constValida = document.getElementById('titulo-form').innerHTML = 'Informe um peso válido!'
        document.getElementById('titulo-form').style.color = 'red';
        document.querySelector('h2').style.color = 'red'
        
    }
   const form = document.getElementById('form-adiciona');
   form.reset();

}
const btEnviar = document.getElementById('adicionarpaciente');

btEnviar.addEventListener('click', cadastrar);

const nomeDupla=document.getElementById('titulo').innerHTML = 'Leandro Rocha Viana  e  Renan Passos Silva'
