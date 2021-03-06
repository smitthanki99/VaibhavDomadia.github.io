(function() {
      // Initialize Firebase
      const config = {
            apiKey: "AIzaSyAs7J4hlBXsgyfDB--BqVYzHj9fjQYWls8",
            authDomain: "to-do-dba8b.firebaseapp.com",
            databaseURL: "https://to-do-dba8b.firebaseio.com",
            projectId: "to-do-dba8b",
            storageBucket: "to-do-dba8b.appspot.com",
            messagingSenderId: "364465222352"
      };
      firebase.initializeApp(config);





      

      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: 'tasks.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>');
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);




      /*const EmailInput = document.getElementById('email');
      const PasswordInput = document.getElementById('password');
      const LogInButton = document.getElementById('login');
      const SignUpButton = document.getElementById('signup');
      const LogOutButton = document.getElementById('logout');

      // Login Event
      LogInButton.addEventListener('click', e => {
            //Get Email and Password Values;
            const email = EmailInput.value;
            const password = PasswordInput.value;
            const auth = firebase.auth();

            //Sign In
            const promise = auth.signInWithEmailAndPassword(email, password);
            promise.catch(e => console.log(e.message));
      })

      //SignUp Event
      SignUpButton.addEventListener('click', e => {
            //Get Email and Password Values;
            const email = EmailInput.value;
            const password = PasswordInput.value;
            const auth = firebase.auth();

            //Sign In
            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.catch(e => console.log(e.message));
      })*/

      // Realtime Listener for Authentication
      firebase.auth().onAuthStateChanged(User => {
            if(User) {
                  console.log(User);
                  window.location = "tasks.html"
            }
            else {
                  console.log("Not Signed In");
            }
      })
}());