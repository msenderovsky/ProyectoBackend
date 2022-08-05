const bcrypt= require('bcrypt')
//import bcrypt from 'bcrypt'

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password)