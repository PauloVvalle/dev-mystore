import { DataTypes, Model } from "sequelize";
import sequelize from "./database";

class User extends Model {
    public user_id!: number;
    public user_email!: string;
    public user_username!: string;
    public user_password!: string;
    public user_name!: string;
    public user_phone!: string;
    public user_city!: string;
    public user_street!: string;
    public user_number!: number;
    public user_cep!: string;
}

User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_street: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_cep: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false, // Desativa a criação automática de timestamps
    }
  );

export default User;