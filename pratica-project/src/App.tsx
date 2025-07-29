
import './styles/theme.css';
import './styles/global.css';
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Topbar} from './scenes/global/Topbar';

export function App() {

  const [theme, colorMode] = useMode();
    return (
        
        <ColorModeContext.Provider value={colorMode}>  
        <ThemeProvider theme={theme}>
            <CssBaseline />
              </ThemeProvider>
           <div className="App">
            <main className="content">
              <Topbar />
            </main>
           </div>
        </ColorModeContext.Provider>
    )
}


