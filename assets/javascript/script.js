document.addEventListener('DOMContentLoaded', function() {
    var elems1 = document.querySelectorAll('select');
    M.FormSelect.init(elems1);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems2 = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems2);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems3 = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems3);
});
