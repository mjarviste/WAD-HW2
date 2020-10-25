$(document).ready(function() {
    $.getJSON("https://private-anon-8206ed6edc-wad20postit.apiary-mock.com/profiles", function(result) {
        console.log(result)
        $.each(result, function(i, info) {
            $(".profile img").eq(i).attr("src", info.avatar);
            $(".profile p").eq(i).text(info.firstname + " " + info.lastname)

        });
    });
});