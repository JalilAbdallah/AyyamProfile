import { Image as RNImage } from 'react-native';
import { USERS } from '../../../constants';

const Image = ({ 
  source, 
  userId, 
  type,
  postIndex = 0,
  style,
  placeholder,
  ...props 
}) => {
  let imageSource;
  
  if (source) {
    imageSource = source;
  }else if (userId && type) {
    const user = USERS.find(u => u.id === userId);
    
    if (user) {
      if (type === 'profile') {
        imageSource = user.profileImage;
      } else if (type === 'post' && user.posts && user.posts[postIndex]) {
        imageSource = user.posts[postIndex].image;
      }
    }
  }
  
  if (!imageSource && placeholder) {
    imageSource = placeholder;
  }

  return (
    <RNImage 
      source={imageSource} 
      style={style}
      resizeMode="cover"
      {...props}
    />
  );
};

export default Image;