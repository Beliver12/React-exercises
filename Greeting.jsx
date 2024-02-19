//import { people } from './data.js';
import { getImageUrl } from './utils.js';

import { useState } from 'react';
export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input label="First input" handleChange={(e) => setText(e.target.value)} value={text}/>
      <Input label="Second input" handleChange={(e) => setText(e.target.value)} value={text}/>
    </>
  );
}

function Input({ label, handleChange, value}) {
  

 

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={handleChange}
      />
      
    </label>
  );
}


/*export default function MailClient() {
  const [selectedIds, setSelectedId] = useState([]);

  const selectedCount =  selectedIds.length
  function handleToggle(toggledId) {

    
    if(selectedIds.includes(toggledId)){
     const newSelectedId = selectedIds.filter(id => id !== toggledId)
      setSelectedId(newSelectedId);
    }
   else if(!selectedIds.includes(toggledId)){
    const newSelectedId =  selectedIds.concat(toggledId)
     setSelectedId(newSelectedId);
     }
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
             selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
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
}];*/