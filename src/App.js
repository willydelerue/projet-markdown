import React, { useState } from 'react';
import Marked from 'marked';
import './App.css';

function App() {

  // State
  const [texte, setTexte] = useState('# `Prévisualisateur - Believemy`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)');

  // Fonctions
  const changeTextHandler = event => {
    setTexte(event.target.value);
  };

  const markdownToHTML = () => {
    return {__html: Marked(texte)};
  }

  return (
    <div className="App">
      <div className="elements">

        <div className="element">
          <textarea
            rows="30"
            value={texte}
            onChange={(e) => changeTextHandler(e)}>
          </textarea>
        </div>

        <div className="element">
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>

      </div>
    </div>
  );
}

export default App;