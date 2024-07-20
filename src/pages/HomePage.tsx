import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import HeaderFix from "../components/HeaderFix";
import Card from "../components/Card";
import TagModal from "../components/TagModal";

const MENU_NAME = [
  {
    text: "커뮤니티 둘러보기",
    color: "text-zinc-8000",
    font: "font-normal",
    margin: "pb-[29px]",
  },
  {
    text: "캠페인 관리",
    color: "text-zinc-800",
    font: "font-normal",
    margin: "pb-[16px]",
  },
  {
    text: "내가 의뢰한 캠페인",
    color: "text-zinc-800",
    font: "font-normal",
    margin: "pb-[6px]",
    none: true,
    opacity: "opacity-40",
  },
  {
    text: "의뢰 받은 캠페인",
    color: "text-zinc-800",
    font: "font-normal",
    none: true,
    margin: "pb-[24px]",
    opacity: "opacity-40",
  },
  {
    text: "이용방법",
    color: "text-zinc-800",
    font: "font-normal",
    none: true,
    margin: "pb-[32px]",
    opacity: "opacity-40",
  },
  {
    text: "정산관리",
    color: "text-zinc-800",
    font: "font-normal",
    none: true,
    margin: "pb-[32px]",
    opacity: "opacity-40",
  },
  {
    text: "계정관리",
    color: "text-zinc-800",
    font: "font-normal",
    none: true,
    margin: "pb-[32px]",
    opacity: "opacity-40",
  },
  { text: "공지사항", color: "text-gray-300", font: "font-normal", none: true },
];

const TAG_NAME: string[] = [
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

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menu, setMenu] = useState("커뮤니티 둘러보기");
  const [tags, setTags] = useState<string[]>(["전체"]);
  const [modal, setModal] = useState(false);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  const createMenuClickHandler = (
    givenMenu: any
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      if (givenMenu.none) {
        return;
      }
      // 이벤트 핸들러 내부에서 givenMenu를 사용할 수 있습니다.
      setMenu(givenMenu.text);
    };
  };

  const createTagClickHandler = (
    givenTag: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      if (givenTag === "전체") {
        setTags(["전체"]);
        return;
      }

      if (givenTag === "더보기...") {
        setModal(true);
        setTags(["더보기..."]);
        return;
      }

      let tempTags = tags.map((el) => el);
      tempTags = tempTags.filter((el) => el !== "전체" && el !== "더보기...");
      if (tempTags.includes(givenTag)) {
        setTags(tempTags.filter((el) => el !== givenTag));
      } else {
        setTags([...tempTags, givenTag]);
      }
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

  useEffect(() => {
    const tagGetAxios = async () => {
      let givenTag: string[] = tags.map((el) => el);

      if (tags.includes("더보기...")) {
        return;
      }

      if (tags.includes("IT/가전")) {
        givenTag.push("IT,가전");
      }

      if (tags.includes("전체")) {
        givenTag = [];
      }

      const res: any = await axios.get(
        `https://sponsors.duckdns.org/api/v1/communities?category=${givenTag.map(
          (el: string) => {
            return el + ",";
          }
        )}`
      );
      setResult(res.data);
    };
    tagGetAxios();
  }, [tags]);

  useEffect(() => {
    if (location.state?.done) {
      setDone(true);
      setName(location.state.detailInfo.name);
      setInfo(location.state.detailInfo.description);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col h-full">
      <HeaderFix />
      <div className="flex h-screen ">
        <div className="pl-[40px] pt-[98px] border-r border-solid border-gray-200 pr-[63px] min-w-[240px] fixed z-[1] h-screen bg-white">
          {MENU_NAME.map((el: any, idx) => {
            return (
              <div
                key={idx}
                className={`${el.text === "내가 의뢰한 캠페인" || el.text === "의뢰 받은 캠페인" ? "flex items-center" : ""} ${el.margin} ${el.opacity}`}
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
                  onClick={createMenuClickHandler(el)}
                  key={idx}
                  className={`w-full max-w-fit text-[18px] ${el.color} ${el.font} ${el.none ? "" : "hover:text-[#333333]/80 hover:font-bold cursor-pointer"}
                 ${
                   el.text === menu
                     ? "!font-bold !text-[#333333] border-b-2 border-solid border-black"
                     : "border-b-2 border-transparent"
                 }
              ${
                el.text === "내가 의뢰한 캠페인" ||
                el.text === "의뢰 받은 캠페인"
                  ? "!text-sm h-[32px]" // 텍스트 크기에 맞춘 높이 설정
                  : "!text-xl h-[34px]" // 텍스트 크기에 맞춘 높이 설정
              } pb-[6px]`} // 추가된 부분
                >
                  {el.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="ml-[247px] h-full relative pt-[118px] bg-neutral-100 flex flex-col overflow-auto">
          <div className=" pl-[64px]">
            <p className="font-semibold text-[28px] mb-[16px] text-[#333333]">
              Explore Community for
              <span className="text-rose-500"> Win-Win!</span>
            </p>
            <p className="text-neutral-400 mb-[46px]">
              협업할 커뮤니티를 쉽고 빠르게 찾아 보세요!
            </p>
          </div>
          <div className="flex items-center py-[20px] pl-[64px] z-[2] sticky top-[-63px] bg-neutral-100 ">
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
              <p className="font-semibold text-[16px] text-[#333333]">
                카테고리
              </p>
            </div>
            <div className="flex">
              {TAG_NAME.map((el: any, idx) => {
                return (
                  <div
                    onClick={createTagClickHandler(el)}
                    key={idx}
                    className={`border border-solid  text-[#333333] cursor-pointer px-[24px] py-[10px] mr-[12px] rounded-full ${tags.includes(el) ? "bg-[#ff5a5f] text-white border-transparent" : "bg-neutral-100 hover:bg-gray-200 border border-solid border-gray-200"}`}
                  >
                    <p>{el}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap  pl-[55px] bg-[#F6F6F6] h-full items-start">
            {result.length > 0 ? (
              result.map((el: any) => {
                return (
                  <div
                    onClick={() =>
                      navigate(`/detail/${el.id}`, {
                        state: { img: el.communityProfileImage },
                      })
                    }
                    key={el.id}
                    style={styleObject}
                    className="flex items-center justify-center max-w-[320px] hover:translate-y-[-5px] custom-drop-shadow-hover "
                  >
                    <Card
                      id={el.id}
                      name={el.name}
                      description={el.description}
                      communityCategory={el.communityCategory}
                      userCount={el.userCount}
                      communityProfileImage={el.communityProfileImage}
                    />
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col justify-center items-center text-[#333333] text-[30px]  h-full w-full">
                해당하는 커뮤니티가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
      {modal ? (
        <TagModal
          tags={tags}
          setModal={setModal}
          setTags={setTags}
          setResult={setResult}
        />
      ) : (
        <></>
      )}
      {done ? (
        <div className="w-full absolute left-[50%] translate-x-[-50%] top-0 flex justify-center z-[100]">
          <div className="w-[1054px] h-14 fixed top-[100px] z-[103] bg-zinc-800 rounded-lg">
            <div className="left-[24px] top-[10px] absolute justify-start items-center gap-1 inline-flex">
              <div className="px-[4.57px] py-[5.71px] rounded-2xl border border-neutral-100 justify-center items-center gap-[4.57px] flex" />
              <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-neutral-100 text-base font-bold font-['Inter']">
                  {name} ({info})
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
