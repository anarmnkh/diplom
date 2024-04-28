// models/user.js

import { ObjectId } from 'mongodb';

export default function UserModel(db) {
  const users = db.collection('users');

  async function createUser(userData) {
    const result = await users.insertOne(userData);
    return result.insertedId;
  }

  async function getUserByEmail(email) {
    return await users.findOne({ email });
  }

  return {
    createUser,
    getUserByEmail,
  };
}
