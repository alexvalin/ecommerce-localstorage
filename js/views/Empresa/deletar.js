window.onload = function () {
    var x = new UrlParams('Empresa/Deletar');
    if (!x.params.id)
        return window.location = '../';

    var empresa = empresaController.get('id', x.params.id);

    if (!empresa)
        return window.location = '../';

    $('#txtNome').val(empresa.nome);
    $('#txtDescricao').val(empresa.descricao);
    $('#txtPreco').val(empresa.preco);
    $('#txtCategoria').val(empresa.categoria);

    $('#btnSalvar').on('click', function (ev) {
        empresaController.remove(empresa);
        window.location = '../';
    });
}