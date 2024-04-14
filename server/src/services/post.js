import { where } from 'sequelize'
import db from '../models'
const { Op } = require("sequelize");
import {v4 as generateId} from 'uuid'
import generateCode from '../ultis/generateCode'
import moment from 'moment'
import generateDate from '../ultis/generateData';
export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})
export const getPostsLimitService = (page, { limitPost, order, ...query } = {}, { priceNumber, areaNumber } = {}) => new Promise(async (resolve, reject) => {
    try {
        let offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const queries = { ...query };
        const limit = limitPost ? +limitPost : +process.env.LIMIT;

        if (priceNumber) queries.priceNumber = { [Op.between]: priceNumber };
        if (areaNumber) queries.areaNumber = { [Op.between]: areaNumber };
        if (order) queries.order = [order];

        const response = await db.Post.findAndCountAll({
            where: queries,
            raw: true,
            nest: true,
            offset: offset * limit,
            limit: limit,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        });

        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to fetch posts.',
            response
        });
    } catch (error) {
        reject(error);
    }
});


export const getNewPostService = () => new Promise(async (resolve, reject) => {
 
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            offset: 0,
            order: [['createdAt', 'DESC']],
            limit: +process.env.LIMIT,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
            ],
            attributes: ['id', 'title', 'star', 'createdAt']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})
export const createNewPostService = (body , userId) => new Promise(async (resolve, reject) => {
    try {
        const attributesId = generateId();
        const imagesId = generateId();
        const overviewId = generateId();
        const labelCode = generateCode(body.label);
        const hashtag = `#${Math.floor(Math.random() * Math.pow(10,6))}`;
        const currentDate = generateDate();
        
        await db.Post.create({
            id: generateId(),
            title: body.title || null,
            labelCode,
            address: body.address || null,
            attributesId,
            categoryCode: body.categoryCode ,
            description: JSON.stringify(body.description) || null,
            userId,
            overviewId,
            imagesId,
            areaCode: body.areaCode || null,
            priceCode: body.priceCode || null,
            provinceCode: body?.province?.includes('Thành phố') ? generateCode(body?.province?.replace('Thành phố', '')) : generateCode(body?.province?.replace('Tỉnh', '')) || null,
            priceNumber: body.priceNumber,
            areaNumber: body.areaNumber,
        });

        await db.Attribute.create({
            id: attributesId,
            price: +body.priceNumber < 1 ? `${body.priceNumber * 1000000} đồng / tháng` : `${body.priceNumber} triệu/tháng`,
            acreage: `${body.areaNumber} m2`,
            published: moment().format('DD/MM/YYYY'),
            hashtag
        });

        await db.Image.create({
            id: imagesId,
            image: JSON.stringify(body?.images)
        });

        await db.Overview.create({
            id: overviewId,
            code: hashtag,
            area: body.label,
            type: body?.category,
            target: body?.target,
            bonus: 'Tin thường',
            created: currentDate.today,
            expired: currentDate.expireDay,
        });

        await db.Province.findOrCreate({ 
            where: {
                [Op.or]: [
                    { value: body?.province?.includes('Thành phố') ? body.province.replace('Thành phố', '') : null },
                    { value: body?.province?.includes('Tỉnh') ? body.province.replace('Tỉnh', '') : null }
                ]
            },
            defaults: {
                code: body?.province?.includes('Thành phố') ? generateCode(body?.province?.replace('Thành phố', '')) : generateCode(body?.province?.replace('Tỉnh', '')),
                value: body?.province?.includes('Thành phố') ? body.province.replace('Thành phố', '') : body.province.replace('Tỉnh', '')
            }
        });

        await db.Label.findOrCreate({ 
            where: {
                code: labelCode
            },
            defaults: {
                code: labelCode,
                value: body.label,
            }
        });

        resolve({
            err: 0,
            msg: 'OK',
        });

    } catch (error) {
        reject(error);
    }
});
export const getPostsLimitAdminService = (page, id, query) => new Promise(async (resolve, reject) => {
    try {
        let offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const queries = { ... query, userId: id }
        const response = await db.Post.findAndCountAll({
            where: queries ,
            raw: true,
            nest: true,
            offset: offset * +process.env.LIMIT,
            limit: +process.env.LIMIT,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
                { model: db.Overview, as: 'overviews'},
            ],
            // attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting posts is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})
export const updatePost = ({ postId, overviewId, imagesId , attributesId ,...body }) => new Promise(async (resolve, reject) => {
    try {
        const labelCode = generateCode(body.label)
        await db.Post.update({
            title: body.title || null,
            labelCode,
            address: body.address || null,

            categoryCode: body.categoryCode ,
            description: JSON.stringify(body.description) || null,
            areaCode: body.areaCode || null,
            priceCode: body.priceCode || null,
            provinceCode: body?.province?.includes('Thành phố') ? generateCode(body?.province?.replace('Thành phố', '')) : generateCode(body?.province?.replace('Tỉnh', '')) || null,
            priceNumber: body.priceNumber,
            areaNumber: body.areaNumber,
        }, {
            where: {id: postId}
        });

        await db.Attribute.update({

            price: +body.priceNumber < 1 ? `${body.priceNumber * 1000000} đồng / tháng` : `${body.priceNumber} triệu/tháng`,
            acreage: `${body.areaNumber} m2`,
        }, {
            where: {id : attributesId}
        });

        await db.Image.update({
            image: JSON.stringify(body?.images)
        }, {
            where: {id : imagesId }
        });

        await db.Overview.update({
            area: body.label,
            type: body?.category,
            target: body?.target,
            bonus: 'Tin thường',
        }, {
            where: {id: overviewId}
        });

        await db.Province.findOrCreate({ 
            where: {
                [Op.or]: [
                    { value: body?.province?.includes('Thành phố') ? body.province.replace('Thành phố', '') : null },
                    { value: body?.province?.includes('Tỉnh') ? body.province.replace('Tỉnh', '') : null }
                ]
            },
            defaults: {
                code: body?.province?.includes('Thành phố') ? generateCode(body?.province?.replace('Thành phố', '')) : generateCode(body?.province?.replace('Tỉnh', '')),
                value: body?.province?.includes('Thành phố') ? body.province.replace('Thành phố', '') : body.province.replace('Tỉnh', '')
            }
        });

        await db.Label.findOrCreate({ 
            where: {
                code: labelCode
            },
            defaults: {
                code: labelCode,
                value: body.label,
            }
        });
        resolve({
            err: 0,
            msg: 'Updated',
        })

    } catch (error) {
        reject(error)
    }
})
export const deletePost = (postId) => new Promise(async (resolve, reject) => {
    try {
      
        const response = await db.Post.destroy({
            where: {id :postId} 
            
        })
        resolve({
            err: response > 0 ? 0 : 1,
            msg: response > 0 ? 'Delete' : 'No post delete.',
            response
        })

    } catch (error) {
        reject(error)
    }
})