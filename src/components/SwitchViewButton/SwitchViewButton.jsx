import { useContext } from "react";
import { MyContext } from "../../MyContext";
import classes from './SwitchViewButton.module.css'

function SwitchViewButton() {
let {displayComponent, setDisplayComponent} = useContext(MyContext);


    return <button className={classes.button} onClick={(e)=>setDisplayComponent(e.target.innerText)} >
        {displayComponent === 'CARDS' ? 'TABLE' : 'CARDS'}
    </button>
}

export default SwitchViewButton;