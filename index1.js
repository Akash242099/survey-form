
window.onload = function () {
  // 1
  
  //   function myFunction() {
  //     var x = document.getElementById("myText").value;
  //     document.body.style.background = x;
  //   }

  //*******// 3

  // $("#my_button").click(function () {
  //   $("body").css("background-color", $("#myText").val());
  //   $("#myText").css("background-color", $("#myText").val());
  // });

  //*******// 4

  // var color=["red","green","yellow","blue","black","brown","orange","pink","purple"];
  // $.each(color, function(i, value) {
  //   $('#select_color')
  //        .append($('<option>', { color : color[i] })
  //        .text(color[i]));
  // });
  // $('#select_color').click(function(){
  //     $('#my_div').css('background-color',this.value);
  //   });

  // var output = [];

  // $.each(selectValues, function(key, value){
  //   output.push('<option value="'+ key +'">'+ value +'</option>');
  // });
  // $('#mySelect').html(output.join(''));


 //5

  // var i=0;
  // var timer;
  // var start =function (){
  //     var get_div=document.body;
  //     var bg_color=["red","green","yellow","blue","black","brown","orange","pink","purple"];
  //     get_div.style.backgroundColor=bg_color[i];
  // //     i=(i+1)%bg_color.length;
  // // // }
  // function changeColor(){
  //     timer=setInterval(start,1000);
  // }
  // function stopChange(){
  //     clearInterval(timer);
  //     var pls_stp=document.body;
  //     pls_stp.style.backgroundColor="white";
  // }

//6

  $("#sname_error_message").hide();
  $("#semail_error_message").hide();
  $("#snumber_error_message").hide();
  $("#stext_error_message").hide();
  var error_name = -1;
  var error_email = -1;
  var error_number = -1;
  $("#my_button").click(function (){
    check_sname();
    check_semail();
    check_snumber();
    check_text();
    res();
  });
 

  let cname=false,cemail=false,ctext=false,cphno=false;
  function check_text() {
    var stext1 = $("#sname").val();
    if (stext1 !== '') {
      ctext=true;
      $("#sname_error_message").hide();
      $("#sname").css("border", "2px solid green");
    }
    else {
      $("#sname_error_message").html("please write some text")
      $("#sname_error_message").show();
      $("#sname").css("border", "2px solid red");
      error_sname = 1;
    }
  }
  function check_sname() {
    var pattern = /^[a-zA-Z]*$/;
    var sname1 = $("#sname").val();
    if (pattern.test(sname1) && sname1 !== '') {
      cname=true;
      $("#sname_error_message").hide();
      // $("#sname").css("border", "2px solid green");

      $("#sname").addClass("uk-form-success").removeClass("uk-form-danger");
    }
    else {
      $("#sname_error_message").html("invalid name")
      $("#sname_error_message").show();
      // $("#sname").css("border", "2px solid red");
      $("#sname").addClass("uk-form-danger").removeClass("uk-form-success");
      error_sname = 1;
    }
  }
  function check_semail() {
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var semail1 = $("#semail").val();
    if (pattern.test(semail1) && semail1 !== '') {
      cemail=true;
      $("#semail_error_message").hide();
      $("#semail").css("border", "2px solid green");
    }
    else {
      $("#semail_error_message").html("invalid email id")
      $("#semail_error_message").show();
      $("#semail").css("border", "2px solid red");
      error_semail = 1;
    }
  }
  function check_snumber() {
    var pattern = /^[0-9\s]*$/;
    var snumber1 = $("#snumber").val();
    if (pattern.test(snumber1) && snumber1 !== '') {
      cphno=true;
      $("#snumber_error_message").hide();
      $("#snumber").css("border", "2px solid green");
    }
    else {
      $("#snumber_error_message").html("invalid phone number")
      $("#snumber_error_message").show();
      $("#snumber").css("border", "2px solid red");
      error_snumber = 1;
    }
  }
  $("#my_cancle").click(function (){
    $("#sname_error_message").hide();
    $("#semail_error_message").hide();
    $("#snumber_error_message").hide();
    $("#stext_error_message").hide();
    // remove_name();
    });
  $("#my_cancle").click(function (){
       $("#sname").val('');
       $("#semail").val('');
       $("#snumber").val('');
    });
  $("#my_cancle").click(function (){
    $(".text3").val('');
    $(".text3").css("border","");
    $("#sname").css("border","");
    $("#semail").css("border","");
    $("#snumber").css("border","");
    });
  function remove_name() {  
    $("#sname_error_message").hide();
    // $("#sname").html('');
    $("#sname").fadeout(1000);
    $("#sname").css.remove();
  }
$('#inp').empty()
    $('#wiki').empty()
    $('#wiki').text('you are good')
    $('#wiki').remove()

function res()
{
    if(cname===true && cemail===true && ctext==true  && cphno==true)
{
    alert("thank you for your valuable time");
}

else
{
    alert("please fill correctly");
}
}
}





