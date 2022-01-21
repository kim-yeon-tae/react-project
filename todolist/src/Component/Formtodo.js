import React, {useState } from 'react';

export default function Formtodo(props){
    let onSubmit = props.onSubmit;
    let _selected = props.selected;
    let handClick = (e)=>{
        e.preventDefault();
        if(e.target.list.value == ''){
            alert('계획을 작성해주세요');
        }else{
            onSubmit(
                e.target.list.value,
                e.target.oplist.value,
                _selected
            );
            e.target.list.value = '';
            e.target.oplist.value = '1';
        }
        }
    return (
        <div className='form_section'>
            <form action="/update_process" method="post" onSubmit={handClick}
            >
                <p>
                    <input type="text" name="list" placeholder="plan" autocomplete="off"/>
                    <select name='oplist'>
                        <option value="1">올해의 목표</option>
                        <option value="2">진행중인 목표</option>
                        <option value="3">완료한 목표</option>
                    </select>
                </p>
                <p className='create'>
                    <input type="submit" value="생성하기" />
                </p>
            </form>
        </div>
    )
}

