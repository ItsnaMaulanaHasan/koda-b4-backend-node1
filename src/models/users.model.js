let users = [
  {
    id: 1,
    fullName: "Itsna Maulana Hasan",
    email: "hasanmaulana453@gmail.com",
    password: "12345",
  },
  {
    id: 2,
    fullName: "Budi",
    email: "budi@mail.com",
    password: "12345",
  },
  {
    id: 3,
    fullName: "Budu",
    email: "budu@mail.com",
    password: "12345",
  },
  {
    id: 4,
    fullName: "Budo",
    email: "budo@mail.com",
    password: "12345",
  },
  {
    id: 5,
    fullName: "Bude",
    email: "bude@mail.com",
    password: "12345",
  },
  {
    id: 6,
    fullName: "Buda",
    email: "buda@mail.com",
    password: "12345",
  },
];

export function addUser(data) {
  data = { id: users.length + 1, ...data };
  users.push(data);
}

export function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}
