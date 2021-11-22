# steps

1. Instalar typescript y nest/cli

    ```bash
    npm install -g typescript
    npm i -g @nestjs/cli
    ```

2. Crear el proyecto
(Si quiero crear una carpeta con el proyecto, en lugar de . se pone el nombre de la carpeta)

```bash
nest new . 
```

3. Instalar dependencias e iniciar la ejecución del servidor

```bash
npm install
npm run start:dev
```

4. Instalar las librerías de la base de datos (en este casi MongoDB)

```bash
npm install --save @nestjs/mongoose mongoose
npm install @types/mongoose -D
```

## Para cada módulo se hace la siguiente configuración

5. Crear el módulo para la entidad que voy a trabajar: Student, product, etc

```bash
nest g mo product
```

También se puede colocar

```bash
nest generate module product
```

6. Crear el controlador y el servicio

```bash
nest g co product
nest g s product
```

7. Crear el DTO

- Crear una carpeta "dto" dentro del módulo producto
- crear el archivo "create_product.dto.ts"

8. Crear la carpeta interfaces

-Crear un a carpeta "interfaces" dentro del módulo
-crear un archivo "product.interface.ts"

9. Crear la carpeta schemas 

- Crear una carpeta "schemas" dentro del módulo producto
- crear un archivo "product.schema.ts"

## Configurar la conexión a la BD

10. Crear la BD y la colección en MongoAtlas

- Selecciono la BD(de forma predeterminada Cluster0)
- Selecciono la pestaña "Colections"
- Creo una base de datos (+create database)
- Creo una colección en la BD (botón verde "create") con el nombre products

11. Configurar en app.module.ts la conexión a la base de datos de MongoDB utilizando MongooseModule

- En el archivo app.module.ts importamos

```bash
import {MongooseModule} from '@nestjs/mongoose';
```

- En la sección "imports:[ ]" (separados por comas) agregamos:

```bash
MongooseModule.forRoot('mongodb+srv://XXX:YYY@cluster0.v0caj.mongodb.net/ZZZ',{
      useNewUrlParser: true
    }), 
```

Donde: 
- XXX: Usuario de la BD
- YYY: Contraseña del usuario
- ZZZ: Nombre de la base de datos

Nota: La URL de conexión 'mongodb+srv...' se obtiene en el botón connect, seleccionando "connect your application"

## Implementar las funcionalidades de product

12. Actualizar el Schema de product product.schema.ts

- Agregar los atributos que tendrá la colección

13. Actualizar el DTO y la interfaz con los campos a utilizar

- Actualizar el DTO con los mismo atributos del schema
- Actualizar la interfaz con los mismos atributos del schema

14. Agregar a la interfaz el extends Document de Mongoose
- Importar el Document de mongoose

```bash
import{Document} from 'mongoose';
```

- Agregar a la interfaz IProduct la herencia de "extends Document"

```bash
export interface IProduct extends Document
```

## Implementar el servicio y el controlador

15. Configurar el módulo de product "product.module.ts"

- Importar el MongooseModule y el Schema de product

```bash
import {MongooseModule} from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
```

- Agregar en imports la configuración de la colección mediante Mongoose.forFeature, quedando así:

```bash
    @Module({
    imports:[MongooseModule.forFeature([{name:'Product',schema: ProductSchema}])],
    controllers: [ProductController],
    providers: [ProductService]
    })
    export class ProductModule {}

```

16. Creamos las consultas (queries) en el servicio

- Importar las librerías necesarias: DTO, interfaz, Model, y el InjectModel

```bash
    import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/create_product.dto';
```

- Inyectar el modelo anteriormente definido en  product.module.ts mediante el constructor

```bash
    constructor(@InjectModel('Product') private readonly productModel: Model <IProduct>){}
```

- Crear la consulta de listar

```bash
async getProducts(): Promise<IProduct[]>{
        const products = await this.productModel.find();
        return products;

    }
    
```
Nota: productModel representa un modelo o elemento de la base de datos, por lo tanto tiene todas las operaciones para trabajar con la colección Products como: Listar(find), guardar(save) o eliminar(delete)

- Crear la consulta de guardar

```bash
  async createProduct(CreateProductDTO:CreateProductDTO):Promise<IProduct>{
        const product=new this.productModel(CreateProductDTO);
        await product.save();
        return product;

    }
```
- Crear la consulta de eliminar

17. Usar los servicios creados en el crontrolador

## Cambio a MySQL en lugar de Mongoose desde línea 4

4b- Intalación de TypeORM y MySQL

bash```
npm install --save @nestjs/typeorm typeorm mysql2

```

4. Instalar TypeOrnModule

bash```
import { TypeOrmModule } from '@nestjs/typeorm';

- Dentro de "Imports" []
TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test_mysql',
      entities: [],
      synchronize: true,
    }),

```