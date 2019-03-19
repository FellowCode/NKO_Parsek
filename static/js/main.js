$(document).ready(function () {
    var tz = $('#tz-info').html();
    if (tz !== Intl.DateTimeFormat().resolvedOptions().timeZone)
        $.post('/set-timezone/', {'tz_info': Intl.DateTimeFormat().resolvedOptions().timeZone})
});
