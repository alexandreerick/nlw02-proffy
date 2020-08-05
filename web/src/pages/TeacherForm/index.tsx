import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import * as Styled from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Styled.PageTeacherForm className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Styled.Main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <Styled.Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </Styled.Footer>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
}

export default TeacherForm;