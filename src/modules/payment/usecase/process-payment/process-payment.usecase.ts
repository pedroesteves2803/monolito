import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import Transaction from "../../domain/transaction";
import PaymentGateway from "../../gateway/payment.gateway";
import { ProcessPaymentInputDto, ProcessPaymentOutputDto } from "./process-payment.dto";

export default class ProcessPaymentUseCase implements UseCaseInterface {
    constructor(
        private transactionRepository: PaymentGateway,
    ){}

    async execute(
        input: ProcessPaymentInputDto
    ): Promise<ProcessPaymentOutputDto> {
        
        const transaction = new Transaction({
            amount: input.amount,
            orderId: input.orderId,
        });

        transaction.process();

        const persistTransactions = await this.transactionRepository.save(
            transaction
        );

        return {
            transactionId: persistTransactions.id.id,
            orderId: persistTransactions.orderId,
            amount: persistTransactions.amount,
            status: transaction.status,
            createdAt: persistTransactions.createdAt,
            updatedAt: persistTransactions.updatedAt
        }

    }
}