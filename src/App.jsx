import Search from './components/search/Search';
import Style from './App.module.scss';

function App() {
  return (
    <div className={Style.App}>
      <Search />
      <div className={Style.map}></div>
    </div>
  );
}

export default App;
