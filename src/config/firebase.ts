const config = {
  apiKey: "AIzaSyC77ERhmeILOWxg2TlGHsdK1Pt8am55DpQ",
  authDomain: "basic-web-92b59.firebaseapp.com",
  projectId: "basic-web-92b59",
  storageBucket: "basic-web-92b59.appspot.com",
  messagingSenderId: "189806558915",
  appId: "1:189806558915:web:cfc638c5ef6a31512d2c76",
  measurementId: "G-2W0P55651H",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return config;
  }
}
