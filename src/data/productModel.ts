import { DataTypes, Model } from "sequelize";
import sequelize from "./database";


class Product extends Model {
    public product_id!: number;
    public product_title!: string;
    public product_price!: number;
    public product_description!: string;
    public product_image!: string;
    public product_rate!: number;
    public product_count!: number;
    public category_id!: number;
}

Product.init({
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    product_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    product_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_rate: {
        type: DataTypes.DECIMAL(3,1),
        allowNull: false
    },
    product_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName: "product",
    timestamps: false,
});

export default Product;