import { useContext } from "react";
import { MyContext } from "../../MyContext";
import classes from './SwitchTablesButton.module.css'

function SwitchTablesButton() {
    let { displayComponent, button, table, setTable} = useContext(MyContext);

    if (table === 'ВСЕ СЛОВА') {
        button = <button onClick={() => setTable('ВЫУЧЕННЫЕ СЛОВА')} className={classes.button} >
            SWITCH
        </button>
    } else if (table === 'ВЫУЧЕННЫЕ СЛОВА') {
        button = <button onClick={() => setTable('НЕ ВЫУЧЕННЫЕ СЛОВА')} className={classes.button} >
            SWITCH
        </button>
    } else {
        button = <button onClick={() => setTable('ВСЕ СЛОВА')} className={classes.button} >
            SWITCH
        </button>
    }

    return <>
        {displayComponent === 'CARDS' ? '' : button}
    </>
}

export default SwitchTablesButton;