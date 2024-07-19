import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import HeaderFix from "../components/HeaderFix";
import axios from "axios";

export default function SuggestPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [profit, setProfit] = useState("영리");
  const [adText, setAdText] = useState("");
  const [profitText, setProfitText] = useState("");
  const [money, setMoney] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [intro, setIntro] = useState("");
  const [all, setAll] = useState(false);

  const navigate = useNavigate();
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const location = useLocation();
  const { state } = location;

  const profitClickHandler = (
    item: any
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      setProfit(item);
    };
  };

  const adTextHandler = (e: any) => {
    setAdText(e.target.value);
  };

  const profitTextHandler = (e: any) => {
    setProfitText(e.target.value);
  };

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };
  const phoneTextHandler = (e: any) => {
    setPhone(e.target.value);
  };
  const introTextHandler = (e: any) => {
    setIntro(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const formatNumber = (num: any) => {
    if (!num) return "";
    const parts = num.toString().split(",");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const moneyHandler = (e: any) => {
    const inputValue = e.target.value.replace(/,/g, "").replace("원", "");
    // 숫자만 입력 가능하도록 필터링
    if (/^\d*$/.test(inputValue)) {
      setMoney(formatNumber(inputValue));
    }
  };

  const preventBlur = (e: any) => {
    e.preventDefault();
  };

  const increaseNumber = () => {
    const numericValue = parseInt(money.replace(/,/g, ""), 10) || 0;
    const newValue = numericValue + 100000;
    setMoney(formatNumber(newValue.toString()));
  };

  const decreaseNumber = () => {
    const numericValue = parseInt(money.replace(/,/g, ""), 10) || 0;
    if (numericValue >= 100000) {
      const newValue = numericValue - 100000;
      setMoney(formatNumber(newValue.toString()));
    }
  };

  const submitHandler = async () => {
    if (
      money.length > 0 &&
      adText.length > 0 &&
      profitText.length &&
      name.length > 0 &&
      phone.length > 0 &&
      intro.length > 0
    ) {
      try {
        await axios.post(
          "https://sponsors.duckdns.org/api/v1/communities/proposal",
          {
            communityId: state.uid,
            communityName: state.detailInfo.name,
            customerName: name,
            customerType: profit,
            introduction: intro,
            promotionContent: adText,
            promotionPrice: money,
            promotionBenefits: profitText,
          }
        );
        navigate("/", {
          state: { done: true, detailInfo: state.detailInfo },
        });
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (
      money.length > 0 &&
      adText.length > 0 &&
      profitText.length &&
      name.length > 0 &&
      phone.length > 0 &&
      intro.length > 0
    ) {
      setAll(true);
    } else {
      setAll(false);
    }
  }, [money, adText, profitText, name, phone, intro]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.99,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleThird(entry.isIntersecting);
      },
      {
        threshold: 0.99,
      }
    );

    if (targetRef2.current) {
      observer2.observe(targetRef2.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      if (targetRef2.current) {
        observer2.unobserve(targetRef2.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen h-full pb-[64px] ">
      <HeaderFix />
      <div className="flex items-center flex-col pt-[56px] overflow-hidden relative ">
        <div className="h-[150px] w-full  fixed bg-white z-[2] top-[52px] ">
          <div className="w-[780px] h-[70px]  rounded border border-stone-300 border-solid absolute top-[60px] left-[50%] translate-x-[-50%] ">
            <div className="left-[24px] top-[10px] absolute justify-start items-center gap-1 inline-flex">
              <div className="text-stone-500 text-sm font-normal font-['Inter']">
                현재
              </div>
              <div className="p-2.5 justify-center items-center gap-2.5 flex">
                <div>
                  <span className="text-rose-500 text-base font-bold font-['Inter']">
                    {state.detailInfo.name}
                  </span>
                  <span className="text-stone-500 text-base font-bold font-['Inter']">
                    ({state.detailInfo.description})
                  </span>
                </div>
              </div>
              <div className="text-stone-500 text-sm font-normal font-['Inter']">
                에 보낼 제안을 작성 중입니다.
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-[190px]  justify-center w-full relative ml-[60px]">
          <div
            className=" flex flex-col  fixed top-[250px] h-full"
            style={{ left: "calc(50% - 394px)" }}
          >
            <div className="flex mb-[18px]">
              <div
                className={`w-5 h-5 px-[5.67px] py-[3.20px] ${isVisible || isVisibleThird ? "bg-stone-300" : "bg-zinc-800"} rounded-[19.22px] justify-center items-center gap-[5.67px] inline-flex mr-[8px]`}
              >
                <div
                  className={`text-neutral-100 text-[9.61px] font-bold font-['Inter'] `}
                >
                  1
                </div>
              </div>
              <div
                className={`text-[15px] font-semibold font-['Inter'] leading-tight ${isVisible || isVisibleThird ? "text-[#cccccc]" : "text-[#333333]"}`}
              >
                소속 업체
              </div>
            </div>
            <div className={`justify-center flex mb-[18px] `}>
              <div
                className={`w-5 h-5 px-[5.67px] py-[3.20px] ${isVisible && !isVisibleThird ? "bg-zinc-800" : "bg-stone-300"}  rounded-[19.22px] justify-center items-center gap-[5.67px] inline-flex mr-[8px]`}
              >
                <div className="text-neutral-100 text-[9.61px] font-bold font-['Inter']">
                  2
                </div>
              </div>
              <div
                className={`text-[15px] font-semibold font-['Inter'] leading-tight" ${isVisible && !isVisibleThird ? "text-[#333333]" : "text-[#cccccc]"}`}
              >
                홍보 제안
              </div>
            </div>

            <div className=" justify-center flex">
              <div
                className={`w-5 h-5 px-[5.67px] py-[3.20px] bg-stone-300 rounded-[19.22px] justify-center items-center gap-[5.67px] inline-flex mr-[8px] ${isVisibleThird ? "bg-zinc-800" : "bg-stone-300"}`}
              >
                <div className="text-neutral-100 text-[9.61px] font-bold font-['Inter']">
                  3
                </div>
              </div>
              <div
                className={` text-[15px] font-semibold font-['Inter'] leading-tight ${isVisibleThird ? "text-[#333333]" : "text-[#cccccc]"}`}
              >
                제공 혜택
              </div>
            </div>
          </div>

          <div
            className="ml-[70px] overflow-auto h-[550px] hide-scrollbar"
            style={{
              overflow: "-moz-scrollbars-none",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <div className="text-[#333333] text-xl font-semibold font-['Inter'] leading-7">
              1) 내가 소속된 업체 정보
            </div>
            <div className="mt-[56px] mb-[26px]">
              <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug ">
                업체명&nbsp;
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>
            <input
              onChange={nameHandler}
              className="w-[618px] h-14 relative bg-zinc-100 rounded-lg  mb-[24px] py-[18px] pl-[25px] focus:border-gray-600 focus:border-2 placeholder:text-[#cccccc]"
              placeholder="소속 업체의 이름을 알려 주세요"
            />
            <hr className="mb-[24px]" />
            <div className="mb-[26px]">
              <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug">
                담당자 전화번호&nbsp;
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>
            <input
              onChange={phoneTextHandler}
              className="w-[618px] h-14 relative bg-zinc-100 rounded-lg  mb-[24px] py-[18px] pl-[25px] focus:border-gray-600 focus:border-2 placeholder:text-[#cccccc]"
              placeholder="전화번호를 입력해주세요 (숫자만)"
            />

            <hr className="mb-[24px]" />
            <div className="flex mt-[56px]">
              <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug mr-[1px]">
                업체 유형&nbsp;
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug mr-[62px]">
                *
              </span>

              <div
                className={`border border-gray-200 border-solid h-8 justify-center items-center gap-2 inline-flex rounded-[8px] cursor-pointer w-[72px] ${profit === "영리" ? "bg-zinc-800 text-white " : "text-neutral-400"}`}
                onClick={profitClickHandler("영리")}
              >
                <div className="flex justify-center items-center text-center  text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                  {profit === "영리" && (
                    <div className="w-[17px] h-[17px] px-1 py-[5px] bg-zinc-800 rounded-[13.57px] border border-neutral-100 justify-center items-center gap-1 inline-flex border-solid mr-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="60"
                        viewBox="0 0 8 6"
                        fill="none"
                      >
                        <path
                          id="Vector 10"
                          d="M1 2.33333L3.4 5L7 1"
                          stroke="#F6F6F6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <span>영리</span>
                </div>
              </div>

              <div
                className={`flex w-[72px] h-8 justify-center border items-center  border-gray-200 border-solid rounded-[8px] ml-[12px] cursor-pointer ${profit === "비영리" ? "bg-zinc-800 text-white w-[80px]" : "text-neutral-400"}`}
                onClick={profitClickHandler("비영리")}
              >
                {profit === "비영리" && (
                  <div className="w-[17px] h-[17px] px-1 py-[5px] bg-zinc-800 rounded-[13.57px] border border-neutral-100 justify-center items-center gap-1 inline-flex border-solid mr-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="60"
                      viewBox="0 0 8 6"
                      fill="none"
                    >
                      <path
                        id="Vector 10"
                        d="M1 2.33333L3.4 5L7 1"
                        stroke="#F6F6F6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <span className="  text-sm font-medium font-['Roboto']">
                  비영리
                </span>
              </div>
            </div>

            <hr className="mt-[24px]" />

            <div className="mt-[24px] mb-[26px]">
              <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug">
                한줄 소개&nbsp;
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>
            <input
              onChange={introTextHandler}
              className="w-[618px] h-14 relative bg-zinc-100 rounded-lg mb-[56px] py-[18px] pl-[25px] focus:border-gray-600 focus:border-2 placeholder:text-[#cccccc]"
              placeholder="소속 업체를 한줄로 간략히 소개해 주세요 "
            />

            <div className={` text-xl font-semibold font-['Inter'] leading-7 `}>
              2) 커뮤니티에 홍보할 제품/서비스
            </div>

            <hr className="mb-[24px] mt-[24px]" />

            <div className="flex items-center mt-[56px] justify-between">
              <div className="">
                <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug">
                  홍보 내용&nbsp;
                </span>
                <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                  *
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="8" fill="#FF5A5F" />
                  <path
                    d="M8.89347 3.77273L8.72727 9.88352H7.16761L6.99716 3.77273H8.89347ZM7.94744 12.6108C7.66619 12.6108 7.42472 12.5114 7.22301 12.3125C7.02131 12.1108 6.92188 11.8693 6.92472 11.5881C6.92188 11.3097 7.02131 11.071 7.22301 10.8722C7.42472 10.6733 7.66619 10.5739 7.94744 10.5739C8.21733 10.5739 8.45455 10.6733 8.65909 10.8722C8.86364 11.071 8.96733 11.3097 8.97017 11.5881C8.96733 11.7756 8.91761 11.9474 8.82102 12.1037C8.72727 12.2571 8.60369 12.3807 8.45028 12.4744C8.29688 12.5653 8.12926 12.6108 7.94744 12.6108Z"
                    fill="#F6F6F6"
                  />
                </svg>
                <div className="text-right text-stone-500 text-[13px] font-normal font-['Inter'] ml-[8px]">
                  구체적으로 입력할수록 매칭 확률이 높아져요!
                </div>
              </div>
            </div>

            <div className="relative">
              <textarea
                style={{ lineHeight: "1.5" }}
                maxLength={400}
                onChange={adTextHandler}
                className="mt-[26px] w-[618px] h-[200px] relative bg-zinc-100 rounded-lg pt-[30px] pl-[24px] resize-none focus:border-gray-600 focus:border-2 placeholder:text-[#cccccc]"
                placeholder="해당 커뮤니티 내에서 어떤 제품을 어떻게 홍보하고 싶은가요?
ex) -------"
              />
              <div className="left-[537px] top-[190px] absolute text-right text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
                {adText.length}/400자
              </div>
            </div>

            <hr className="mt-[24px]" />

            <div className="flex items-center mt-[24px] mb-[60px]">
              <div className="" ref={targetRef}>
                <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug">
                  제안 단가&nbsp;
                </span>
                <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                  *
                </span>
              </div>

              <div
                className="relative"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <input
                  value={money}
                  onChange={moneyHandler}
                  className="w-[477px] h-12 relative rounded border border-stone-300 border-solid ml-[64px] pl-[24px] pt-[3px] pr-[10px] focus:border-gray-600 focus:border-2 placeholder:text-[#cccccc]"
                  placeholder="제안 단가"
                  min={0}
                  step={100000}
                  maxLength={50}
                />
                <p className="absolute right-[35px] top-[16px]">원</p>
                {isFocused && (
                  <>
                    <svg
                      onMouseDown={preventBlur}
                      onClick={increaseNumber}
                      className="cursor-pointer absolute top-[2px] right-[2px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="-0.5"
                        width="25"
                        height="23"
                        fill="#EEEEEE"
                      />
                      <rect
                        x="0.5"
                        y="-0.5"
                        width="25"
                        height="24"
                        stroke="#CCCCCC"
                      />
                      <path d="M8 14L13 9L18 14H8Z" fill="black" />
                    </svg>
                    <svg
                      onMouseDown={preventBlur}
                      onClick={decreaseNumber}
                      className="cursor-pointer absolute top-[24px] right-[2px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="23"
                      viewBox="0 0 25 26"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="25"
                        height="23"
                        fill="#EEEEEE"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="25"
                        height="24"
                        stroke="#CCCCCC"
                      />
                      <path d="M8 11L13 16L18 11H8Z" fill="black" />
                    </svg>
                  </>
                )}
              </div>
            </div>

            <div className="text-[#333333] text-xl font-semibold font-['Inter'] leading-7">
              3) 커뮤니티에 제공할 혜택
            </div>

            <hr className="mt-[24px]" />

            <div className="flex mt-[24px] items-center justify-between">
              <div className="">
                <span className="text-[#333333] text-base font-semibold font-['Inter'] leading-snug">
                  혜택 내용&nbsp;
                </span>
                <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                  *
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="mr-[8px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="8" fill="#FF5A5F" />
                  <path
                    d="M8.89347 3.77273L8.72727 9.88352H7.16761L6.99716 3.77273H8.89347ZM7.94744 12.6108C7.66619 12.6108 7.42472 12.5114 7.22301 12.3125C7.02131 12.1108 6.92188 11.8693 6.92472 11.5881C6.92188 11.3097 7.02131 11.071 7.22301 10.8722C7.42472 10.6733 7.66619 10.5739 7.94744 10.5739C8.21733 10.5739 8.45455 10.6733 8.65909 10.8722C8.86364 11.071 8.96733 11.3097 8.97017 11.5881C8.96733 11.7756 8.91761 11.9474 8.82102 12.1037C8.72727 12.2571 8.60369 12.3807 8.45028 12.4744C8.29688 12.5653 8.12926 12.6108 7.94744 12.6108Z"
                    fill="#F6F6F6"
                  />
                </svg>

                <div className="text-right text-stone-500 text-[13px] font-normal font-['Inter'] ">
                  커뮤니티 멤버들에게 매력적인 혜택을 알려주세요!
                </div>
              </div>
            </div>

            <div className="relative mb-[128px]">
              <textarea
                maxLength={400}
                onChange={profitTextHandler}
                className="mt-[26px] w-[618px] h-[200px] relative bg-zinc-100 rounded-lg pt-[30px] pl-[24px] resize-none focus:border-gray-600 focus:border-2 placeholder:text-[#cccccc]"
                style={{ lineHeight: "1.5" }}
                placeholder="커뮤니티에 어떤 혜택을 제공할 수 있나요?  
ex) -------"
              />
              <div
                ref={targetRef2}
                className="left-[537px] top-[190px] absolute text-right text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight"
              >
                {profitText.length}/400자
              </div>
            </div>

            <div className="flex fixed bottom-[0px] left-[50%] translate-x-[-40%] pt-[58px] pb-[100px] h-[100px] bg-white">
              <div
                onClick={() => navigate("/")}
                className="cursor-pointer w-[382px] h-12 px-6 py-2.5 bg-neutral-100 rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex mr-[24px]"
              >
                <div className="text-center text-stone-500 text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
                  홈으로
                </div>
              </div>
              <div
                onClick={submitHandler}
                className={`cursor-pointer w-[382px] h-12 px-6 py-2.5 ${all ? "bg-rose-500" : "bg-stone-300"} rounded-xl flex-col justify-center items-center gap-2 inline-flex`}
              >
                <div className="text-center text-neutral-50 text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
                  제출하기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
