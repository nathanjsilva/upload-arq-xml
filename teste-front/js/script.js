$(function()
{
    $('form').submit(function(e)
    {
        e.preventDefault();

        var formData = new FormData();

        formData.append('xml', $('#file').prop('files')[0]);

          $.ajax({
            url: '../arqXml/index.php',
            data: formData,
            type: 'post',
            success: function(response)
            {
                console.log(response)
            },
            processData: false,
            cache: false,
            contentType: false
          });
    });
});