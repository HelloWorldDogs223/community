interface CommunityCategory {
  name: string;
}

interface Props {
  id: string;
  name: string;
  description: string;
  userCount: number;
  communityCategory: CommunityCategory[];
  communityProfileImage: string;
}

export default function Card({
  id,
  name,
  description,
  userCount,
  communityCategory,
  communityProfileImage,
}: Props) {
  return (
    <div className="w-[320px] mb-[24px] bg-neutral-50 hover:shadow rounded-xl p-[16px] flex flex-col justify-center  border border-[#FAFAFA] border-solid">
      <div className="flex items-center justify-center">
        <div className="bg-gray-600 flex justify-center items-center text-white rounded-[8px] mb-[14px]">
          <img src={communityProfileImage} className="object-fill" />
        </div>
      </div>
      <div className="mb-[8px] font-bold text-[#333333]">
        <span>{description}</span>
      </div>
      <div className="mb-[18px]">
        {communityCategory.map((el, idx): any => {
          return (
            <span key={idx} className="mr-[4px] text-[#FF5A5F] text-[12px]">
              {el.name}
            </span>
          );
        })}
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.51931 7.18136C8.99229 6.70015 10.0565 5.31501 10.0565 3.68131C10.0565 1.64818 8.40829 0 6.37516 0C4.34202 0 2.69384 1.64818 2.69384 3.68131C2.69384 5.31502 3.75804 6.70017 5.23103 7.18137C3.94754 7.41301 2.75478 8.03091 1.81981 8.96588C0.848962 9.93673 0.21998 11.1855 0.0103359 12.5252C-0.0750489 13.0709 0.380614 13.5213 0.932899 13.5213L11.8175 13.5213C12.3698 13.5213 12.8254 13.0709 12.7401 12.5252C12.5304 11.1855 11.9014 9.93673 10.9306 8.96588C9.99561 8.0309 8.80282 7.41299 7.51931 7.18136Z"
            fill="#999999"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.70222 6.86033C9.70199 6.86058 9.70176 6.86082 9.70152 6.86106C9.88603 7.00874 10.0899 7.13324 10.3087 7.23013C10.8453 7.58339 11.4193 8.02963 11.7977 8.45911C12.9434 9.75926 13.6176 10.6512 13.6764 13.0565C13.6826 13.3117 13.8881 13.5203 14.1434 13.5204L15.4791 13.5209C15.9874 13.5209 15.9999 13.0608 15.9999 12.6006C15.9999 10.7597 15.5477 9.85533 15.0916 8.94318L15.0796 8.91928C15.0796 8.91928 14.1396 7.26746 13.2221 6.80092C13.8125 6.29455 14.1865 5.54313 14.1865 4.70434C14.1865 3.17949 12.9504 1.94336 11.4255 1.94336C11.1664 1.94336 10.9156 1.97905 10.6779 2.04579C10.8711 2.55396 10.9769 3.10523 10.9769 3.68121C10.9769 4.91388 10.4923 6.03335 9.70308 6.85943L9.70068 6.85947C9.7012 6.85976 9.70171 6.86005 9.70222 6.86033Z"
            fill="#999999"
          />
        </svg>
        <span className="ml-[6px] text-[14px] text-[#666666]">
          {userCount.toLocaleString("ko-kr")}명
        </span>
      </div>
    </div>
  );
}
