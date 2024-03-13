//import { people } from './data.js';
import React, { Component } from 'react';
import Count from './Count';
function Todo({ isEdited , name}) {
  if(isEdited) {
    return <li className="item">{name}</li>;
  }
  return <input type='text' value={name}/>
}
class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
 
       todo: ['Just some demo tasks', 'As an example'],
       isEdited: [true, true],
       buttonType: ['Edit', 'Edit'],
       clickHandler: [this.handleEdit, this.handleEdit],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleEdit(e) {
    const index = Number(e.target.id);
    const newEdited = this.state.isEdited.map((e, i)  => {
      if(i === index) {
        return e = false;
      } else {
        return e;
      }
    })
    const newButtonType = this.state.buttonType.map((b, i)  => {
      if(i === index) {
        return b = 'Resubmit';
      } else {
        return b;
      }
    })
    const newButtonClickHandler = this.state.clickHandler.map((c, i)  => {
      if(i === index) {
        return c = this.handleResubmit;
      } else {
        return c;
      }
    })
    this.setState((state) => ({
      isEdited: state.isEdited = newEdited,
      buttonType: state.buttonType = newButtonType,
      clickHandler: state.clickHandler = newButtonClickHandler,
    }));
    
  }


  handleDelete(e) {
    const index = Number(e.target.id)
    this.setState((state) => ({
      todos: state.todo.filter((todo, i) => i !== index),
    }));
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
     todo: state.todo.concat(state.inputVal),
     isEdited: state.isEdited.concat(true),
     buttonType: state.buttonType.concat('Edit'),
      inputVal: '',
    }));
  }

  handleResubmit(e) {
    e.preventDefault();
    const index = Number(e.target.id);
    const oldEl = document.getElementById(e.target.id);

  
    const newTodos = this.state.todo.map((t, i)  => {
      if(i === index) {
        return t = oldEl.childNodes[3].value;
      } else {
        return t;
      }
    })
    this.setState((state) => ({
      todo:  state.todo = newTodos,
      inputVal: '',
    }));
  
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button onSubmit={this.handleCount} type="submit">Submit</button>
         
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
       
          <ul>
            {this.state.todo.map((todo,index) => (
              <div key={index}>
                <Todo id={index}  key={todo} name={todo} value={todo} isEdited={this.state.isEdited[index]}/>
                <button id={index} onClick={this.handleDelete} type="delete">Delete</button>
                <button id={index} onClick={this.state.clickHandler[index]} type="edit">{this.state.buttonType[index]}</button>
                
              </div>
            ))}
          </ul>
          <Count value={this.state.todo.length}>{this.state.todo.length}</Count>

      </section>
    );
  }
}

export default ClassInput;



/*const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("");
  };

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;


/*export default function Page() {
  const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
       
        
      }
    });
    return () => {
      ignore = true;
    }
  });
  

  useEffect(() => {
    if(planetId === ''){
      return
    }
    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then(result => {
      if (!ignore) {
        console.log('Fetched a list of places.');
        setPlaceList(result);
        setPlaceId(result[0].id); // Select the first planet
       
        
      }
    });
    return () => {
      ignore = true;
    }
  }, [planetId]);


  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}

function fetchData(url) {
  if (url === '/planets') {
    return fetchPlanets();
  } else if (url.startsWith('/planets/')) {
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
    if (!match || !match[1] || !match[1].length) {
      throw Error('Expected URL like "/planets/earth/places". Received: "' + url + '".');
    }
    return fetchPlaces(match[1]);
  } else throw Error('Expected URL like "/planets" or "/planets/earth/places". Received: "' + url + '".');
}

async function fetchPlanets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        id: 'earth',
        name: 'Earth'
      }, {
        id: 'venus',
        name: 'Venus'
      }, {
        id: 'mars',
        name: 'Mars'        
      }]);
    }, 1000);
  });
}

async function fetchPlaces(planetId) {
  if (typeof planetId !== 'string') {
    throw Error(
      'fetchPlaces(planetId) expects a string argument. ' +
      'Instead received: ' + planetId + '.'
    );
  }
  return new Promise(resolve => {
    setTimeout(() => {
      if (planetId === 'earth') {
        resolve([{
          id: 'laos',
          name: 'Laos'
        }, {
          id: 'spain',
          name: 'Spain'
        }, {
          id: 'vietnam',
          name: 'Vietnam'        
        }]);
      } else if (planetId === 'venus') {
        resolve([{
          id: 'aurelia',
          name: 'Aurelia'
        }, {
          id: 'diana-chasma',
          name: 'Diana Chasma'
        }, {
          id: 'kumsong-vallis',
          name: 'Kŭmsŏng Vallis'        
        }]);
      } else if (planetId === 'mars') {
        resolve([{
          id: 'aluminum-city',
          name: 'Aluminum City'
        }, {
          id: 'new-new-york',
          name: 'New New York'
        }, {
          id: 'vishniac',
          name: 'Vishniac'
        }]);
      } else throw Error('Unknown planet ID: ' + planetId);
    }, 1000);
  });
}


/*export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
   const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key)
    }
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}
/*export default function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const fullName = firstName + ' ' + lastName;
  console.log(fullName)

  const handleIncreaseAge = () =>{
    console.log("in handleIncreaseAge (before setPerson call): ", person)
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <Input label="First Name" handleChange={(e) => setFirstName(e.target.value)} value={firstName}/>
      <Input label="Last Name" handleChange={(e) => setLastName(e.target.value)} value={lastName}/>

      <p>{fullName}</p>
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
}


/*export default function FilterableList() {
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

*/












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