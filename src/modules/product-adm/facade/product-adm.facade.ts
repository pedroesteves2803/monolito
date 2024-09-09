import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import ProductAdmFacadeInterface, { AddProductFacadeInputDto, CheckStockFacadeInputDto, CheckStockFacadeOutputDto } from "./product-adm.facade.interface";


export interface UseCaseProps {
    addUseCase: UseCaseInterface;
    stockUsecase: UseCaseInterface;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface {

    private _addUsecase: UseCaseInterface;
    private _checkStockUsecase: UseCaseInterface;

    constructor(UseCaseProps: UseCaseProps) {
        this._addUsecase = UseCaseProps.addUseCase;
        this._checkStockUsecase = UseCaseProps.stockUsecase;
    }

    AddProduct(input: AddProductFacadeInputDto): Promise<void> {
        return this._addUsecase.execute(input);
    }

    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUsecase.execute(input);
    }
}