import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class ProductQuery extends Model {
    static associate(models) {
      ProductQuery.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
        onDelete: "CASCADE",
      });
    }
  }

  ProductQuery.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { isInt: { msg: "product_id must be a number" } },
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: { notEmpty: { msg: "Name is required" } },
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: { isEmail: { msg: "Valid email is required" } },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: { msg: "Message is required" } },
      },
    },
    {
      sequelize,
      modelName: "ProductQuery",
      tableName: "product_queries",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );

  return ProductQuery;
};