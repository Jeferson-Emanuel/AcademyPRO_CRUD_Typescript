import { Error } from 'sequelize';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dvdrental', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false
});

export default () => {
    sequelize.authenticate().then(() => {
        console.log('DB Connected.');    
    }).catch((error: Error) => {
        console.log(`Connection error: ${error}`);    
    });
};