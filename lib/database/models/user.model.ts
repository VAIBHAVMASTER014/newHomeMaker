import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkid: { type: "string", required: true, unique: true },
  email: { type: "string", required: true, unique: true },
  username:{type: "string", required:true, unique: true},
  firstname:{type: "string", required:true},
  lastname:{type: "string", required:true},
  photo :{type: "string", required:true}
});

const User = models.User || model('User',UserSchema)

export default User;