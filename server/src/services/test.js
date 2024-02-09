import db from '../models'

// GET ALL PROVINCE
export const getTestSerivce = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Test.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get test.',
            response
        })
    } catch (error) {
        reject(error)
    }
})