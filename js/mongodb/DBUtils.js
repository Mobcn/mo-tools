import mongoose from 'mongoose';
import moment from 'moment';

/** MongoDB数据库URI */
const MONGODB_URI = '';

/**
 * 数据库工具
 */
const DBUtils = {
    /**
     * 连接数据库
     */
    connect: async () => {
        if (!process.env.MONGODB_URI) {
            throw new Error('please set env MONGODB_URI');
        }
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    },

    /**
     * 创建模型
     *
     * @param {string} collection 集合名
     * @param {object} construct 模型结构
     * @returns
     */
    createModel: (collection, construct) => {
        let model = mongoose.models[collection];
        if (!model) {
            const schema = new mongoose.Schema(construct);
            // 时间格式化设置
            for (const key in construct) {
                const value = construct[key];
                if (value === Date || value?.type === Date) {
                    schema.path(key).get((date) => date && moment(date).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'));
                }
            }
            schema.set('toObject', { getters: true });
            schema.set('toJSON', { getters: true });
            model = mongoose.model(collection, schema);
        }
        return model;
    }
};

// 连接数据库
mongoose.set('strictQuery', true);
DBUtils.connect();

/** 连接数据库 */
export const connectDB = DBUtils.connect;

/** 创建模型 */
export const createModel = DBUtils.createModel;

export default DBUtils;
