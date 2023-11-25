import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import updateList from '../redux/actions/updateList';
import addOrEditBtn from "../redux/actions/addOrEditBtn";
import updateInput from "../redux/actions/updateInput";
import { useEffect, useState } from "react";

const List = () => {
    // global redux store
    const list = useSelector((store) => store.list);
    const addOrEdit = useSelector((store) => store.addOrEditBtn);
    const input = useSelector((store) => store.input);
    const dispatch = useDispatch();

    // local state
    const [displayList, setDisplay] = useState(list);
    const [lightBtn, setLightBtn] = useState({
        active : "#caceef",
        completed: "#caceef",
        all: "white"
    });
    useEffect(() => {
        setDisplay(list);
        setLightBtn({
            active : "#caceef",
            completed: "#caceef",
            all: "white"
        });
    }, [list]);
    // handle tag button, pass to tag component
    const clickCompleted = (str) => {
        const newList = [...list];
        for (let x of newList){
            if (x.todo === str){
                x.completed = true;
                break;
            }
        }
        dispatch(updateList(newList));
    }
    const clickTrash = (str) => {
        const newList = [...list];
        for (let i=0; i<newList.length; i++){
            if (newList[i].todo === str){
                newList.splice(i, 1);
                break;
            }
        }
        dispatch(updateList(newList));
    }

    // handle click button events in class "listButton"
    const clickActive = () => {
        const newDisplay = [];
        for (let x of list){
            if (!x.completed){
                newDisplay.push(x);
            }
        }
        setDisplay(newDisplay);
        setLightBtn({
            active : "white",
            completed: "#caceef",
            all: "#caceef"
        });
        if (!addOrEdit){dispatch(addOrEditBtn(true))};
        if (input !== ""){dispatch(updateInput(""))};
    }
    const clickCompletedBtn = () => {
        const newDisplay = [];
        for (let x of list){
            if (x.completed){
                newDisplay.push(x);
            }
        }
        setDisplay(newDisplay);
        setLightBtn({
            active : "#caceef",
            completed: "white",
            all: "#caceef"
        });
        if (!addOrEdit){dispatch(addOrEditBtn(true))};
        if (input !== ""){dispatch(updateInput(""))};
    }
    const clickAll = () => {
        setDisplay(list);
        setLightBtn({
            active : "#caceef",
            completed: "#caceef",
            all: "white"
        });
        if (!addOrEdit){dispatch(addOrEditBtn(true))};
        if (input !== ""){dispatch(updateInput(""))};
    }
    const clickClearCompleted = () => {
        const newList = list.filter((e) => !e.completed);
        dispatch(updateList(newList));
        if (!addOrEdit){dispatch(addOrEditBtn(true))};
        if (input !== ""){dispatch(updateInput(""))};
    }
    const clickClearAll = () => {
        dispatch(updateList([]));
        if (!addOrEdit){dispatch(addOrEditBtn(true))};
        if (input !== ""){dispatch(updateInput(""))};
    }
    // Tags board
    const showList = displayList.map((e, index) => <Tag key={index} todoTag={e} clickCompleted={clickCompleted} clickTrash={clickTrash}/>);

    return(
        <div id='list'>
            <div className="listButton">
                <button onClick={() => clickActive()} style={{backgroundColor: lightBtn.active}}>Active</button>
                <button onClick={() => clickCompletedBtn()} style={{backgroundColor: lightBtn.completed}}>Completed</button>
                <button onClick={() => clickAll()} style={{backgroundColor: lightBtn.all}}>All</button>
                <button onClick={() => clickClearCompleted()}>Clear all completed tags</button>
                <button onClick={() => clickClearAll()}>Clear all</button>
            </div>
            {displayList.length===0&&<p style={{color: "blue", marginTop: "30px"}}>No task found</p>}
            <div className="tagList">
                {showList}
            </div>
        </div>
    )
}

export default List;