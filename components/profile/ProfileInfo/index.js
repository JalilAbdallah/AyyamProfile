import { View, Text } from "react-native";
import { styles } from "./styles";
import ProfilePicture from "../../common/ProfilePicture";
import ProfileStats from "../ProfileStats";
import ActionButtons from "../../common/ActionButtons";

const ProfileInfo = ({ user, onProfilePicturePress }) => {
  return (
    <View style={styles.container}>

      <View style={styles.topRow}>
        <View style={styles.leftSection}>
          <ProfileStats user={user} />
          <ActionButtons user={user} />
        </View>
        <ProfilePicture user={user} onPress={onProfilePicturePress} />
      </View>

      {user.bio && (
        <View style={styles.bioSection}>
          <Text style={styles.bioText}>{user.bio}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileInfo;
