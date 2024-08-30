import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  setModal: (args: boolean) => void;
  tags: string[];
  setResult: any;
  setTags: (args: string[]) => void;
}

const TAG_NAME: string[] = [
  "뷰티",
  "패션",
  "푸드",
  "리빙",
  "문구",
  "IT/가전",
  "키즈",
  "펫",
  "여행",
  "자동차",
  "음악",
  "금융",
];

export default function TagModal({
  setModal,
  tags,
  setTags,
  setResult,
}: Props) {
  const outClickHandler = (e: any) => {
    setModal(false);
  };

  const createTagClickHandler = (
    givenTag: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return (e) => {
      if (!tags.includes(givenTag)) {
        setTags([...tags, givenTag]);
      } else {
        setTags(
          tags.filter((el) => {
            return el !== givenTag;
          })
        );
      }
    };
  };

  const inClickHandler = (e: any) => {
    e.stopPropagation();
  };

  const tagGetAxios = async () => {
    let givenTag: string[] = tags.map((el) => el);

    if (tags.includes("IT/가전")) {
      givenTag.push("IT,가전");
    }

    if (tags.includes("전체")) {
      givenTag = [];
    }

    const res: any = await axios.get(
      `https://sponsors2024.duckdns.org/api/v1/communities?category=${givenTag.map(
        (el: string) => {
          return el + ",";
        }
      )}`
    );
    setResult(res.data);
  };

  const tagSubmit = () => {
    tagGetAxios();
    setModal(false);
  };

  return (
    <div
      onClick={outClickHandler}
      className="fixed top-0 left-0 bg-black w-screen h-screen bg-opacity-[50%] z-[99]"
    >
      <div
        onClick={inClickHandler}
        className="bg-white py-[24px] absolute z-[100] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[360px] h-[480px] rounded-[20px]"
      >
        <div className="flex mb-[40px]">
          <p className="font-bold text-[18px] ml-[154px] mr-[98px] text-[#333333]">
            카테고리
          </p>
          <svg
            className="cursor-pointer"
            onClick={outClickHandler}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M15 1L1 15"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 1L15 15"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <p className="ml-[24px] font-bold text-[14px] mb-[20px]">태그</p>
          <div className="flex flex-wrap pl-[24px]">
            {TAG_NAME.map((el, idx) => {
              return (
                <div
                  onClick={createTagClickHandler(el)}
                  key={idx}
                  className={`mb-[10px] cursor-pointer text-[#333333] border border-solid px-[20px] py-[10px] mr-[10px]  rounded-full  ${tags.includes(el) ? "bg-[#ff5a5f] border-transparent text-white" : "bg-neutral-100 hover:bg-gray-200 border border-solid border-gray-200"}`}
                >
                  <p>{el}</p>
                </div>
              );
            })}
          </div>
          <div className="flex mt-[150px] ml-[24px] items-center">
            <div
              onClick={() => setTags([])}
              className="cursor-pointer w-[48px] h-[48px] mr-[10px] rounded-[12px] border border-solid border-gray-200 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2754 7.1H15C14.503 7.1 14.1 7.50294 14.1 8C14.1 8.49706 14.503 8.9 15 8.9L18.9991 8.9L19 8.9C19.4971 8.9 19.9 8.49706 19.9 8V4C19.9 3.50294 19.4971 3.1 19 3.1C18.503 3.1 18.1 3.50294 18.1 4V5.3826C17.2883 4.6344 16.3395 4.03585 15.2956 3.6251C13.2714 2.82853 11.0271 2.79209 8.97806 3.52252C6.92901 4.25294 5.21385 5.70079 4.14991 7.5982C3.08598 9.49561 2.74527 11.7142 3.19082 13.8434C3.63638 15.9726 4.83804 17.8684 6.57349 19.18C8.30894 20.4916 10.4607 21.1303 12.6307 20.9779C14.8007 20.8254 16.8421 19.8922 18.3771 18.3508C19.6995 17.0229 20.5691 15.3211 20.8763 13.4873C20.9584 12.9971 20.5784 12.5671 20.0824 12.5343C19.5864 12.5015 19.1634 12.879 19.0691 13.367C18.7985 14.7663 18.1169 16.0612 17.1017 17.0807C15.8737 18.3138 14.2406 19.0603 12.5046 19.1823C10.7686 19.3043 9.04715 18.7933 7.6588 17.744C6.27044 16.6947 5.30911 15.1781 4.95266 13.4747C4.59622 11.7713 4.86878 9.99649 5.71993 8.47856C6.57108 6.96063 7.94321 5.80235 9.58245 5.21801C11.2217 4.63367 13.0171 4.66283 14.6365 5.30008C15.6475 5.69791 16.5471 6.31592 17.2754 7.1Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div
              onClick={tagSubmit}
              className="cursor-pointer w-[256px] h-[48px] rounded-[12px] flex justify-center items-center bg-gray-900 text-white"
            >
              <p>{tags.length - 1}개 적용하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
