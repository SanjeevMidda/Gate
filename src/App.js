import { useState } from 'react';
import './index.css';

function App() {

  const [status, setStatus] = useState(true);

  function rotate(){
    setStatus(!status);
  }

  return (
    <div className="App" onClick={rotate}>
      <div className= {status? "line" : "lineRotate"}></div>
      <h1 className={status? "text" : "textOpacity"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nostrum ad hic non temporibus dolorem minus perferendis obcaecati ab saepe quos amet similique inventore maiores quaerat dicta? Numquam, quidem obcaecati.
      </h1>
    </div>
  );
}

export default App;
