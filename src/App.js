import React from "react";
import {Header} from './Header'

export default function App() {
  const [emojis, setEmojis] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <div>
      <Header />
      <Input query={query} />
      <Results emojis={emojis} />
    </div>
  );
}