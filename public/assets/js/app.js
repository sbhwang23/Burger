$(document).ready(function(){
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        console.log('id: ', id)
        // var devoured = $(this).data("devoured");
        var devoured = $(this).data('value');
        console.log('data value: ', $(this).data('value'))
        var newDevouredState = {
          devoured: devoured
        };
        console.log('THIS IS WORKING')
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured: ", devoured);
            window.location.replace('/');
          }
        );
      });
})
