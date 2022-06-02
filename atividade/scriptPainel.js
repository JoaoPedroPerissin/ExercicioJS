import { criarForm } from "./funcaoCriar.js"; // ta fdataProuncionando graças a deus 🙏
import { clientes } from "./clientes.js"; // importado corretamente 👍
import { produtos } from "./produtos.js"; // importado corretamente 💯🙏

const xisinho = document.querySelector('#xisinho');
const mainDiv = document.querySelector('#right');
const btnClientes = document.querySelector('#btnClientes');
const btnProdutos = document.querySelector('#btnProdutos');
const btnPedidos = document.querySelector('#btnPedidos');
let testeArray = 0
let pedidos = []


btnProdutos.addEventListener('click', () => {
    criarForm(mainDiv,'formProdutos'); // cria o form ao clicar em produtos
    const xisinho = document.querySelector('#xisinho');
    const codigoPro = document.querySelector('#codigoPro');
    const nomePro = document.querySelector('#nomePro');
    const precoPro = document.querySelector('#precoPro');
    const btnTras = document.querySelector('#btnTras');
    const btnFrente = document.querySelector('#btnFrente');
    const btnNovo = document.querySelector('#btnNovo');
    const btnSalvar = document.querySelector('#btnSalvar');
    const quantidadeProduto = document.querySelector('#quantidadeProduto')
    let cadastro = 0
    codigoPro.value = produtos[cadastro].codProduto;
    nomePro.value = produtos[cadastro].descProduto;
    precoPro.value =produtos[cadastro].precoProduto;
    quantidadeProduto.value =produtos[cadastro].qtdEstoqueProd;
    xisinho.addEventListener('click', () => {
        mainDiv.innerHTML = ``
})
    btnFrente.addEventListener('click', () => {
        
        if(cadastro + 1 < produtos.length){
            cadastro++;
            
            codigoPro.value = produtos[cadastro].codProduto;
            nomePro.value = produtos[cadastro].descProduto;
            precoPro.value =produtos[cadastro].precoProduto;
            quantidadeProduto.value =produtos[cadastro].qtdEstoqueProd;
        } else {
            alert('Não existem mais produtos para exibir!')
        }
    })
    btnTras.addEventListener('click', () => {
        if( cadastro > 0){
            cadastro--;
            codigoPro.value = produtos[cadastro].codProduto;
            nomePro.value = produtos[cadastro].descProduto;
            precoPro.value =produtos[cadastro].precoProduto;
            quantidadeProduto.value =produtos[cadastro].qtdEstoqueProd;
        } else {
            alert('Não existem mais produtos para exibir!')
        }
    })
    btnNovo.addEventListener('click', () => {
        codigoPro.value = produtos.length + 1
        nomePro.value = '';
        precoPro.value = '';
        quantidadeProduto.value = '';
        btnSalvar.removeAttribute('disabled')
        cadastro = 0;
    })
    
    

    btnSalvar.addEventListener('click', () => {
        const verificarProduto = produtos.find(descProduto => {
            return descProduto.descProduto == nomePro.value
        })
        let cadastro = 0;
        if(!verificarProduto && nomePro.value != '' && precoPro.value != '' && quantidadeProduto.value != ''){
            produtos.push({
                "codProduto": parseInt(codigoPro.value),
                "descProduto": nomePro.value,
                "precoProduto": precoPro.value,
                "qtdEstoqueProd": quantidadeProduto.value,
            })
            cadastro = 0;
            codigoPro.value = produtos[0].codProduto;
            nomePro.value = produtos[0].descProduto;
            precoPro.value =produtos[0].precoProduto;
            quantidadeProduto.value =produtos[0].qtdEstoqueProd;
            btnSalvar.setAttribute('disabled', 'disabled')
            } else {
                alert('Não foi possível cadastrar o Produto!');
                let cadastro = 0;
            }
           
        })
       
    })
   




