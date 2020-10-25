$(document).ready(function() {
    $(".like-button", ".like-button-liked").on("click", function() {
        $(this).css("background-color", "red")
    });

    $(document).on("click", ".like-button", function() {
        $(this).addClass("liked")
    })

    $(document).on("click", ".liked", function() {
        $(this).removeClass("liked")
    })

});