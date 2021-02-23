import Navbar from './components/Navbar/navbar';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// color
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: orange,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth='lg'>
        <Body />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
