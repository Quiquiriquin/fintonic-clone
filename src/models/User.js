import { Model, Sequelize } from 'sequelize';

export default class User extends Model {};
User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
}, { sequelize });
