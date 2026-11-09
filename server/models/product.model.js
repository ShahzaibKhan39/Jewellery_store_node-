import { Model, DataTypes } from "sequelize";

export const CATEGORIES = [
  "Rings",
  "Necklaces",
  "Earrings",
  "Bracelets and Bangles",
  "Chains and Pendants",
  "Sets",
];

export default (sequelize) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.ProductQuery, {
        foreignKey: "product_id",
        as: "queries",
        onDelete: "CASCADE",
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: { notEmpty: true },
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isIn: {
            args: [CATEGORIES],
            msg: `Category must be one of: ${CATEGORIES.join(", ")}`,
          },
        },
      },
      material: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      purity: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      weight_grams: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: true,
      },
      // NULL means "Price on request"
      price: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );

  return Product;
};