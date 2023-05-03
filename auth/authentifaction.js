const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");

	// Initialisez Firebase
var firebaseConfig = {
	apiKey: "AIzaSyBoOxLmlH9WR7si2Y0R01OM3c5I1wgnuPM",
	authDomain: "illicolove-7c904.firebaseapp.com",
	projectId: "illicolove-7c904",
	storageBucket: "illicolove-7c904.appspot.com",
	messagingSenderId: "1086957054874",
	appId: "1:1086957054874:web:4f1899c85184210e482823"
};

firebase.initializeApp(firebaseConfig);

// Obtenez l'adresse e-mail de l'utilisateur à partir de la saisie utilisateur
var email = document.getElementById('emailid').value

// Créez une instance de l'objet d'authentification Firebase
var auth = firebase.auth();

// Envoyez le lien de connexion unique à l'adresse e-mail de l'utilisateur
auth.sendSignInLinkToEmail(email, {
	url: 'https://www.upwork.com/', // URL de votre application
	handleCodeInApp: true
}).then(function() {
	// Le lien a été envoyé avec succès
	// Affichez un message à l'utilisateur pour lui indiquer qu'il doit consulter son e-mail
	alert("Un lien de connexion a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte de réception et suivre les instructions pour vous connecter.");
}).catch(function(error) {
	// Une erreur s'est produite lors de l'envoi du lien de connexion
	// Affichez un message d'erreur à l'utilisateur
	alert("Une erreur s'est produite lors de l'envoi du lien de connexion: " + error.message);
});

// Vérifiez si l'utilisateur a déjà cliqué sur le lien de connexion
if (auth.isSignInWithEmailLink(window.location.href)) {
	// Obtenez l'adresse e-mail à partir de l'URL
	var email = window.localStorage.getItem('emailForSignIn');

	// Supprimez l'adresse e-mail de l'URL
	window.localStorage.removeItem('emailForSignIn');

	// Connectez l'utilisateur avec son adresse e-mail
	auth.signInWithEmailLink(email, window.location.href)
	.then(function(result) {
		// L'utilisateur est connecté avec succès
		// Redirigez-le vers la page d'accueil de votre application
		window.location.href = 'https://au-programme.netlify.app/';
	})
	.catch(function(error) {
		// Une erreur s'est produite lors de la connexion de l'utilisateur
		// Affichez un message d'erreur à l'utilisateur
		alert("Une erreur s'est produite lors de la connexion: " + error.message);
	});
}

});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());