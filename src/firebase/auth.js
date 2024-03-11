import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { toast } from 'sonner';

export async function createUser(email, password, username) {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
 
    await updateProfile (userCredential.user, { displayName: username });
    toast.success('Usuario Creado con exito');
    return true;
  } catch (error) {
    toast.error("Algo salio mal, intentelo de nuevo");
    return false;
  }
}

export async function loginUser(email, password) {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    toast.error("Verfique sus credenciales");
    return false
  }
}

export async function currentUser(user) {
  try {
    const auth = getAuth();
    user = auth.currentUser

    if (user) {
      const nameUser = user.displayName
      return nameUser
    }
  } catch (error) {
    console.log("No hay un usuario actual");
  }
}