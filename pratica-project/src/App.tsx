
import './styles/theme.css';
import './styles/global.css';
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Topbar} from './scenes/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import CSidebar from './scenes/global/Sidebar';
import Invoices from './scenes/Invoices';
import Team from './scenes/Team';
import Contacts from './scenes/Contacts';
import Bar from './scenes/Bar';
import Form from './scenes/Form';
import Pie from './scenes/Pie';
import Line from './scenes/Line';
import Fac from './scenes/FAQ';
import Geografy from './scenes/Geografy';
import Calendar from './scenes/Calendar';
import  {ErrorBoundary}  from './ErrorBoundary';

export function App() {

  const [theme, colorMode] = useMode();
    return (
        
        <ColorModeContext.Provider value={colorMode}>  
        <ThemeProvider theme={theme}>
            <CssBaseline />
           <div className="App">
            <ErrorBoundary>
            <CSidebar />
          </ErrorBoundary>

            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                {/* <Route path="/invoices" element={<Invoices />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<Fac />} />
                <Route path="/geography" element={<Geografy />} />
                <Route path="/calendar" element={<Calendar />} /> */}
                </Routes>
            </main>
           </div>
           </ThemeProvider>

        </ColorModeContext.Provider>
    );
}


