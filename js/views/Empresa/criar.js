window.onload = function () {
    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtPreco = $('#txtPreco');
    var $txtCategoria = $('#txtCategoria');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var empresa = new Empresa({
                nome: $txtNome.val(),
                descricao: $txtDescricao.val(),
                preco: $txtPreco.val(),
                categoria: $txtCategoria.val()
            });
            empresaController.add(empresa);
        });
}