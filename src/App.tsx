import React from "react";
import "./App.css";
import firebase from "./firebase";

function Login() {
  const [email, setEmail] = React.useState("");
  const onLoginClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: "http://localhost:3000/",
        handleCodeInApp: true
      };
      await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <header className="App-header">
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <button onClick={onLoginClick}>Login</button>
    </header>
  );
}

const Dashboard: React.FunctionComponent<{
  user: firebase.User;
  idToken: firebase.auth.IdTokenResult;
}> = ({ user, idToken }) => {
  const logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    firebase.auth().signOut();
  };
  const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();
      const files = event.target.files;
      if (!files) throw new Error("not file");
      const file = files[0];
      //const refFile = firebase.storage().ref(`category${file.name}`);
      //await refFile.put(file, {contentType: file.type, customMetadata: {}})
      console.log(file.type);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header className="App-header">
      <form>
        <label htmlFor="uid">uid</label>
        <input id="uid" type="text" defaultValue={user.uid} />
        <br />

        <label htmlFor="identifier">identifier</label>
        <input
          id="identifier"
          type="text"
          defaultValue={user.email || user.phoneNumber || user.uid}
        />
        <br />

        <label htmlFor="token">token</label>
        <input id="token" type="text" defaultValue={idToken.token} />
        <br />

        <label htmlFor="roles">roles</label>
        <input id="roles" type="text" defaultValue={idToken.claims["roles"]} />
        <br />
        <br />
        <label htmlFor="file">file</label>
        <input id="file" type="file" onChange={onChangeFile} />
        <br />
        <br />
        <button onClick={logout}>logout</button>
      </form>
    </header>
  );
};

function App() {
  const [user, setUser] = React.useState<firebase.User | null>(null);
  const [
    idToken,
    setIdToken
  ] = React.useState<firebase.auth.IdTokenResult | null>(null);
  React.useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let mEmail = window.localStorage.getItem("emailForSignIn");
      if (!mEmail) {
        mEmail = window.prompt("Please provide your email for confirmation");
      }
      firebase
        .auth()
        .signInWithEmailLink(mEmail!!, window.location.href)
        .then(function(result) {
          window.localStorage.removeItem("emailForSignIn");
          console.log(result.credential);
        })
        .catch(function(error) {
          console.error(error.message);
        });
    }
    const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const userToken = await user.getIdTokenResult();
        setIdToken(userToken);
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      {user === null && <Login />}
      {user !== null && idToken !== null && (
        <Dashboard user={user} idToken={idToken} />
      )}
    </div>
  );
}

export default App;
