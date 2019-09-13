var base_url = "http://dummy.restapiexample.com/api/v1";
$(document).on('click', '#getEmployees', function() {
    $.ajax({
        type: "get", // get, post, put, delete
        url: base_url + '/employees',
        contentType: 'application/json',
        dataType: 'json',
        crossOrigin: true,
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                console.log(element);
                var row =   '<tr>' + 
                            '<td>' + element.id +'</td>' +
                            '<td>' + element.employee_name +'</td>' +
                            '<td>' + element.employee_age + '</td>' +
                            '<td>' + element.employee_salary +'</td>' +
                            '<td>' + element.profile_image +'</td>' +
                            '</tr>';
                $('#emptable').append(row);
            }
            
             
        }
    });
})

// {"id":"719","employee_name":"test","employee_salary":"123","employee_age":"23","profile_image":""}