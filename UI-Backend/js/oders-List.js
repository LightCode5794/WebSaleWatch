// $(document).ready(function () {
//     $('#selectedColumn').DataTable({
//       "aaSorting": [],
//       columnDefs: [{
//       orderable: false,
//       targets: 3
//       }]
//     });
//       $('.dataTables_length').addClass('bs-select');
//   });

$(document).ready(function () {
  $('#orders-table').DataTable({
    pageLength: 8,
    lengthMenu: [8, 15, 20, 50, 100],
    columnDefs: [ {
      "targets": [5], 
      "searchable": false, 
      "orderable": false, 
      "visible": true
      } ]
  });
});