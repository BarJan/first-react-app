import './App.css';
import ActorPage from "./pages/ActorPage";
import MoviesPage from "./pages/MoviesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [choosedActors, setChoosedActors] = useState([]);

  function update(choosed) {
    setChoosedActors(choosed);
  }

  return (
    <div className="app-div">
      <div className="flag-text">
        <div className="effect">
          <h3 className="txtwav slow">באפליקציה הזו</h3>
          <h3 className="txtwav slow">כל הקלדה שתכניסו לאינפוט</h3>
          <h3 className="txtwav slow">תפלטר ותציג רק את השחקנים המתאימים לפי השמות הפרטיים ו/או משפחה</h3>
          <h3 className="txtwav slow">וכמו כן, רק את הסרטים מתוך הגייסו, שמופיעים בהם השחקנים המוצגים בדף לאחר הפילטור</h3>
        </div>
          
      </div>
 
      <ActorPage movieByActor={update} />
      <MoviesPage show={choosedActors}/>
    </div>
  );
}

export default App;