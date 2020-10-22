import './About.css';
import React from 'react';
import authorAvatar from '../../images/author-avatar.png';

function About() {
  return (
    <section className="about">
      <img className="about__avatar" src={authorAvatar} alt="аватарка автора" />
      <div className="about__text">
        <h2 className="about__title">Об авторе</h2>
        <div className="about__description">
          <p className="about__author">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
          <p className="about__author">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
