const USERS = {
  manager: {
    id: 1,
    username: "manager",
    fullName: "System Manager",
    role: "manager",
    password: "mgr2024",
  },
  staff: {
    id: 2,
    username: "staff",
    fullName: "Staff Member",
    role: "staff",
    password: "staff2024",
  },
};

const authProvider = {
  login: ({ username, password }) => {
    const user = USERS[username];
    if (!user || user.password !== password)
      return Promise.reject("Invalid credentials");

    const { password: _pw, ...identity} =user;
    localStorage.setItem("auth", JSON.strigify(identity));

    return Promise.resolve();

};

logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },