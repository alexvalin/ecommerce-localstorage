window.onload = function () {
    var table = $('table tbody');

    produtosController.getAll()
        .forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td>' + item.categoria + '</td>';
        row += '<td> R$ ' + item.preco + '</td>';
        row += '<td>';
        row += '<a href="Editar?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a href="Deletar?id=' + item.id + '">Deletar</a>';
        row += '</td>';
        row += '</tr>';
        $table.append(row);
    }
}