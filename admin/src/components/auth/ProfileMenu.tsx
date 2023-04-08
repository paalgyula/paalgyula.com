import { Avatar, Button } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useFirebase } from "../../FirebaseProvider";

const ProfileMenu = () => {
  const app = useFirebase();

  const user = getAuth(app.firebaseApp).currentUser;

  return user ? (
    <Avatar />
  ) : (
    <Button color="secondary" variant="contained">
      Login
    </Button>
  );
};

export default ProfileMenu;
