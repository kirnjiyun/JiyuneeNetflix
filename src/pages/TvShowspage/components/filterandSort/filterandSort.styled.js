import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    background-color: #000;
    border-radius: 4px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
`;

export const Label = styled.label`
    color: #fff;
    margin-bottom: 0.5rem;
`;

export const Select = styled.select`
    width: 240px;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    appearance: none;
    text-align-last: center;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;
export const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    width: 240px;
`;
export const CountryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 50vh;
    overflow-y: scroll;
`;

export const CountryItem = styled.li`
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
        color: black;
    }
`;

export const CloseButton = styled.button`
    position: absolute;

    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    @media (max-width: 768px) {
        color: white;
    }
`;
