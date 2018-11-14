window.onload = function () {
    var x = new UrlParams('Pessoas/Deletar');
    if (!x.params.id)
        return window.location = '../';

    var pessoa = pessoasController.get('id', x.params.id);

    if (!pessoa)
        return window.location = '../';

    var txtNome = document.getElementById('txtNome');
    var txtSobreNome = document.getElementById('txtSobreNome');
    var txtDataNascimento = document.getElementById('txtDataNascimento');
    var txtCargo = document.getElementById('txtCargo');
    
    txtNome.value = pessoa.nome;
    txtSobreNome.value = pessoa.sobreNome;
    txtDataNascimento.valueAsDate = new Date(pessoa.dataNascimento);
    txtCargo.value = pessoa.cargo

    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            pessoasController.remove(pessoa);
            window.location = '../';
        });
}