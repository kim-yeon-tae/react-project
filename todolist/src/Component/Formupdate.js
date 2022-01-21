import React, { useEffect, useState } from 'react';

export default function Formupdate(props){
    console.log('작동함');
    let onSubmit = props.onSubmit;
    let onButton = props.onButton;
    let [datas, setDate] = useState({
        id:props.data.id,
        list:props.data.list,
        listID:props.data.listID
    });
    useEffect(()=>{
        setDate(props.data)
        console.log('efftct 작동')
    },[props.data])
    let handClick = (e)=>{
        e.preventDefault();
        if(e.target.list.value == ''){
            alert('계획을 수정해주세요');
        }else{
            onSubmit(
                datas.list,
                datas.id,
                datas.listID
            );
            console.log(datas.listID)
        }
    }
    let buttonClick = ()=>{
        onButton(
            'normal'
        )
    }
    function textInput (e){
        let values= null;
        if([e.target.name] == "list"){
            values = {id:datas.id,list:e.target.value,listID:datas.listID};
        }else if(e.target.name == 'id'){
            values = {id:e.target.value,list:datas.list,listID:datas.listID};
        }
        setDate(values);
    }
    return (
        <div className='form_section'>
            <form action="/update_process" method="post" onSubmit={handClick} 
            >
                <p>
                    <input type="text" name="list" placeholder="plan" value={datas.list} onChange={textInput} autocomplete="off"/>
                    <select name='id' value={datas.id} onChange={textInput}>
                        <option value="1">올해의 목표</option>
                        <option value="2">진행중인 목표</option>
                        <option value="3">완료한 목표</option>
                    </select>
                </p>
                <p className='update'>
                    <input type="submit" value="수정하기" />
                </p>
                <p className='cancle'>
                    <input type="button" value="취소하기" onClick={buttonClick} autocomplete="off" />
                </p>
            </form>
        </div>
    )
}

