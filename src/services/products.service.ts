import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(name: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, name, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(
    productId: string,
    name: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (name) {
      updatedProduct.name = name;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return [product, productIndex];
  }

  searchProducts(query: string) {
    return this.products.filter(
      (product) =>
        product.name.includes(query) || product.description.includes(query),
    );
  }
}
