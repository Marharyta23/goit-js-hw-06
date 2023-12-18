const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((sex) => sex.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);
