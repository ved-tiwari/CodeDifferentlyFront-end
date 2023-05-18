$(document).ready(function () {
    $("#submit").on("click", function () {
        //get values
        var num = $("#num").val();
        var percent = $("#per").val()/100;

        //convert to USD currency format
        var total = (num * percent).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

        //fade in effect
        $("#amount").fadeIn()
        $("#amount").html(total);
    })

})
