import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class ContactMessage extends Model {}

  ContactMessage.init(
    {
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
      subject: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: { msg: "Message is required" } },
      },
    },
    {
      sequelize,
      modelName: "ContactMessage",
      tableName: "contact_messages",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );

  return ContactMessage;
};