import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/UI/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

class App extends Component {
  render () {

    const theme = createMuiTheme({
      root: {
        backgroundColor: '#333',
        color: 'white'
      }
    })

    return (

        <div className="App">
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Navigation />
            </BrowserRouter>
          </ThemeProvider>
        </div>

      )
  }
}
export default App;
