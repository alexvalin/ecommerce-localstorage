window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Empresas/Editar');
    if (!x.params.id)
        return window.location = '../';

    var empresas = empresasController.get('id', x.params.id);

    if (!empresas)
        return window.location = '../';

    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtPreco = $('#txtPreco');
    var $txtCategoria = $('#txtCategoria');
    
    $txtNome.val(empresas.nome);
    $txtDescricao.val(empresas.descricao);
    $txtPreco.val(empresas.preco);
    $txtCategoria.val(empresas.categoria);

    $('#btnSalvar').on('click', () => validacao() && salvar());

    function salvar() {
        empresa.nome = $txtNome.val();
        empresa.descricao = $txtDescricao.val();
        empresa.preco = Number.parseFloat($txtPreco.val());
        empresa.categoria = $txtCategoria.val();
        empresasController.update(empresas);
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