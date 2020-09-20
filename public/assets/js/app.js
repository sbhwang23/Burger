$(document).ready(function(){
    $('.change-devour').on('click', function(event) {
        const id = $(this).data('id');
        // console.log('id: ', id)
        const devoured = $(this).data("devoured");

        const newDevouredState = {
          devoured: devoured
        };
        console.log('devoured: ', devoured)
        $.ajax('/api/burgers/' + id, {
          type: 'PUT',
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured: ", devoured);
            window.location.replace('/');
          }
        );
      });
})
