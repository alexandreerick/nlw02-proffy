import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import * as Styled from './styles';

const TeacherList: React.FC = () => {
  return (
    <Styled.PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da Semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <Styled.Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Styled.Main>
    </Styled.PageTeacherList>
  );
}

export default TeacherList;