import { BrowserRouter } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Router from './router';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Router />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
