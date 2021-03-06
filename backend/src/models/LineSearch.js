import { Model, DataTypes } from "sequelize";

class LineSearch extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        texto: DataTypes.STRING,
        professores: DataTypes.STRING
      },
      { sequelize, tableName: "line_search" }
    );
  }

  static associate({ models }) {
    this.hasMany(models.Paper, {
      foreignKey: "line_id",
      as: "paper"
    });
  }
}

module.exports = LineSearch;
