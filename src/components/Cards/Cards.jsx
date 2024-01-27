import { useContext, } from 'react';
import classes from './Cards.module.css'
import { MyContext } from '../../MyContext';

function Cards() {
    let { notLearnedWords, setNotLearnedWords, displayComponent, randomNum, setRandomNum, translateWord, setTranslateWord } = useContext(MyContext);
    let wordToDisplay = notLearnedWords[randomNum] ? notLearnedWords[randomNum][0] : setRandomNum(3);

    if (localStorage.getItem('learnedWords') === null) localStorage.setItem('learnedWords', JSON.stringify([]));

    if (notLearnedWords.length <= 4) {
        let localStorageArr = JSON.parse(localStorage.getItem('learnedWords'));
        for (let i = 0; i < 4; i++) {
            let random = Math.floor(Math.random() * localStorageArr.length);
            notLearnedWords.push(localStorageArr[random]);
            localStorage.setItem('notLearnedWords', JSON.stringify(notLearnedWords))
            localStorageArr.splice(random, 1);
            localStorage.setItem('learnedWords', JSON.stringify(localStorageArr));
        }
    }

    function getNextWord() {
        const newRandomNum = Math.floor(Math.random() * notLearnedWords.length);
        setRandomNum(newRandomNum);
        if (translateWord === '') addElemToStorage(newRandomNum);
    }

    function addElemToStorage(newRandomNum) {
        let learnedWords = JSON.parse(localStorage.getItem('learnedWords'));
        learnedWords.push(notLearnedWords[newRandomNum]);
        const uniqueArraySet = new Set(learnedWords.map(JSON.stringify));
        const uniqueArray = Array.from(uniqueArraySet).map(JSON.parse);
        localStorage.setItem('learnedWords', JSON.stringify(uniqueArray));
        deleteElem(newRandomNum);
    }

    function deleteElem(newRandomNum) {
        let arr = [...notLearnedWords];
        arr.splice(newRandomNum, 1);
        setNotLearnedWords(arr);
        localStorage.setItem('notLearnedWords', JSON.stringify(arr))
    }

    function getTranslate(e) {
        setTranslateWord(notLearnedWords[randomNum][1]);
        if (e.target.innerText === 'ЗАПОМНИЛ') {
            getNextWord();
            setTranslateWord('');
        }
    }

    let displayCards = <div className={classes.card}>
        <p className={classes.word}>{wordToDisplay}</p>
        <p className={classes.word} >{translateWord}</p>
        <div className={classes.buttons}>
            <button className={classes.button} hidden={translateWord ? true : false} onClick={getNextWord}>ЗНАЮ</button>
            <button className={classes.button} onClick={getTranslate}>{translateWord ? 'ЗАПОМНИЛ' : "НЕ ЗНАЮ"}</button>
            <button onClick={() => localStorage.setItem('learnedWords', JSON.stringify([]))} className={classes.button}>СБРОС</button>
        </div>
    </div>

    return (
        <>
            {displayComponent === 'CARDS' ? displayCards : ''}
        </>
    );
}

export default Cards;





