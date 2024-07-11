import { useNavigate } from "react-router-dom";

export default function HeaderFix() {
  const navigate = useNavigate();
  return (
    <div className="absolute z-[2] top-0 left-0 w-full bg-white">
      <div className="flex justify-between pl-[40px] py-[16px] pr-[64px] text-xl border-b border-gray-200 border-solid font-bold">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <svg
            className="mr-[4px] "
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#FF5A5F" />
            <rect
              x="12.6602"
              y="3"
              width="4"
              height="10"
              rx="2"
              transform="rotate(50 12.6602 3)"
              fill="#FAFAFA"
            />
            <rect
              x="12.6602"
              y="7.94971"
              width="4"
              height="10"
              rx="2"
              transform="rotate(50 12.6602 7.94971)"
              fill="#FAFAFA"
            />
          </svg>
          <p>sponsors</p>
        </div>
        {/* <div className="flex text-[14px] items-center font-normal">
          <span className="mr-[12px]">로그인</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="13"
            viewBox="0 0 2 13"
            fill="none"
          >
            <path
              d="M1 0.5L0.999999 12.5"
              stroke="#FF5A5F"
              strokeLinecap="round"
            />
          </svg>
          <span className="ml-[12px]">회원가입</span>
        </div> */}
      </div>
    </div>
  );
}
