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