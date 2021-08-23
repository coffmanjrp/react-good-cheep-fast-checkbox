import './App.scss';

function App() {
  return (
    <div className="App">
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input type="checkbox" id="good" className="toggle" />
        <label htmlFor="good" className="label">
          <div className="ball" />
        </label>
        <span>Good</span>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="cheep" className="toggle" />
        <label htmlFor="cheep" className="label">
          <div className="ball" />
        </label>
        <span>Cheep</span>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="fast" className="toggle" />
        <label htmlFor="fast" className="label">
          <div className="ball" />
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
}

export default App;
