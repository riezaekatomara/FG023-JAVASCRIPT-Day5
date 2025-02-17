const account = {
  id: 1,
  username: "riezaekatomara",
  password: "sandi_lama",
};

function updatePassword(account, newPassword) {
  return { ...account, password: newPassword };
}

const updateAccount = updatePassword(account, "sandi_baru");

const { username, password } = updateAccount;
console.log(`Username = ${username}, Password = ${password}`);
