import React, {useEffect,useState } from 'react';
import './App.css';
import './reset.css';
import Formtodo from './Component/Formtodo';
import TodoList from './Component/TodoList';
import Formupdate from './Component/Formupdate';

function App() {
  let [planList, setCount] = useState({mode:'normal',content:[],selectId:0});
  let [clickContent , setClick] =useState();
  let selectId = 0;
  useEffect (() => {
    console.log(planList)
    }, [planList])
  function formMode (){
    let _formMode = null;
    
    if(planList.mode=='normal'){
      _formMode = <Formtodo selected={planList.selectId} onSubmit={(vauleList,_listID,_selectId)=>{
        selectId = _selectId+1;
        let newList = planList.content.concat({id:_listID , list:vauleList ,listID:selectId});
        setCount({mode:'normal',content:newList,selectId:selectId});
      }}/>;
    }else if(planList.mode=='update'){
      console.log(clickContent,'작동함');
      _formMode = <Formupdate data={clickContent} 
        onSubmit={(vauleList,listID,_selectId)=>{
          console.log(clickContent);
          let conList = planList.content;
          let newList = {id:listID , list:vauleList ,listID:_selectId};
          let listIndex = conList.indexOf(clickContent);
          let i=0;
          while(i < planList.content.length ){
            if(clickContent === planList.content[i]){
              let _newList = conList.splice(listIndex,1,newList);
              setCount({mode:'normal',content:conList,selectId:planList.selectId});
              break;
            }
            i=i+1;
          }
        }}
        onButton={(_normal)=>{
          setCount({mode:_normal,content:planList.content,selectId:planList.selectId});
          console.log(planList);
        }}

      />;
    }
    return _formMode;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My 2022 To Do List</h1>
      </header>
      {formMode()}
      <div className='list_section'>
        <div className='planlist'>
          <p>올해의 목표</p>
          <TodoList
            data={planList.content} 
            id={1}
            modeChange={(_modes)=>{
              let newList = planList.content.concat();
              setCount({mode:_modes,content:newList,selectId:planList.selectId});
            }}
            clickChange={(_click)=>{
              setClick(_click);
              console.log(planList.mode)
            }}
            deleteClick={(_delete)=>{
              if(window.confirm('목표를 지우시겠습니까?')){
                let delet = planList.content;
                let click = delet.indexOf(_delete);
                let i=0;
                while(i < planList.content.length){
                  if(planList.content[i] === _delete){
                    let deleteCnt = delet.splice(click,1,);
                    setCount({mode:'normal',content:delet,selectId:planList.selectId});
                  }
                  i = i+1;
                }
              }
            }}

          />
        
        </div>
        <div className='planlist'>
        <p>진행중인 목표</p>
          <TodoList
            data={planList.content} 
            id={2}
            modeChange={(_modes)=>{
              let newList = planList.content.concat();
              setCount({mode:_modes,content:newList,selectId:planList.selectId});
            }}
            clickChange={(_click)=>{
              setClick(_click);
              console.log(planList.mode)
            }}
            deleteClick={(_delete)=>{
              if(window.confirm('목표를 지우시겠습니까?')){
                let delet = planList.content;
                let click = delet.indexOf(_delete);
                let i=0;
                while(i < planList.content.length){
                  if(planList.content[i] === _delete){
                    let deleteCnt = delet.splice(click,1,);
                    setCount({mode:'normal',content:delet,selectId:planList.selectId});
                  }
                  i = i+1;
                }
              }
            }}
          />
          
        </div>
        <div className='planlist'>
          <p>완료한 목표</p>
          <TodoList
            data={planList.content} 
            id={3}
            modeChange={(_modes)=>{
              let newList = planList.content.concat();
              setCount({mode:_modes,content:newList,selectId:planList.selectId});
            }}
            clickChange={(_click)=>{
              setClick(_click);
              console.log(planList.mode)
            }}
            deleteClick={(_delete)=>{
              if(window.confirm('목표를 지우시겠습니까?')){
                let delet = planList.content;
                let click = delet.indexOf(_delete);
                let i=0;
                while(i < planList.content.length){
                  if(planList.content[i] === _delete){
                    let deleteCnt = delet.splice(click,1,);
                    setCount({mode:'normal',content:delet,selectId:planList.selectId});
                  }
                  i = i+1;
                }
              }
            }}
          />
       
        </div>
      </div>
    </div>
  );
}

export default App;
