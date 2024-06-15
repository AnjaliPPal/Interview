import React from "react";
import { useState } from "react";
function TodoList() {
    const [data, setdata] = useState("");
    const [listData, setlistData] = useState([]);
    function additem() {
        // const updatedData = setList([...list, setdata]);
        // console.log("updateddata", updatedData);
        // return updatedData;
        setlistData((listData) => {
           const updatedData = [...listData, data];
            console.log("updateddata", updatedData); 
              return updatedData;
        })
    }
    function removeitem(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i!=id
        })
        setlistData(updatedListData)
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the task"
        value={data}
        onChange={(e) => setdata(e.target.value)}
      />

          <button onClick={additem}>+</button>
          
          <p>List</p>
          {listData != [] && listData.map((data, i) => {
              return (
                  <>
                      <p key={i}>
                          <div>{data}</div>
                          <div>
                              <button onClick={()=>removeitem(i)}>-</button>
                          </div>
                      </p>
                  </>
            )
          })}
    </div>
  );
}

export default TodoList;
