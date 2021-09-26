import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/Body';

function App()
{
  return (
    <div className="App">
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* Body Start */}
      <Body />
      {/* Body End */}
    </div>
  );
}

export default App;
