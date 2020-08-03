import React from 'react';

import PageHeader from '../../components/PageHeader';

import * as Styled from './styles';

const TeacherList: React.FC = () => {
  return (
    <Styled.PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="time">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
    </Styled.PageTeacherList>
  );
}

export default TeacherList;