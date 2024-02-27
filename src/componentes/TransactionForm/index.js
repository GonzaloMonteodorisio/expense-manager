import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

const TransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    onSubmit(amount, category);
    setAmount('');
    setCategory('');
  };

  return (
    <>
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </>
  );
};

export default TransactionForm;
