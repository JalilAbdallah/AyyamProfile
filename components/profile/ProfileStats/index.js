import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const StatItem = ({ count, label, onPress }) => (
  <TouchableOpacity
    style={styles.statItem}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={styles.statCount}>{count}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </TouchableOpacity>
);

const ProfileStats = ({ user }) => {
  return (
    <View style={styles.container}>
      <StatItem count={user.following} label="يتابع" />
      <StatItem count={user.followers} label="متابعين" />
      <StatItem count={user.posts.length} label="منشورات" />
    </View>
  );
};

export default ProfileStats;
