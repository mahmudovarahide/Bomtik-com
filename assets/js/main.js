$(function() {
    $("#loader").delay(500).fadeOut("slow");
    $(".header_open_toggle").click(function() {
        $(".draver").show();
        $(".draver .overlay").css("opacity", ".5");
        $(".draver .overlay").css("display", "block");
    });
    $(".button_box").click(function() {
        $(".search_open_modal").show();
    });
    $(".video_close_button").click(function() {
        $(".search_open_modal").hide();
    });
    $(".fetch_download_button_box").click(function() {
        $(this).hide();
        $(".button_group").show();
        $(".button_group").css("display", "flex");
    });
    $(".draver_close_button_box").click(function() {
        $(".draver").hide();
    });
    $(".copy_video_link").click(function() {
        $(".share_url").toggle();
        // $(".share_url").css("display", "block");
    });
    $(".message_trip_close_button").click(function() {
        $(".message_trip_section").hide();
    });
});