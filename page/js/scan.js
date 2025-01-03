$(document).ready(function () {
    $('#scan').on('click', function(e) {
        $(this).prop('disabled', true);
        $(this).prop('value', 'Scanning...');
        $('#scanForm').submit();
    });
});