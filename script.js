$(document).ready(function() {
    // Click to toggle section content
    $("h2").click(function() {
        $(this).next().slideToggle();
    });
});
