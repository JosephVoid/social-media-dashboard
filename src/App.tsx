import Header from "@/components/header/";
import Dashboard from "@/components/dashboard/";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="p-8">
        <Header />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
