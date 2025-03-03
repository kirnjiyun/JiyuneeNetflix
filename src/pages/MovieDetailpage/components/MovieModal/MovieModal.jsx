import React from "react";
import { Modal } from "react-bootstrap";
import * as S from "./movieModal.styled";
import YouTube from "react-youtube";

const MovieModal = ({ show, onHide, title, videosData }) => {
    const videoKey = videosData?.results[0]?.key;
    const opts = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 1,
            mute: 1,
        },
    };

    return (
        <S.ModalWrapper show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title> 🎬 {title} Trailer</Modal.Title>
                <S.CloseButton onClick={onHide}>×</S.CloseButton>
            </Modal.Header>
            <S.ModalContent>
                {videoKey ? (
                    <S.VideoContainer>
                        <YouTube videoId={videoKey} opts={opts} />
                    </S.VideoContainer>
                ) : (
                    <S.NoTrailerMessage>
                        트레일러가 존재하지 않습니다.
                    </S.NoTrailerMessage>
                )}
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default MovieModal;
