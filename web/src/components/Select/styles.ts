import styled from 'styled-components';

export const SelectComponent = styled.div`
    position: relative;
    margin-bottom: 2.4rem;

    + .select-block {
      margin-top: 1.4rem;

      @media (min-width: 700px) {
        margin-top: 0;
      }

    }

    label {
      font-size: 1.4rem;
    }

    select {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      padding: 0 1.6rem;
      font: 1.6rem Archivo;
    }

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
`