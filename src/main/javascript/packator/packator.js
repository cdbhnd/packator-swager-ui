$(function () {
    'use strict';

    $('#api_select').change(function() {
        var selectedApi = $('#api_select').val();
        $('#input_baseUrl').val(selectedApi);
        $('#explore').click();
    });
});