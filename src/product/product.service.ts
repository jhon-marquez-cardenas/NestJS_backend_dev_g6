import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/create_product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model <IProduct>){}

    async getProducts(): Promise<IProduct[]>{
        const products = await this.productModel.find();
        return products;
    }

    async createProduct(CreateProductDTO:CreateProductDTO):Promise<IProduct>{
        const product=new this.productModel(CreateProductDTO);
        await product.save();
        return product;

    }



}
