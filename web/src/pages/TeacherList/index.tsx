import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import * as Styled from './styles';

const TeacherList: React.FC = () => {
  return (
    <Styled.PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
        <Select
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Português', label: 'Português' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />

          <Select
            name="week_day" 
            label="Dia da Semana" 
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />
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