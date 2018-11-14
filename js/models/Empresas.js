function Empresas(o) {
    this.id = o.id || guid();
    o = o || {};
    this.nome = o.nome;
    this.descricao = o.descricao;
    this.cnpj = o.cnpj;
    this.funcionarios = o.funcionarios;
    this.categoria = o.categoria || "";
}

var empresasController = controller('empresas', Empresas);