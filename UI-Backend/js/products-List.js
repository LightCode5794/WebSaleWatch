$(document).ready(function () {
  $('#products-table').DataTable({
    pageLength: 5,
    lengthMenu: [5, 10, 20, 50, 100]
  });
});