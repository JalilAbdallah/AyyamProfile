import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Image from "../Image";

const ProfilePicture = ({ user, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={user.profileImage}
        style={styles.profileImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ProfilePicture;
