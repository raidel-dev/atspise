var place = "Vadodara";

$(document).ready(function () {
	alert("Works !");

	$.ajax({
		url: 'https://www.pontun.online/atspise_home.php?release=1',
		success: function (response) {
			alert("Sucess");
			navigator.geolocation.getCurrentPosition(
				onSuccess, onError, { timeout: 1000, enableHighAccuracy: true }
			)
			$('#app_home').append(response);
		},
		error: function (XHR) {
			alert(XHR.status);
		}

	});

});
var onSuccess = function (position) {
	alert('Lat: ' + position.coords.latitude + '\n' +
		'Lng: ' + position.coords.longitude + '\n');
}

// onError Callback receives a PositionError object
//
function onError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}






