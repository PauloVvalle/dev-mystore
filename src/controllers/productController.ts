import { Request, Response } from "express";
import Product from "../data/productModel";
import fileUpload from "../middlewares/fileUploadMiddleware";

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        fileUpload.single('productImage')(req, res, async (err: any) => {
            if(err){
                console.error('Error ao fazer upload da imagem: ', err)
                res.status(500).json({ error: 'Erro ao fazer upload da imagem'})
                return;
            }
            
            let { product_title, product_price, product_description, product_rate, product_count, category_id } = req.body;
            const product_image = req.file ? req.file.filename : '';

            // Validação de dados
            if (!product_title) {
                res.status(400).json({ error: 'Por favor, forneça o título do produto.' });
                return;
            }

            if (!product_price) {
                const product_price = 0;
                res.status(400).json({ error: 'Por favor, forneça o preço do produto.' });
                return product_price;
            }

            if (!product_description) {
                res.status(400).json({ error: 'Por favor, forneça a descrição do produto.' });
                return;
            }

            if (!product_rate) {
                 product_rate = 0;
            }

            if (!product_count) {
                const product_count = 0;
                res.status(400).json({ error: 'Por favor, forneça a quantidade do produto.' });
                return product_count;
            }

            if (!category_id) {
                res.status(400).json({ error: 'Por favor, forneça a categoria do produto.' });
                return;
            }

            const newProduct = await Product.create({
                product_title, 
                product_price, 
                product_description, 
                product_rate, 
                product_count, 
                category_id,
                product_image,
            })
            res.status(201).json(newProduct);
        })
    } catch (error) {
        console.error('Error ao criar produto: ', error)
        res.status(500).json({ error: 'Internal Server Error'});
    }
}


export const getFilteredProducts = async (req: Request, res: Response):Promise<void> => {
    try {
        let categoryId = req.query.categoryId as string | undefined;
        let orderPrice = req.query.orderPrice as string | undefined;
        let rawPage = req.query.rawPage as string | undefined;

        if(!rawPage || rawPage.trim() === ''){
            rawPage = '1';
        }

        const page = parseInt(rawPage as string, 10)

        if(isNaN(page) || page < 1) {
            res.status(400).json({error: 'Invalid page number'})
            return;
        } 

        const limit = 5;
        let offset = (page - 1) * limit;

        const whereClause: { category_id?: number } = {};
        if(categoryId){
            whereClause.category_id = Number(categoryId);
        }

        let order: any;

        if(orderPrice === 'asc') {
            order = [['product_price', 'ASC']]
        } else if (orderPrice === 'desc') {
            order = [['product_price', 'DESC']];
        } else {
            order = [];
        }

        const {count, rows} = await Product.findAndCountAll({
            where: whereClause,
            order: order,
            limit: limit,
            offset: offset,
        });

        const totalPage = Math.ceil(count / limit);

        res.status(200).json({
            products: rows,
            totalPage: totalPage,
            currentPage: page,

        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
