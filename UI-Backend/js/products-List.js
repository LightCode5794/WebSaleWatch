$(document).ready(function () {
  $('#products-table').DataTable({
    pageLength: 5,
    lengthMenu: [5, 10, 20, 50, 100],
    columnDefs: [ {
      "targets": [5], 
      "searchable": false, 
      "orderable": false, 
      "visible": true
      } ]
  });
});