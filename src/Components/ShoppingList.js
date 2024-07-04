import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './ShoppingList.css';

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingItemInput, setShoppingItemInput] = useState('');
  const [email, setEmail] = useState('');
  const [creationDate, setCreationDate] = useState('');

  useEffect(() => {
    // Set the creation date when the component mounts
    const date = new Date().toLocaleDateString();
    setCreationDate(date);
  }, []);

  const addShoppingItem = () => {
    if (!shoppingItemInput.trim()) return;
    setShoppingList([
      ...shoppingList,
      { id: shoppingList.length + 1, text: shoppingItemInput.trim() }
    ]);
    setShoppingItemInput('');
  };

  const deleteShoppingItem = id => {
    setShoppingList(shoppingList.filter(item => item.id !== id));
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const sendShoppingList = async () => {
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }

    const shoppingListText = shoppingList.map(item => item.text).join('\n');
    const emailBody = `Shopping List Created on ${creationDate}\n\n${shoppingListText}`;

    try {
      await fetch('https://your-email-service-api/send', {  // Replace with your email service API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: email,
          subject: 'Shopping List',
          text: emailBody
        })
      });

      toast.success('Shopping list sent successfully via email');
    } catch (error) {
      toast.error('Failed to send shopping list via email');
    }
  };

  const shareShoppingListWhatsApp = () => {
    const shoppingListText = shoppingList.map(item => item.text).join('\n');
    const whatsappMessage = `Shopping List Created on ${creationDate}\n\n${shoppingListText}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container">
      <h2>Shopping List</h2>
      <div className="input-section">
        <textarea
          value={shoppingItemInput}
          onChange={e => setShoppingItemInput(e.target.value)}
          placeholder="Enter a new item (multiple lines allowed)"
          rows="3"
        />
        <button onClick={addShoppingItem}><FaPlus /></button>
      </div>
      <ul>
        {shoppingList.map(item => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => deleteShoppingItem(item.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
      <div className="share-buttons">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="abc@gmail.com"
        />
        <button onClick={sendShoppingList}>Send Email</button>
        <button onClick={shareShoppingListWhatsApp}><FaWhatsapp /></button>
      </div>
      <div className="creation-date">
        <span>Date of Creation: {creationDate}</span>
      </div>
    </div>
  );
};

export default ShoppingList;
