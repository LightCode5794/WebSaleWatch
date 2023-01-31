$(document).ready(function () {
    $('#Categories-table').DataTable({
      pageLength: 8,
      lengthMenu: [8, 15, 20, 50, 100],
      columnDefs: [ {
        "targets": [3], 
        "searchable": false, 
        "orderable": false, 
        "visible": true
        } ]
    });
  });