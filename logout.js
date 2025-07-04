document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("logoutButton").addEventListener("click", function (event) {
		event.preventDefault();
		window.location.href = 'Login.html';
	});
});