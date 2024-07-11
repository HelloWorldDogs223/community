export default function Card() {
  return (
    <div className=" mb-[48px] bg-neutral-50 hover:shadow rounded-xl p-[15px] ">
      <div className="bg-gray-600 w-[310px] h-[140px] flex justify-center items-center text-white rounded-[8px] mb-[14px]">
        예시 이미지
      </div>
      <div className="mb-[8px]">한 줄 소개글을 작성해주세요</div>
      <div className="mb-[18px]">뷰티 인스타그램</div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="10" cy="9" r="4" fill="#666666" />
          <path
            d="M16 19C16.5523 19 17.0069 18.5503 16.9337 18.0029C16.7349 16.515 16.0948 15.1257 15.0962 14.0503C13.8772 12.7375 12.2239 12 10.5 12C8.77609 12 7.12279 12.7375 5.90381 14.0503C4.90519 15.1257 4.26507 16.515 4.06626 18.0029C3.99311 18.5503 4.44772 19 5 19L16 19Z"
            fill="#666666"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.1636 10.7786C14.43 10.2428 14.5797 9.63891 14.5797 9C14.5797 8.36109 14.43 7.75717 14.1636 7.22144C14.7098 6.48059 15.5887 6 16.5797 6C18.2366 6 19.5797 7.34315 19.5797 9C19.5797 10.6569 18.2366 12 16.5797 12C15.5887 12 14.7098 11.5194 14.1636 10.7786Z"
            fill="#666666"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7459 17C17.3916 15.6279 16.6759 14.3622 15.6568 13.3431C15.2768 12.9632 14.8626 12.6254 14.4214 12.3328C14.9885 12.1149 15.5959 12 16.2151 12C17.5412 12 18.813 12.5268 19.7507 13.4645C20.4507 14.1645 20.9217 15.0506 21.1155 16.0066C21.2252 16.5479 20.7674 17 20.2151 17L17.7459 17Z"
            fill="#666666"
          />
        </svg>
        <span>회원수</span>
        <span>1.6K~2K</span>
      </div>
    </div>
  );
}
