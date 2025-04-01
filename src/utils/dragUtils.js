// utils/dragUtils.js
export const initDrag = (e, position, setPosition) => {
    e.preventDefault();
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleDragMove = (e) => {
        setPosition({
            x: e.clientX - startX,
            y: e.clientY - startY,
        });
    };

    const handleDragEnd = () => {
        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
};
