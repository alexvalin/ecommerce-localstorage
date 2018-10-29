window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Produtos/Editar');
    if (!x.params.id)
        return window.location = '../';

    var empresa = empresa.get('id', x.params.id);

    if (!empresa)
        return window.location = '../';

    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtPreco = $('#txtPreco');
    var $txtCategoria = $('#txtCategoria');
    
    $txtNome.val(empresa.nome);
    $txtDescricao.val(empresa.descricao);
    $txtPreco.val(empresa.preco);
    $txtCategoria.val(empresa.categoria);

    $('#btnSalvar').on('click', () => validacao() && salvar());

    function salvar() {
        empresa.nome = $txtNome.val();
        empresa.descricao = $txtDescricao.val();
        empresa.preco = Number.parseFloat($txtPreco.val());
        empresa.categoria = $txtCategoria.val();
        empresaController.update(empresa);
        window.location = '../';
    }

    function validacao() {
        if (!$txtNome.val())
            return false;
        
        var p = Number.parseFloat($txtPreco.val());
        if (isNaN(p) || p < 0)
            return false;

        return true;
    }
}