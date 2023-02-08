import { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Title, Contact, Div } from './App.styled';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContactsInLocal = JSON.parse(localStorage.getItem('contacts'))

    if (saveContactsInLocal) {
      this.setState({ contacts: saveContactsInLocal });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  createContactItem = ({ name, number }) => {
    const isIncludeName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isIncludeName) {
      this.setState(prevState => ({
        contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
      }));
    } else alert(`${name} is already in contacts`);
  };

  deleteContactItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  filterContactItem = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterItem = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filterItem;
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Div>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.createContactItem} />
        <Contact>Contacts</Contact>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length > 0 && (
          <ContactList items={this.filterContactItem()} onDelete={this.deleteContactItem} />
        )}
      </Div>
    );
  }
}

  // componentDidMount() {
  //   const contactsSaveInLocal = JSON.parse(localStorage.getItem('contacts'));
  //   if (contactsSaveInLocal) {
  //     this.setState({ contacts: contactsSaveInLocal });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }