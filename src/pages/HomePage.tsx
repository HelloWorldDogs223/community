import { useState } from "react";
import Card from "../components/Card";
import TagModal from "../components/TagModal";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeaderFix from "../components/HeaderFix";

const MENU_NAME = [
  "커뮤니티 둘러보기",
  "캠페인 관리",
  "이용방법",
  "정산관리",
  "계정관리",
  "공지사항",
];

const TAG_NAME = [
  "전체",
  "뷰티",
  "패션",
  "리빙",
  "문구",
  "IT/가전",
  "키즈",
  "펫",
  "여행",
  "더보기...",
];

const styleObject = {
  flex: "1 1 30%" /* 각 div의 기본 너비를 30%로 설정 */,
  margin: "5px" /* div 간격을 위해 여백 추가 */,
  borderRadius: "5px",
  transition: "all 0.3s ease 0s",
};

const EMPTY_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 111, 1, 1, 1, 1];

export default function HomePage() {
  const [menu, setMenu] = useState("커뮤니티 둘러보기");
  const [tag, setTag] = useState("전체");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const createMenuClickHandler = (
    givenMenu: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      // 이벤트 핸들러 내부에서 givenMenu를 사용할 수 있습니다.
      setMenu(givenMenu);
    };
  };

  const createTagClickHandler = (
    givenTag: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      if (givenTag === "더보기...") {
        setModal(true);
      }
      setTag(givenTag);
    };
  };

  const goToDetailPage = () => {
    navigate("/detail/1");
  };

  return (
    <div>
      <HeaderFix />
      <div className="flex h-screen pt-[64px]">
        <div className="pl-[40px] pt-[48px] border-r  border-solid border-gray-200 pr-[63px] min-w-[240px] fixed h-screen">
          {MENU_NAME.map((el, idx) => {
            return (
              <p
                onClick={createMenuClickHandler(el)}
                key={idx}
                className={`w-full max-w-fit mb-[32px] cursor-pointer text-[18px] ${
                  el === menu
                    ? "font-bold text-black border-b-2 border-solid border-black pb-[8px]"
                    : "font-normal text-gray-300"
                }`}
              >
                {el}
              </p>
            );
          })}
        </div>
        <div className="ml-[240px]">
          <div className=" pt-[64px] sticky top-[0px]  z-[2] bg-white">
            <div>
              <div className=" pl-[64px]  ">
                <p className="font-semibold text-[28px] mb-[12px]">
                  Explore Community for
                  <span className="text-red-500"> Win-Win!</span>
                </p>
                <p className="text-gray-300 mb-[56px]">
                  협업할 커뮤니티를 쉽고 빠르게 찾아 보세요!
                </p>
              </div>
              <div className="flex items-center pb-[91px] pl-[64px]">
                <svg
                  className="mr-[9px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#FF5A5F" />
                </svg>
                <div className="mr-[24px] ">
                  <p className="font-semibold text-[16px]">카테고리</p>
                </div>
                <div className="flex">
                  {TAG_NAME.map((el, idx) => {
                    return (
                      <div
                        onClick={createTagClickHandler(el)}
                        key={idx}
                        className={`cursor-pointer px-[24px] py-[10px] mr-[12px]  rounded-full  ${el === tag ? "bg-red-500 text-white" : "bg-white border border-solid border-gray-200"}`}
                      >
                        <p>{el}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mr-[115px] ml-[24px]">
            {EMPTY_ARR.map((el, idx) => {
              return (
                <div
                  onClick={goToDetailPage}
                  key={idx}
                  style={styleObject}
                  className="flex items-center justify-center max-w-[340px] hover:translate-y-[-5px] custom-drop-shadow-hover"
                >
                  <Card />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modal ? <TagModal setModal={setModal} /> : <></>}
    </div>
  );
}
