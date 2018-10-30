window.onload = function () {
    var x = new UrlParams('Empresas/Deletar');
    if (!x.params.id)
        return window.location = '../';

    var empresas = empresasController.get('id', x.params.id);

    if (!empresas)
        return window.location = '../';

    $('#txtNome').val(empresas.nome);
    $('#txtDescricao').val(empresas.descricao);
    $('#txtPreco').val(empresas.preco);
    $('#txtCategoria').val(empresas.categoria);

    $('#btnSalvar').on('click', function (ev) {
        empresaController.remove(empresas);
        window.location = '../';
    });
}