const imgProdutos = document.querySelector('#imgProduto')
const nomeProdutos = document.querySelector('#nomeProduto')
const listProdutos = document.querySelector('.produto')
const form = document.querySelector('#formulario')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const cadastAmigo = document.querySelector('#formCadastro')
const nameAmigo = document.querySelector('#nameAmigo')
const emailAmigo = document.querySelector('#emailAmigo')
const nextProduto = document.querySelector('#nextProduto')
const btnNext = document.querySelector('.btn-next')
const enviado = document.querySelector('.enviado')
const compartilhado = document.querySelector('.compartilhado')

form.onsubmit = function(e){
    e.preventDefault()

    let inputNome = document.forms.formulario['name']
    let inputEmail = document.forms.formulario['email']
    let inputCpf = document.forms.formulario['cpf']
    

    if(!inputNome.value){

        inputNome.classList.add('inputBorderRed')
        
    }else{

        inputNome.classList.remove('inputBorderRed')
        
        
    }

    if(!inputEmail.value){

        inputEmail.classList.add('inputBorderRed')
        
    }else{

        inputEmail.classList.remove('inputBorderRed')
    }

    if(!inputCpf.value){

        inputCpf.classList.add('inputBorderRed')
    
    }else{

        inputCpf.classList.remove('inputBorderRed')
    }

    if(inputNome.value && inputEmail.value && inputCpf.value){

        enviado.classList.add('toast')

        setTimeout(()=>{

            enviado.classList.remove('toast')
        }, 2000)
        
    }
}


cadastAmigo.onsubmit = function(e){
    e.preventDefault()

    let nameAmigo = document.forms.formCadastro['nameAmigo']
    let emailAmigo = document.forms.formCadastro['emailAmigo']

    if(!nameAmigo.value){

        nameAmigo.classList.add('inputBorderRed')
    
        let amigoNome = nameAmigo.nextSibling.nextSibling
        amigoNome.innerText = 'Digite o nome correto'

    }else{

        nameAmigo.classList.remove('inputBorderRed')

        let amigoNome = nameAmigo.nextSibling.nextSibling
        amigoNome.innerText = ''
    }

    if(!emailAmigo.value){

        emailAmigo.classList.add('inputBorderRed')
    
        let emailAmigos = emailAmigo.nextSibling.nextSibling
        emailAmigos.innerText = 'Digite o nome correto'

    }else{

        emailAmigo.classList.remove('inputBorderRed')

        let emailAmigos = emailAmigo.nextSibling.nextSibling
        emailAmigos.innerText = ''
    }


    if(nameAmigo.value && emailAmigo.value ){

        compartilhado.classList.add('toastt')

        setTimeout(()=>{

            compartilhado.classList.remove('toastt')
        }, 2000)
        
    }


}

    fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(resp => resp.json())
    .then(data =>{

        const products = data.products

        console.log(data)
        console.log(data.nextPage)

        const listaPordutos = products.map(produto =>{
            listProdutos.innerHTML += `<div class="products">
                <img id="imgProduto" src="${produto.image}" alt="img-produtos">
                <h4 id="nomeProduto">${produto.name}</h4>
                <p id="descricaoProd">${produto.description}</p>
                <h6 class="valor">${produto.oldPrice}</h6>
                <h6 class="valor">${produto.price}</h6>
                <h6 class="valor">${produto.installments.count} x de ${produto.installments.value}</h6>
                <button id="comprar">Comprar</button>
            </div>`
           
        })
    })


    btnNext.addEventListener('click',()=>{

        nextProduto.href = data.nextPage
    })


    





