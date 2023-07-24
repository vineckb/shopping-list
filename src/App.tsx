import { PaperProvider } from 'react-native-paper';
import { AppBar } from './components/AppBar';

export function App() {
  return (
    <PaperProvider>
      <AppBar />
    </PaperProvider>
  );
}
