import * as S from "./tvSlider.styled";
import { useState, useRef, useEffect } from "react";
import TVCard from "../../common/TVCard/TVCard";

const TvTabs = ({ categories, onClick }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef([]); // 각 탭의 DOM 참조를 저장
    const [activeTabOffset, setActiveTabOffset] = useState(0); // 밑줄 오프셋
    const [activeTabWidth, setActiveTabWidth] = useState(0); // 밑줄 너비

    // 활성 탭이 변경될 때마다 오프셋과 너비 계산
    useEffect(() => {
        const activeTabElement = tabRefs.current[activeTab];
        if (activeTabElement) {
            setActiveTabOffset(activeTabElement.offsetLeft);
            setActiveTabWidth(activeTabElement.offsetWidth);
        }
    }, [activeTab]);

    return (
        <S.TabsContainer>
            <S.TabList
                style={{
                    "--active-offset": `${activeTabOffset}px`,
                    "--active-width": `${activeTabWidth}px`,
                }}
            >
                {categories?.map((category, index) => (
                    <S.Tab
                        key={index}
                        active={activeTab === index}
                        onClick={() => setActiveTab(index)}
                        ref={(el) => (tabRefs.current[index] = el)} // 탭 DOM 참조 연결
                    >
                        <span className="icon">📺</span> {category.title}
                    </S.Tab>
                ))}
            </S.TabList>
            <S.Grid>
                {categories[activeTab].tvShows?.map((tv, i) => (
                    <TVCard tv={tv} key={i} onClick={onClick} />
                ))}
            </S.Grid>
        </S.TabsContainer>
    );
};

export default TvTabs;
