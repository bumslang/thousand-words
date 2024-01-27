import { useContext } from "react";
import { MyContext } from "../../MyContext";
import classes from './Table.module.css'
import { nanoid } from "nanoid";

function Table() {
    let { notLearnedWords, displayComponent, table, arrOfWords, uniqueArray } = useContext(MyContext);
    function getTable(arr) {
        return arrOfWords = arr.map(el => {
            return <tr key={nanoid()} className={classes.row} >
                <td className={classes.cell} >{el[0]}</td>
                <td className={classes.cell} >{el[1]}</td>
            </tr>;
        })
    }

    if (table === 'ВСЕ СЛОВА') getTable(uniqueArray);
    else if (table === 'ВЫУЧЕННЫЕ СЛОВА') getTable(JSON.parse(localStorage.getItem('learnedWords')));
    else getTable(notLearnedWords);

    let displayTable = <table className={classes.table}>
        <tbody  >
            <tr className={classes.row} >
                <td className={classes.nameTable} >{table}</td>
            </tr>
            <tr className={classes.row} >
                <td className={classes.nameCell} >слово</td>
                <td className={classes.nameCell} >перевод</td>
            </tr>
            {arrOfWords}
        </tbody>
    </table>

    return (
        <>
            {displayComponent === 'CARDS' ? '' : displayTable}
        </>
    )
}

export default Table;

