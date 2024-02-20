//import { people } from './data.js';
import { getImageUrl } from './utils.js';

import { useState } from 'react';


export default function FilterableList() {
  const [query, setQuery] = useState('');

 

  return (
    <>
      <SearchBar 
      handleChange={(e) => setQuery(e.target.value)}
      value={query}
      />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({handleChange, query}) {
  

 

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
  id: 1,
  name: 'Dal',
  description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];














/*export default function SyncedInputs() {
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
      {''}
      <input
        value={value}
        onChange={handleChange}
      />
      
    </label>
  );
}*/


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