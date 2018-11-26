window.onload = function () {
    var $table = $('table tbody');

    empresasController.getAll()
        .forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td>' + item.categoria + '</td>';
        row += '<td>'  + item.cnpj + '</td>';
        row += '<td>' + item.funcionarios + '</td>';
        row += '<td>';
        row += '<a href="Editar?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a href="Deletar?id=' + item.id + '">Deletar</a>';
        row += '</td>';
        row += '</tr>';
        $table.append(row);
    }
}