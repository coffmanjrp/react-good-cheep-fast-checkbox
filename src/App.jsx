import { useRef } from 'react';
import './App.scss';

function App() {
  const good = useRef();
  const cheep = useRef();
  const fast = useRef();

  const handleChange = (e) => {
    if (good.current.checked && cheep.current.checked && fast.current.checked) {
      if (good.current === e.target) {
        fast.current.checked = false;
      }
      if (cheep.current === e.target) {
        good.current.checked = false;
      }
      if (fast.current === e.target) {
        cheep.current.checked = false;
      }
    }
  };

  return (
    <div className="App">
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input
          ref={good}
          type="checkbox"
          id="good"
          className="toggle"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="good" className="label">
          <div className="ball" />
        </label>
        <span>Good</span>
      </div>
      <div className="toggle-container">
        <input
          ref={cheep}
          type="checkbox"
          id="cheep"
          className="toggle"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="cheep" className="label">
          <div className="ball" />
        </label>
        <span>Cheep</span>
      </div>
      <div className="toggle-container">
        <input
          ref={fast}
          type="checkbox"
          id="fast"
          className="toggle"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="fast" className="label">
          <div className="ball" />
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
}

export default App;
