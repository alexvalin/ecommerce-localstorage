window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Pessoas/Editar');
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
    txtCargo = pessoa.cargo;

    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            pessoa.nome = txtNome.value;
            pessoa.sobreNome = txtSobreNome.value;
            pessoa.dataNascimento = txtDataNascimento.valueAsNumber;
            pessoa.cargo = txtCargo.value;
            pessoasController.update(pessoa);
            window.location = '../';
        });
}