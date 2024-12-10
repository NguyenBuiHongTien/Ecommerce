import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true,
  },
  {
    name: "Soli",
    email: "Soli@example.com",
    password: bcrypt.hashSync("Soli", 10),
  },
];

export default users;
