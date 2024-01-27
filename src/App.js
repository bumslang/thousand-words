import { useState } from 'react';
import './App.css';
import { MyContext } from './MyContext';
import Cards from './components/Cards/Cards';
import Table from './components/Table/Table';
import SwitchViewButton from './components/SwitchViewButton/SwitchViewButton';
import SwitchTablesButton from './components/SwitchTablesButton/SwitchTablesButton';

function App() {
  if (localStorage.getItem('notLearnedWords')===null) {
    localStorage.setItem('notLearnedWords', JSON.stringify([
      ['again', 'снова'],
      ['animal', 'животное'],
      ['point', 'точка'],
      ['mother', 'мама'],
      ['world', 'мир'],
      ['near', 'возле'],
      ['build', 'строить'],
      ['self', 'себя'],
      ['earth', 'Земля'],
      ['father', 'папа'],
    ]))
  }
  if (localStorage.getItem('learnedWords') === null) localStorage.setItem('learnedWords', JSON.stringify([]));
  
  let [notLearnedWords, setNotLearnedWords] = useState(JSON.parse(localStorage.getItem('notLearnedWords')));
  let [displayComponent, setDisplayComponent] = useState('CARDS');
  let [table, setTable] = useState('ВСЕ СЛОВА');
  let [randomNum, setRandomNum] = useState(0);
  let [translateWord, setTranslateWord] = useState('');
  const uniqueArraySet = new Set([...notLearnedWords, ...JSON.parse(localStorage.getItem('learnedWords'))].map(JSON.stringify));
  const uniqueArray = Array.from(uniqueArraySet).map(JSON.parse);
  let arrOfWords;
  let button;
  let resultTable;


  return (
    <MyContext.Provider value={{ notLearnedWords, setNotLearnedWords, displayComponent, setDisplayComponent, table, setTable, randomNum, setRandomNum, translateWord, setTranslateWord, arrOfWords, uniqueArray, button, resultTable }}>
      <div className="App">
        <SwitchViewButton />
        <Cards />
        <Table />
        <SwitchTablesButton />
      </div>
    </MyContext.Provider >
  );
}

export default App;
