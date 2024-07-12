import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import HeaderFix from "../components/HeaderFix";
import Card from "../components/Card";
import TagModal from "../components/TagModal";

const MENU_NAME = [
  { text: "커뮤니티 둘러보기", color: "text-gray-300", font: "font-normal" },
  { text: "캠페인 관리", color: "text-black", font: "font-bold" },
  { text: "내가 의뢰한 캠페인", color: "text-gray-300", font: "font-normal" },
  { text: "의뢰 받은 캠페인", color: "text-gray-300", font: "font-normal" },
  { text: "이용방법", color: "text-gray-300", font: "font-normal" },
  { text: "정산관리", color: "text-gray-300", font: "font-normal" },
  { text: "계정관리", color: "text-gray-300", font: "font-normal" },
  { text: "공지사항", color: "text-gray-300", font: "font-normal" },
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
  marginRight: "24px",
};

const EMPTY_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 111, 1, 1, 1, 1];

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const doneVal = location.state || false;

  const [menu, setMenu] = useState("커뮤니티 둘러보기");
  const [tag, setTag] = useState("전체");
  const [modal, setModal] = useState(false);
  const [done, setDone] = useState(doneVal);
  const [result, setResult] = useState([]);

  const createMenuClickHandler = (
    givenMenu: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      // 이벤트 핸들러 내부에서 givenMenu를 사용할 수 있습니다.
      setMenu(givenMenu);
    };
  };

  const tagGetAxios = async (tag: string) => {
    let givenTag = tag;
    if (tag === "IT/가전") {
      givenTag = "IT,가전&platform";
    } else if (tag === "전체") {
      givenTag = "";
    }
    const res: any = await axios.get(
      `https://sponsors.duckdns.org/api/v1/communities?category=${givenTag}`
    );
    setResult(res.data);
  };

  const createTagClickHandler = (
    givenTag: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      tagGetAxios(givenTag);

      if (givenTag === "더보기...") {
        setModal(true);
      }
      setTag(givenTag);
    };
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    const hideTimeout = setTimeout(() => {
      setDone(false);
    }, 2000);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://sponsors.duckdns.org/api/v1/communities"
        );
        setResult(res.data);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="h-screen">
      <HeaderFix />
      <div className="flex h-screen">
        <div className="pl-[40px] pt-[98px] border-r  border-solid border-gray-200 pr-[63px] min-w-[240px] fixed z-[1] h-screen">
          {MENU_NAME.map((el: any, idx) => {
            return (
              <div
                key={idx}
                className={`${el.text === "내가 의뢰한 캠페인" || el.text === "의뢰 받은 캠페인" ? "flex" : ""}`}
              >
                {el.text === "내가 의뢰한 캠페인" ||
                el.text === "의뢰 받은 캠페인" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="bullet">
                      <g id="Group 4">
                        <path
                          id="Line 2"
                          d="M8.5 4V12"
                          stroke="#666666"
                          strokeLinecap="round"
                        />
                        <path
                          id="Line 3"
                          d="M16 13C16.2761 13 16.5 12.7761 16.5 12.5C16.5 12.2239 16.2761 12 16 12V13ZM16 12L8 12V13L16 13V12Z"
                          fill="#666666"
                        />
                      </g>
                    </g>
                  </svg>
                ) : (
                  <></>
                )}
                <p
                  onClick={createMenuClickHandler(el.text)}
                  key={idx}
                  className={`w-full max-w-fit mb-[32px] cursor-pointer text-[18px] ${el.color} ${el.font}
                    ${
                      el.text === menu
                        ? "!font-bold !text-black  pb-[8px] border-b-2 border-solid border-black"
                        : ""
                    }  ${el.text === "내가 의뢰한 캠페인" || el.text === "의뢰 받은 캠페인" ? "!text-sm" : "!text-xl"} `}
                >
                  {el.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="ml-[252px] min-h-screen relative mt-[80px]">
          <div className="z-[1] sticky pt-[80px] top-0 bg-white">
            <div>
              <div className=" pl-[64px]">
                <p className="font-semibold text-[28px] mb-[12px]">
                  Explore Community for
                  <span className="text-red-500"> Win-Win!</span>
                </p>
                <p className="text-gray-300 mb-[56px]">
                  협업할 커뮤니티를 쉽고 빠르게 찾아 보세요!
                </p>
              </div>
              <div className="flex items-center pb-[20px] pl-[64px]">
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
            {result.map((el: any) => {
              return (
                <div
                  onClick={() => navigate(`/detail/${el.id}`)}
                  key={el.id}
                  style={styleObject}
                  className="flex items-center justify-center max-w-[340px] hover:translate-y-[-5px] custom-drop-shadow-hover "
                >
                  <Card
                    id={el.id}
                    name={el.name}
                    description={el.description}
                    communityCategory={el.communityCategory}
                    userCount={el.userCount}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modal ? <TagModal setModal={setModal} /> : <></>}
      {done ? (
        <div className="w-full absolute top-[0] left-[0] flex justify-center">
          <div className="w-[1054px] h-14 fixed top-[100px] z-[103] bg-zinc-800 rounded-lg">
            <div className="left-[24px] top-[10px] absolute justify-start items-center gap-1 inline-flex">
              <div className="px-[4.57px] py-[5.71px] rounded-2xl border border-neutral-100 justify-center items-center gap-[4.57px] flex" />
              <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-neutral-100 text-base font-bold font-['Inter']">
                  윌펫 (반려동물 지식 커뮤니티)
                </div>
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Inter']">
                에 제안서를 성공적으로 제출했습니다.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
