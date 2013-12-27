$(document).ready(function(){
  $("button").click(function(){
    $.post("postcheck.php",
    {
      name:$("#name").val(),
      city:$("#city").val()
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    }
	
	);
	
	return false;
  });
});
