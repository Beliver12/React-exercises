//import { people } from './data.js';
import { getImageUrl } from './utils.js';

import { useState } from 'react';


export default function MailClient() {
  const [selectedId, setSelectedId] = useState({
    selected: [],
    selectedCount: 0,
  });

  // TODO: allow multiple selection

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    //console.log(newPerson);
    
    if(selectedId.selected.includes(toggledId)){
     const newPerson = {...selectedId, selected: selectedId.selected.filter(id => id !== toggledId), selectedCount: selectedId.selectedCount - 1 }
      setSelectedId(newPerson);
    }
   else if(!selectedId.selected.includes(toggledId)){
     const newPerson = {...selectedId, selected: selectedId.selected.concat(toggledId), selectedCount: selectedId.selectedCount + 1 }
     setSelectedId(newPerson);
     }
    //console.log(newPerson);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id === selectedId.selected[letter.id]
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedId.selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}



function Letter({
  letter,
  onToggle,
  isSelected,
}) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}

const letters= [{
  id: 0,
  subject: 'Ready for adventure?',
  isStarred: true,
}, {
  id: 1,
  subject: 'Time to check in!',
  isStarred: false,
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isStarred: false,
}];