$(document).ready(function () {
    $("#submit").on("click", function () {
        //get values
        var value = $("#value").val();

        $("#warning").fadeOut();
        $("#items").css("text-align: left;")
        $("#list").append(`<li>${value}</li>`);

    })

})
