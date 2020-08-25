import Transaction from './Transaction';

class TransactionsBalance {
  transactions: Transaction[];

  balance: Balance;

  constructor({ transactions, balance }: TransactionsBalance) {
    this.transactions = transactions;
    this.balance = balance;
  }
}

export default TransactionsBalance;
