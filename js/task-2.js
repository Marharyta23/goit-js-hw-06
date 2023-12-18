const getUsersWithFriend = (users, friendName) =>
  users.filter((friends) => friends.friends.includes(friendName));
