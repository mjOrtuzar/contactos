$(document).ready(function(){
    //abrir modal
    $("#btnadd").on("click",function(){
        $("#modal").addClass("show-modal");
    });
    function saveContact(){
        var nameInput = $("#name-input").val();
        var cellInput = $("#cellph-input").val();
        var emailInput = $("#email-input").val();

        $("#contact").append("<div id='nameContact'" + "class='contact col-md-4 panel bg-white'>" +
            "<h2>" + nameInput + "</h2>" +
            "<h4>" + emailInput + "</h4>" +
            "<p>" + cellInput + "</p>" +
            "<button class='float-right btn btn-secondary'>" + "<i class='fa fa-trash-o' aria-hidden='true'>"+"</i>"+
            "</button>"+"</div>");
    };
});