btnClientes.addEventListener('click', () => { 
    criarForm(mainDiv,'formClientes'); // cria o form ao clicar em clientes
    // todas as const que serão usadas
    const xisinho = document.querySelector('#xisinho');
    const codigoCli = document.querySelector('#codigoCli');
    const nomeCli = document.querySelector('#nomeCli');
    const dataCli = document.querySelector('#dataCli');
    const btnTras = document.querySelector('#btnTras');
    const btnFrente = document.querySelector('#btnFrente');
    const btnNovo = document.querySelector('#btnNovo');
    const btnSalvar = document.querySelector('#btnSalvar');
    let cadastro = 0
    codigoCli.value = clientes[cadastro].codCliente;
    nomeCli.value = clientes[cadastro].nomeCliente;
    dataCli.value =clientes[cadastro].dataCadCli
    //ao clicar no >
    btnFrente.addEventListener('click', () => {
        
        if(cadastro + 1 < clientes.length){
            cadastro++;
            
            codigoCli.value = clientes[cadastro].codCliente;
            nomeCli.value = clientes[cadastro].nomeCliente;
            dataCli.value =clientes[cadastro].dataCadCli
        } else {
            alert('Não existem mais clientes para exibir!')
        }
    })
    // ao clicar no <
    btnTras.addEventListener('click', () => {
        if( cadastro > 0){
            cadastro--;
            codigoCli.value = clientes[cadastro].codCliente;
            nomeCli.value = clientes[cadastro].nomeCliente;
            dataCli.value =clientes[cadastro].dataCadCli;
        } else {
            alert('Não existem mais clientes para exibir!')
        }
    })
    // ao clicar em novo (libera o botão salvar)
    btnNovo.addEventListener('click', () => {
        codigoCli.value = clientes.length + 1
        nomeCli.value = '';
        dataCli.value = new Date().toLocaleDateString();
        btnSalvar.removeAttribute('disabled')
        cadastro = 0;
    })
    // ao clicar em salvar, adiciona o elemento ao objeto clientes caso ele cumpra os requisitos
    btnSalvar.addEventListener('click', () => {
            const verificarcliente = clientes.find(nomeCliente => {
                    return nomeCliente.nomeCliente == nomeCli.value
                })
        let cadastro = 0;
        if(!verificarcliente){
            clientes.push({
                "codCliente": parseInt(codigoCli.value),
                "nomeCliente": nomeCli.value,
                "dataCadCli": dataCli.value,
            })
            cadastro = 0;
            codigoCli.value = clientes[0].codCliente;
            nomeCli.value = clientes[0].nomeCliente;
            dataCli.value =clientes[0].dataCadCli;
            btnSalvar.setAttribute('disabled', 'disabled')
            } else {
                alert('Não foi possível cadastrar o cliente!');
                let cadastro = 0;
            }
            
        })
        xisinho.addEventListener('click', () => {
            mainDiv.innerHTML = ``
    })
})
btnPedidos.addEventListener('click', () => {
    criarForm(mainDiv,'formPedidos'); // cria o form ao clicar em pedidos
    const xisinho = document.querySelector('#xisinho');
    const idPedido = document.querySelector('#codigoPed');
    const nomePedido = document.querySelector('#nomeCliPedidos');
    const localizarProd = document.querySelector('#localizarProduto');
    const table = document.querySelector('#tbody');
    const totalPedido = document.querySelector("#totalPedido");
    const idDoPedido = document.querySelector("#idDoProduto");
    const desc = document.querySelector('#descProduto');
    const precoUn = document.querySelector("#precoUnidade");
    const qntdProdutos = document.querySelector('#qntdProdutos');
    const btnL = document.querySelector('#btnLancar')
    const tr = document.querySelector('#baixo')
    let controle = -2;
    let controleProdutos = -2;
    const elementoTotal = document.querySelector("#totalPedido")
    
    
    idPedido.addEventListener('blur', () => { // id do cliente
            if (idPedido.value <= clientes.length && idPedido.value != '' && idPedido.value > 0){
            controle = idPedido.value - 1;
            nomePedido.value = clientes[controle].nomeCliente;
            
        } else {
            alert('Este ID não existe!');
            idPedido.value = '';
        }
    })
    
    idDoPedido.addEventListener('blur', () => { // id do produto
            if( idDoPedido.value <= produtos.length && idDoPedido.value > 0){
            let controleProdutos = idDoPedido.value -1;
            desc.value = produtos[controleProdutos].descProduto;
            precoUn.value = produtos[controleProdutos].precoProduto;
            
    
        } else {
            alert('este ID não existe!');
        }
    })
    btnL.addEventListener('click', () => {
        const verificacao = pedidos.find(item => {
            return item.item == idDoPedido.value
        })
    
    
        if( !verificacao && idDoPedido.value != '' && idPedido.value != '' && qntdProdutos.value != '' && qntdProdutos.value > 0 && qntdProdutos.value <= produtos[idDoPedido.value - 1].qtdEstoqueProd){
            pedidos.push({
                item: idDoPedido.value,
                descricao: desc.value,
                preco: precoUn.value,
                qntd: qntdProdutos.value,
                subtotal: qntdProdutos.value * precoUn.value
            })
            
            alert('produto adicionado com sucesso!');
            table.innerHTML= '';
            pedidos.forEach((item)=> {
                const tdItem = document.createElement('td')
                const tdDesc = document.createElement('td')
                const tdPreco = document.createElement('td')
                const tdQnt = document.createElement('td')
                const tdSub = document.createElement('td')
    
                tdItem.textContent = item.item
                tdDesc.textContent = item.descricao
                tdPreco.textContent = item.preco
                tdQnt.textContent = item.qntd
                tdSub.textContent = item.subtotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
                const tr = document.createElement('tr')
                tr.appendChild(tdItem)
                tr.appendChild(tdDesc)
                tr.appendChild(tdPreco)
                tr.appendChild(tdQnt)
                tr.appendChild(tdSub)
    
                table.appendChild(tr)
                
            })
            let total = 0;
            pedidos.forEach((valor) => {
                total = total + valor.subtotal
                
            })
            
            elementoTotal.innerHTML = `<p>${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    
        } else {
            alert('erro')
        }
    
    })
    
    
    xisinho.addEventListener('click', () => {
    
        mainDiv.innerHTML = ``
    
    })
    })
