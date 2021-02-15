import Navbar from './components/Navbar/navbar';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='lg'>
        <Body />
      </Container>
      <Footer />
    </>
  );
};

export default App;
