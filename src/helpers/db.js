import Sequelize from 'sequelize';

module.exports = () => {
  const host = 'localhost';
  const dbName = 'fintonic_test';
  const user = 'root';
  const pass = 'password';

  const sequelize = new Sequelize(dbName, user, pass, {
      host,
      dialect: 'mysql',
      define: {
          underscored: true,
          timestamps: true,
      }
  });

  sequelize.authenticate()
      .then( () => {
          console.log('Connection has been stablished successfully');
      })
      .catch( err => {
          console.error('Unable to connect to database: ', err);
      });
  global.sequelize = sequelize;
};
