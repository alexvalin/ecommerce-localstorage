window.onload = function () {
    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtPreco = $('#txtPreco');
    var $txtCategoria = $('#txtCategoria');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var empresas = new Empresas({
                nome: $txtNome.val(),
                descricao: $txtDescricao.val(),
                preco: $txtPreco.val(),
                categoria: $txtCategoria.val()
            });
            empresasController.add(empresas);
        });
}