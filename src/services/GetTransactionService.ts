import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionsBalance from '../models/TransactionsBalance';

class GetTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionsBalance {
    const balance = this.transactionsRepository.getBalance();

    const transactions = this.transactionsRepository.all();

    return { transactions, balance };
  }
}

export default GetTransactionService;
