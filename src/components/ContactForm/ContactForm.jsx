import { Component } from 'react';

import { Form, Label, Input, Button } from './ContactForm.styled'

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

   handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

   handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetInputValue();
    };  
    
    resetInputValue = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Label htmlFor='name'>Name</Label>
                <Input
                 type="text"
                 name="name"
                 id="number"
                 value={name}
                 onChange={this.handleInputChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                />
                <Label htmlFor='number'>Number</Label>
                <Input
                  type="tel"
                  name="number"
                  id='number'
                  value={number}
                  onChange={this.handleInputChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <Button type='submit'>Add contact</Button>
            </Form>
        )
    }
}