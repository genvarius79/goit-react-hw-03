import './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState } from 'react';
import css from './App.module.css';

export default function App() {
  const data = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState('');

  const deleteItem = itemId => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== itemId);
    });
  };

  const visibleItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <div className={css.container}>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactForm />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList items={visibleItems} onDelete={deleteItem} />
      </div>
    </>
  );
}
