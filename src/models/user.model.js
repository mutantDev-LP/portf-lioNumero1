const mongoose = require("mongoose");
import { nome } from "../register/partials/script";

const userSchema = new mongoose.Schema({
  firstName: {
    nome,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 12,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
