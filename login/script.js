function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-btn');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = '🙈';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = '👁';
    }
  }
// Initialize Firebase (Use your own Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const googleSignInButton = document.getElementById('google-sign-in-btn');
  googleSignInButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("Signed in as:", user.displayName);
        alert(`Welcome, ${user.displayName}!`);
      })
      .catch((error) => {
        console.error("Error during Google Sign-In:", error);
        alert("Sign-In failed. Please try again.");
      });
  });
  
  // Password visibility toggle function
  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-btn');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.textContent = '🙈';
    } else {
      passwordInput.type = 'password';
      toggleButton.textContent = '👁';
    }
  }
    