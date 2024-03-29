const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝 Far Away👜</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({length: 20}, (_, i) => i + 1}.map((num) => (<option value={num} key={num}>{num}</option>))}
      </select>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (<Item item={item} />))}
      </ul>
    </div>
  );
}

function Item(()) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through"} : {}}> {item.quantity} {item.description} 
      </span>
    </li>
    <button>❌</button>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
}
