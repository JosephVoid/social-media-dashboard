import Header from "@/components/header/";
import Dashboard from "@/components/dashboard/";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="p-8">
          <Header />
          <Dashboard />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
