// TransactionScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import TransactionForm from '../../componentes/TransactionForm';
import CategoryList from '../../componentes/CategoryList';
import { createTransaction } from '../../models/TransactionModel';
import { createCategory } from '../../models/CategoryModel';

const TransactionScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleTransactionSubmit = (amount, category) => {
    const transaction = createTransaction(parseFloat(amount), category);
    setTransactions([...transactions, transaction]);
  };

  const handleCategorySubmit = (name) => {
    const category = createCategory(name);
    setCategories([...categories, category]);
  };

  return (
    <View>
      <TransactionForm onSubmit={handleTransactionSubmit} />
      <CategoryList categories={categories} />
    </View>
  );
};

export default TransactionScreen;
