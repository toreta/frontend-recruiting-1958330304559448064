export type Invoice = {
  total: number;
};

export type Receipt = {
  total: number;
  deposit: number;
  change: number;
};

export type Payment = {
  type:
    | 'cash' // 現金
    | 'coupon-fixed' // 定額クーポン
    | 'coupon-percentage'; // 割引クーポン
  amount: number;
};

export function charge(invoice: Invoice, payments: Payment[]) {
  const total = invoice.total;
  let cashDeposit = 0
  let couponDeposit = 0

  for (let i = 0; i < payments.length; i += 1) {
    const p = payments[i]
    switch (p.type) {
      case 'cash':
        cashDeposit += p.amount;
        break;
      case 'coupon-fixed':
        couponDeposit += p.amount
        break;
      case 'coupon-percentage':
        couponDeposit += Math.floor(total * (p.amount / 100));
        break;
      default:
        throw new Error('UnknownPaymentType');
    }
  }

  if (cashDeposit > 0 && couponDeposit >= total) {
    throw new Error('OverCharge');
  }

  const deposit = cashDeposit + couponDeposit

  if (deposit < total) {
    throw new Error('Shortage');
  }

  if (cashDeposit === 0) {
    return { total, deposit, change: 0 }
  }

  return { total, deposit, change: deposit - total }
}
