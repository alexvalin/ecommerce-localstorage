window.onload = function () {
    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtCnpj = $('#txtCnpj');
    var $txtFuncionarios = $('#txtFuncionarios');
    var $txtCategoria = $('#txtCategoria');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var empresas = new Empresas({
                nome: $txtNome.val(),
                descricao: $txtDescricao.val(),
                cnpj: $txtCnpj.val(),
                funcionarios: $txtFuncionarios.val(),
                categoria: $txtCategoria.val()
            });
            empresasController.add(empresas);
        });
}