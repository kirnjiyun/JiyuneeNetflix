import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalWrapper = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    color: black;
    z-index: 100;
`;

export const ModalContent = styled(Modal.Body)`
    padding: 20px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;
