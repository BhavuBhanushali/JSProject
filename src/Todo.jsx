import React, { useState } from 'react';
import './style.css';
import TodoData from './TodoList';


const Todo = () => {

    const [inputList, setinputList] = useState("");
    const [items, setItems] = useState([]);
    const AddData = () => {
        setItems((oldItems) => {
            if (inputList !== "") {
                return [...oldItems, inputList];
            }
            else {
                alert("no input")
                return [...oldItems];
            }
        });
        setinputList('');
    }
    const deleteItem = (id) => {

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;

            })
        })
    }

    return (
        <>
            <div className="container">
                <div className="mydiv">
                    <h1>ToDo<span className="span">WebApp</span></h1>
                    <br />
                    <input type="text"
                        onChange={(e) => setinputList(e.target.value)}
                        value={inputList}
                    />
                    <button onClick={AddData}><i class="fa fa-plus-square" style={{ fontSize: '36px' }}></i></button>

                    <div>

                    </div>
                    <br />
                    {items.map((itemval, index) => {
                        return <TodoData
                            key={index} id={index} text={itemval}
                            onSelect={deleteItem}
                        />;
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Todo;