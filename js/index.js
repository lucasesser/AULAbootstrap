$(document).ready(
    function(){
        Getuser(),
        alert("pagina carregada!")
    }
)

$("#botao").click(
    function(){
    Postuser()
    }
)

function Getuser(){
    $.ajax({
        type:'GET',
        url:'http://192.168.10.94:9000/users',
        success: function(data){
            $.each(data, function(i, user){
                $("#tabela_user").append(
                    '<tr> ' +
                    '    <td>'+i+'</td>'+
                    '    <td>'+user.guuid+'</td>'+
                    '    <td>'+user.name+'</td>'+
                    '    <td>'+user.cpf+'</td>'+
                    '    <td>'+user.occupation+'</td>'+
                    '</tr>'
                )
            })
        },
        error: function(data){
            console.log(data);
        }
    })
}

function Postuser(){
    var User = {
        name : document.getElementById("#input_nome"),
        cpf : document.getElementById("#input_cpf"),
        cargo : document.getElementById("#input_cargo")
    }
    $.ajax({
        type:'POST',
        url:'http://192.168.10.85:9000/users',
        contentType:'application/json',
        data: JSON.stringify(User), 
        success: function(data){
            $("#tabela_user").append(
                '<tr> ' +
                    '    <td>'+i+'</td>'+
                    '    <td>'+user.guuid+'</td>'+
                    '    <td>'+user.name+'</td>'+
                    '    <td>'+user.cpf+'</td>'+
                    '    <td>'+user.cargo+'</td>'+
                    '</tr>'
            )
        },
        error: function(data){
            alert("erou"),
            console.log(data)
        }
    })
}