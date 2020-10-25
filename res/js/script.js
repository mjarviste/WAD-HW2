$(document).ready(function(){
    $(".follow-button").click(function(){
        $(this).text("Followed");
        $(this).css("color", "purple")
        $(this).css("background-color", "white");

    });
  });

$(document).ready(function(){
    $.getJSON("https://private-anon-841336ddfb-wad20postit.apiary-mock.com/profiles", function(result){
        console.log(result)
        
    }
}


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