$(document).ready(function(){
   
    var csrfToken = $("input[name=csrfmiddlewaretoken]").val();
    var mainUrl = $('#createTaskForm').data('url');

    $('#createButton').click(function()
    {
        var serializedData = $("#createTaskForm").serialize();

        $.ajax({
            url: mainUrl,
            data: serializedData,
            type: 'post',
            success: function(response) {
                    $('#taskList').append(
                        '<div class="card mb-1" id="taskCard" data-id="'+response.task.id+'"><div class="card-body">'+
                        response.task.title +
                        '<button type="button" class="close float-right">'+
                        '<span aria-hidden="true">&times;</span></button></div></div>'
                    )

                    $('#createTaskForm')[0].reset();
                },
                
            });
    });

    $("#taskList").on('click','.card',function() {
        var dataId = $(this).data('id');

        $.ajax({ 
            url: mainUrl + dataId + '/completed/',
            data: {
                csrfmiddlewaretoken: csrfToken,
                id: dataId
            },
            type: 'post',
            success: function() {
                hideDownCard(dataId);
            }


            

            });

    }).on('click', 'button.close',function(event) {
      event.stopPropagation();
      var dataId = $(this).data('id');
      //alert(dataId);

    });




});


function hideDownCard(dataId)
{
    var cardItem = $('#taskCard[data-id="'+ dataId +'"]');
    cardItem.css('text-decoration','line-through').hide().slideDown();
    $('#taskList').append(cardItem);
}