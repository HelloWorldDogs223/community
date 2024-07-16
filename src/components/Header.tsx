import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between pl-[40px] py-[16px] pr-[64px] text-xl border-b border-gray-200 border-solid font-bold">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/symbol.png" width={30} height={30} />
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
