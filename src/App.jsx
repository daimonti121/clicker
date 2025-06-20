import Clicker from './Clicker';
import { useState } from 'react';
import './App.css';

function App() {
  const [isClicker, setClicker] = useState(false);

    return (
        <div>
            <h3>Some text...</h3>
            <button type="button" onClick={() => setClicker(!isClicker)}>Toggle here</button>
            {isClicker && <Clicker />}
        </div>
    );
}

export default App;
