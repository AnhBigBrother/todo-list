import { useDispatch, useSelector } from "react-redux";
import updateInput from '../redux/actions/updateInput';
import addOrEditBtn from '../redux/actions/addOrEditBtn';
import updateList from '../redux/actions/updateList';
import vCircle from "../icons/Vcircle";
import add from "../icons/add";
import { useEffect, useRef, useState } from "react";

const Input = () => {
    const input = useSelector((store) => store.input);
    const list = useSelector((store) => store.list);
    const addOrEdit = useSelector((store) => store.addOrEditBtn);
    const dispatch = useDispatch();

    const inputElement = useRef();
    const [lastInput, setLastInput] = useState("");
    useEffect(() => {
        setLastInput(input);
        inputElement.current.focus();
    }, [addOrEdit]);
    useEffect(() => {
        const local = JSON.stringify(list);
        localStorage.setItem('list', local);
    } , [list]);

    const changeInput = (text) => {
        dispatch(updateInput(text));
    }
    const clickAddButton =() => {
        const trimmedInput = input.trim();
        if (trimmedInput === ""){
            alert("Your input is empty!");
            return;
        }
        const newList = [...list];
        for (let x of newList){
            if (x.todo === input){
                alert("You have already noted this!")
                return;
            }
        }
        newList.push({todo: trimmedInput, completed: false});
        dispatch(updateList(newList));
        dispatch(updateInput(""));
    }
    const clickEditButton = () => {
        const trimmedInput = input.trim();
        if (trimmedInput === ""){
            alert("Your input is empty!");
            return;
        }
        const newList = [...list];
        for (let x of newList){
            if (x.todo === input && input !== lastInput){
                alert("You have already noted this!")
                return;
            }
        }
        for (let i=0; i<newList.length; i++){
            if (newList[i].todo === lastInput){
                newList[i].todo = trimmedInput;
                break;
            }
        }
        dispatch(updateInput(""));
        dispatch(updateList(newList));
        dispatch(addOrEditBtn(true));
    }
    return (
        <div id="input">
            <input 
            ref={inputElement}
            onKeyDown={(e) => e.key==='Enter' && (addOrEdit ? clickAddButton() : clickEditButton())}
            value={input} onChange={(e) => changeInput(e.target.value)}></input>
            {addOrEdit && <button onClick={() => clickAddButton()} title="add">{add}</button>}
            {!addOrEdit && <button onClick={() => clickEditButton()} title="change">{vCircle}</button>}
        </div>
    )
}

export default Input;