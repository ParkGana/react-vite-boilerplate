import { BrowserRouter } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Router from './router';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Router />
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
