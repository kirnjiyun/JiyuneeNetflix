import React from "react";
import { Modal } from "react-bootstrap";
import * as S from "./movieModal.styled";
import YouTube from "react-youtube";

const MovieModal = ({ show, onHide, title, videosData }) => {
    const videoKey = videosData?.results[0]?.key;

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <S.ModalWrapper show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <S.CloseButton onClick={onHide}>&times;</S.CloseButton>
            </Modal.Header>
            <S.ModalContent>
                {videoKey && <YouTube videoId={videoKey} opts={opts} />}
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default MovieModal;
