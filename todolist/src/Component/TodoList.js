import React from 'react'

export default function TodoList(props) {
    let lists =[];
    let click= {};
    let datalist = props.data;
    let id = props.id;
    let i =0;
    let modeChange = props.modeChange;
    let clickChange =props.clickChange;
    let clickDelete = props.deleteClick;
    let clickContent = (e)=>{
        let y = 0;
        while(y < datalist.length){
            if(datalist[y].listID === +e.target.id){
                click = datalist[y];
            }
            y= y+1;
        }
    }
    let changeMode = (e,text)=>{
        e.preventDefault();
        clickContent(e)
        modeChange(
            text
        );
        clickChange(
            click
        )   
    }
    let deleteClick = (e)=>{
        e.preventDefault();
        clickContent(e)
        clickDelete(
            click
        )
    }
    while(i < datalist.length){
        if(datalist[i].id == id){
            lists.push(
                <li key={datalist[i].id+i}>
                    <div className='listtext'>
                        {datalist[i].list}
                    </div>
                    <div className='listbtn'>
                        <a href="/" id={datalist[i].listID} onClick={(e)=>{
                            changeMode(e,'update')
                        }} className='upbtn'>update</a>
                        <a href="/" id={datalist[i].listID} onClick={deleteClick} className='debtn'>delete</a>
                    </div>
                </li>
            );
        }
        
        i++;  
    }
    return (
        <ul>
            {lists}
        </ul>
    )
}
