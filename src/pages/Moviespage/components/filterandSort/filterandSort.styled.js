import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    padding: 1rem;
    border-radius: 4px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    color: #fff;
    margin-bottom: 0.5rem;
`;

export const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    appearance: none;
    text-align-last: center;
    &:focus {
        outline: none;
    }
`;
