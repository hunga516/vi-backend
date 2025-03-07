import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
})

export const UserModel = mongoose.model('User', UserSchema)

export const getUsers = () => UserModel.find()
export const getUserByUsername = (username: string) =>
    UserModel.findOne({ username })
export const getUserByEmail = (email: string) => UserModel.findOne({ email })
export const getUserBySessionToken = (sessionToken: string) =>
    UserModel.findOne({ 'authentication.sessionToken': sessionToken })
export const getUserById = (id: string) => UserModel.findById(id)
export const createUser = (user: Record<string, any>) =>
    new UserModel(user).save().then((user) => user.toObject())
export const updateUser = (id: string, newUser: Record<string, any>) =>
    UserModel.findByIdAndUpdate(id, newUser, { new: true })
export const deleteUserById = (id: string) => UserModel.findByIdAndDelete(id)
