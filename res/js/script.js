$(document).ready(function() {

    $(document).on("click", ".like-button", function() {
        $(this).addClass("liked")
    })

    $(document).on("click", ".liked", function() {
        $(this).removeClass("liked")
    })

    $(document).on("click", ".follow-button", function() {
        $(this).addClass("followed")
        $(this).text("Followed")

    })

    $(document).on("click", ".followed", function() {
        $(this).removeClass("followed")
        $(this).text("Follow")
    })
});
function show_hide() {
    var click = document.getElementById("drop-content");
    if(click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
}
$(document).ready(function() {
    $.getJSON("https://private-anon-0432d73f9b-wad20postit.apiary-mock.com/users/1", function(info) {
        console.log(info)
        $(".dropdown-button img").attr("src", info.avatar);
        $("#drop-content h1").text(info.firstname + " " + info.lastname)
        $("#drop-content p").text(info.email)
    });
});