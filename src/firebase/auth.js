import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

export async function createUser(email, password, username) {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
 
    await updateProfile (userCredential.user, { displayName: username });
    console.log("Usuario creado: ", userCredential.user);
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
}

export async function loginUser(email, password) {
  try {
    const auth = getAuth();
    // eslint-disable-next-line no-unused-vars
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log("Error al iniciar sesion", error);
    return false
  }
}