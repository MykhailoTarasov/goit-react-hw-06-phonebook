import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title } from './Layout';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
