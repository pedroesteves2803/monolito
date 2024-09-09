export interface AddProductFacadeInputDto {
    id?: string;
    name: string;
    description: string;
    purchasePrice: number;
}

export interface CheckStockFacadeInputDto {
    productId: string
}

export interface CheckStockFacadeOutputDto {
    productId: string;
    stock: number;
}

export default interface ProductAdmFacadeInterface {
    AddProduct(input: AddProductFacadeInputDto): Promise<void>;

    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto>;
}