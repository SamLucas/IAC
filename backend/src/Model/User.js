const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        tipo: DataTypes.BOOLEAN,
        descricao: DataTypes.STRING,
        lattes: DataTypes.STRING
      },
      { sequelize }
    );
  }
}

module.exports = User;
