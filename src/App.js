import './App.css';
import ActorPage from "./pages/ActorPage";
import MoviesPage from "./pages/MoviesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [choosedActors, setChoosedActors] = useState([]);

  return (
    <div>
      <h2>באפליקציה הזו</h2>
      <h3>כל הקלדה שתכניסו לאינפוט</h3>
      <h3>תפלטר ותציג רק את השחקנים המתאימים לפי השמות הפרטיים ו/או משפחה</h3>
      <h3>וכמו כן, רק את הסרטים מתוך הגייסו, שמופיעים בהם השחקנים המוצגים בדף לאחר הפילטור</h3>
      <ActorPage movieByActor={setChoosedActors} />
      <MoviesPage show={choosedActors}/>
    </div>
  );
}

export default App;