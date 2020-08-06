import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return(
        <article className="teacher-item"> 
            <header>
                <img src="https://images.pexels.com/photos/3408420/pexels-photo-3408420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <div>
                    <strong>João Vasconcelos</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br /> <br />
            Nunc porttitor massa ut nulla vulputate, a efficitur nulla posuere. Curabitur at mi ornare, scelerisque velit ut, commodo erat. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;