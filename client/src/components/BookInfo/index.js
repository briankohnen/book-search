import React from "react";
import './style.css';
import ViewButton from '../ViewButton';
import SaveButton from '../SaveButton';
import DeleteButton from '../DeleteButton';

function BookInfo(props) {
  return (
    <div className='bookInfo'>
        <section className='topSection'>
            <h2>{props.title}</h2>
            <h3>{props.author.length === 1 ? props.author : props.author.join(', ')}</h3>
            <div className='buttons'>
                <ViewButton href={props.link} />
                {props.search ? 
                  <SaveButton onClick={props.onClick} /> :
                  <DeleteButton onClick={props.onClick} id={props.id}/>
                }
            </div>
        </section>
        <section className='botSection'>
            <img src={props.image} alt={props.title}></img>
            <p>{props.summary}</p>
        </section>
    </div>
  );
}

export default BookInfo;