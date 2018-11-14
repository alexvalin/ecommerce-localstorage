function Pessoa(o) {
    this.id = o.id || guid();
    o = o || {};
    this.nome = o.nome;
    this.sobreNome = o.sobreNome;
    this.dataNascimento = o.dataNascimento;
    this.cargo = o.cargo; 
}

var pessoasController = controller('pessoas', Pessoa);