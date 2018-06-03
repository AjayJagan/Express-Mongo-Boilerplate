const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 firstName: String,
 lastName: String,
 email: String,
 password: String,
 phone: Number
});

// call backs in user-controller
userSchema.statics.changePassword = function(email, password, callback) {
  return this.update({email}, { password }, callback);
}

userSchema.statics.findUserByEmail = function(email, callback) {
  return this.where({ email }, callback);
}

userSchema.statics.findAllUsers = function(callback) {
  return this.find({}, callback);
}

module.exports = mongoose.model("User", userSchema);
