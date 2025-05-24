export const formatLikes = (likes) => {
  if (likes >= 1000) {
    return (likes / 1000).toFixed(0) + "k";
  }
  return likes.toString();
};
