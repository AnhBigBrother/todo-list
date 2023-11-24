import edit from '../icons/edit';
import completed from '../icons/completed';
import trash from '../icons/trash';
import { useDispatch, useSelector } from "react-redux";
import addOrEditBtn from '../redux/actions/addOrEditBtn';
import updateInput from '../redux/actions/updateInput';
import { useEffect, useState } from 'react';


const Tag = ({ todoTag, clickCompleted, clickTrash }) => {
    const dispatch = useDispatch();
    const addOrEdit = useSelector((store) => store.addOrEditBtn);
    const [light, setLight] = useState(false);
    useEffect(() => {
        addOrEdit&&setLight(false);
    }, [addOrEdit])

    const clickEdit = () => {
        dispatch(updateInput(todoTag.todo));
        if (addOrEdit){dispatch(addOrEditBtn(false));}
        else{
            dispatch(addOrEditBtn(true));
            setTimeout(() => {dispatch(addOrEditBtn(false)); setLight(true)}, 20)
        }
    }

    let style = todoTag.completed ? {
        textDecoration: "line-through",
        backgroundColor: "#a39dc9"
    } : {}
    style = (!addOrEdit && light) ? {...style, backgroundColor: "white", boxShadow: "0px 0px 18px blue", border: "2px solid black"} : style;

    return (
        <div className='tag' style={style}>
            <p className="tagText">{ todoTag.todo }</p>
            <div className="tagIcons">
                {!light && !todoTag.completed&&<button onClick={() => {clickEdit(); setLight(true)}} title='Edit'>{edit}</button>}
                {addOrEdit && !todoTag.completed&&<button onClick={() => clickCompleted(todoTag.todo)} title='Completed'>{completed}</button>}
                {addOrEdit && <button onClick={() => clickTrash(todoTag.todo)} title='Remove'>{trash}</button>}
            </div>
        </div>
    )
}

export default Tag;