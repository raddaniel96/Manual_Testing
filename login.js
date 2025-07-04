document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("loginButton").addEventListener("click", function (event) {
		event.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		
		fetch('https://dummyjson.com/auth/login', {
		  method: 'POST',
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({username, password})
		})
		.then(response =>response.json())
		.then(data => {
			if (data.accessToken) {
				// Save the token to sessionStorage or localStorage for future requests
				sessionStorage.setItem('authToken', data.accessToken);
				window.location.href = 'MyPage.html';
			} 
			else {
				alert('{"message":"Invalid credentials"} ');
			}
		})
		.catch(error => {
		  console.error('There was a problem with the login:', error);
		});
	});
});