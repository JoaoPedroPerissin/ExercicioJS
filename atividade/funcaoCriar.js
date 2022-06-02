export { criarForm } 

function criarForm(elemento,container){
    switch(container){
        // clientes
        case 'formClientes':
            let textCli = `<form  id='formpadrao' action="">
            <section id="clientesTopSection">
                <h1 class="flex" id="textClientes">Clientes</h1>
                <h1 class='flex'id="xisinho">x</h1>
            </section>
            <legend>Código</legend>
            <input type="number" name="codigo" disabled placeholder='Ex: 1,2,3...'id="codigoCli">
            <legend>Nome</legend>
            <input id="nomeCli" type="text">
            <legend>Data do Cadastro</legend>
            <input type="text" name="" disabled id="dataCli">
            <section id="botoes" >
               <nav id="frenteTras">
                   <input type="button" name="" id="btnTras" value="<">
                   <input type="button" id="btnFrente" value=">">
               </nav>
               <nav id="novoSalvar">
                    <input type="button" id="btnNovo" value="Novo">
                    <input type="button"  disabled id="btnSalvar" value="Salvar">
                </nav>
            </section>
            </form>`
         
        elemento.innerHTML = textCli
        break;
    // Produtos    
    case 'formProdutos': let text = ` 
    <form  id='formpadrao' action="">
    <section id="clientesTopSection">
        <h1 class="flex" id="textClientes">Produtos</h1>
        <h1 class='flex'id="xisinho">x</h1>
    </section>
    <legend>Código</legend>
    <input type="number" name="codigo"  placeholder='Ex: 1,2,3...'id="codigoPro">
    <legend>Descrição</legend>
    <input id="nomePro" type="text">
    <legend>Preço</legend>
    <input type="number" name="" id="precoPro">
    <legend>Quantidade</legend>
    <input type="number" name="" id="quantidadeProduto">
    <section id="botoes" >
        <nav id="frenteTras">
            <input type="button" name="" id="btnTras" value="<">
            <input type="button" id="btnFrente" value=">">
        </nav>
        <nav id="novoSalvar">
            <input type="button" id="btnNovo" value="Novo">
            <input type="button" id="btnSalvar" value="Salvar">
        </nav>
    </section>
    </form>`

        elemento.innerHTML = text

        break;
        // Pedidos
    case 'formPedidos': let texto = `
    <form  id='formpadrao' action="">
    <section id="clientesTopSection">
        <h1 class="flex" id="textClientes">Pedidos</h1>
        <h1 class='flex'id="xisinho">x</h1>
    </section>
    <legend>Código do Cliente</legend>
    <input type="text" name="codigoPedido"  value='' placeholder='Ex: 1,2,3...'id="codigoPed">
    <legend>Cliente</legend>
    <input id="nomeCliPedidos" disabled type="text">
    <nav id="localizarProduto">
        <input type="text" value='' placeholder="Id" id="idDoProduto">
        <input type="text" id="descProduto" disabled>
        <input type="text" id="precoUnidade" disabled>
        <input type="text" value='' id="qntdProdutos" >
        <input type="button" value="Lançar pedido" id="btnLancar">
    </nav>
    <p>Itens Do pedido</p>
    <table id=table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Descição</th>
                <th>Preço</th>
                <th>Qntd.</th>
                <th>Sub total</th>
        </thead>
        <tbody id=tbody>

        </tbody>
    </table>
    <section id="totalPedido"></section>
    </form>`

            elemento.innerHTML = texto
            break
    
    }
}