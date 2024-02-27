export const createTransaction = (amount, category) => {
  return {
    amount,
    category,
    timestamp: Date.now(),
  };
};
