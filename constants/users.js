export const USERS = [
  {
    id: "user_001",
    name: "abd elhalim mohsen",
    username: "@abdElhalim",
    bio: "أخشى أن يأخذ الله مي نعمة غفلت عن شكرها الحمدلله على كل النعم التي لا يناء بوفيها",
    followers: 101,
    following: 15,
    posts: 5,
    isVerified: false,
    profileImage: require("../assets/images/profiles/user-001.jpg"),
    posts: [
      {
        id: "post_001",
        image: require("../assets/images/posts/post-1.jpg"),
        likes: 7826,
        caption: "Beautiful sunset...",
      },
      {
        id: "post_002",
        image: require("../assets/images/posts/post-2.jpg"),
        likes: 742,
        caption: "Good vibes only",
      },
    ],
  },
];
