		var place = "Vadodara";
				
		$(document).ready(function(){
			alert("Works !");
			$.ajax({
        	 url: 'http://www.pontun.online/atspise_home.php?release=1',
        	 cache: false,
            success: function (response) {
				alert("Sucess");
				$('#app_home').append(response);			
			},
			error: function(XHR){
				alert(XHR.status);
			}
			
          });
		  
		}); 
