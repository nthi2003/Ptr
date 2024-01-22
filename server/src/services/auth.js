import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hasPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))
export const registerService = ({ phone, password, name }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: { phone },
            defaults: {
                phone,
                name,
                password: hasPassword(password),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({
            id: response[0].id,
            phone: response[0].phone
        },
            process.env.SECRET_KEY, { expiresIn: '2d' }
        )
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Register is successful !': 'Phone number has already used !',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})
export const loginService = ({ phone, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { phone },
            raw : true
        })
       const isCorrePassword = response && bcrypt.compareSync(password, response.password)
        const token = isCorrePassword && jwt.sign({
            id: response.id,
            phone: response.phone
        },
            process.env.SECRET_KEY, { expiresIn: '2d' }
        )
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'login is successful !': response ? 'Password is wrong !' : 'Phone number not found !',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})