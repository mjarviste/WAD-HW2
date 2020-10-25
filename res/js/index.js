$(document).ready(function() {
    $.getJSON("https://private-anon-8f6b2300ed-wad20postit.apiary-mock.com/posts", function(result) {
        console.log(result)
        var img_counter = 0;
        var video_counter = 0;
        $.each(result, function(i, info) {
            $(".post-author img").eq(i).attr("src", info.author.avatar);
            $(".author-name").eq(i).text(info.author.firstname + " " + info.author.lastname)
            $(".date").eq(i).text(info.createTime);
            if (!$.isEmptyObject(info.media)) {
                if (info.media.type === "image") {
                    $(".post-image img").eq(img_counter).attr("src", info.media.url);
                    img_counter += 1;
                } else if (info.media.type === "video") {
                    $(".post-image video").eq(video_counter).attr("src", info.media.url);
                    video_counter += 1;
                }
            }
            $(".post-title h3").eq(i).text(info.text);
        });
    });
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