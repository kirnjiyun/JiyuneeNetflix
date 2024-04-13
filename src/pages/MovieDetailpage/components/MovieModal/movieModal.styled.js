import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalWrapper = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    color: black;
    z-index: 100;
    width: 80%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 90%;
        padding: 15px;
    }
`;

export const ModalContent = styled(Modal.Body)`
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        max-height: 80vh;
        overflow-x: auto;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: #888;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #333;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 비율 */
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

    & > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
