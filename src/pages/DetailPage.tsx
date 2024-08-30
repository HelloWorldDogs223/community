import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderFix from "../components/HeaderFix";

interface Info {
  id: string;
  name: string;
  description: string;
  userCount: number;
  mainAge: number;
  genderRate: string;
  meetUpType: string;
  promotionDomain: string;
  promotionPrice: number;
  promotionContent: string;
  communityOwnerImage: string;
  communityProfileImage: string;
  ownerImage: string;
}

export default function DetailPage() {
  const { uid } = useParams();
  const location = useLocation();

  const [detailInfo, setDetailInfo] = useState<Info>({
    id: "",
    name: "",
    description: "",
    userCount: 0,
    mainAge: 0,
    genderRate: "",
    meetUpType: "",
    promotionDomain: "",
    promotionPrice: 0,
    promotionContent: "",
    communityOwnerImage: "",
    ownerImage: "",
    communityProfileImage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getAxios = async () => {
      const res = await axios.get(
        `https://sponsors2024.duckdns.org/api/v1/communities/${uid}`
      );
      setDetailInfo(res.data);
    };
    getAxios();
  }, []);

  return (
    <>
      <HeaderFix />
      <div className="flex items-center flex-col mb-[44px] mt-[56px]">
        <div className="flex justify-center mb-[48px]">
          <img
            className="w-[780px] h-80 rounded-xl mt-[56px] object-fill"
            src={location.state.img}
          />
        </div>
        <div className="flex items-center w-[780px] mb-[50px]">
          <img
            className="w-20 h-20 rounded-full mr-[24px] object-fill"
            src={detailInfo.communityOwnerImage}
          />
          <div>
            <div className="text-[#333333] text-[28px] font-semibold font-['Inter'] leading-[38.08px]">
              {detailInfo.name}
            </div>
            <div className="text-stone-500 text-sm font-normal font-['Inter'] leading-[19.04px]">
              {detailInfo.description}
            </div>
          </div>
        </div>
        <div className="text-[#333333]  font-semibold font-['Inter'] leading-normal w-[780px] mb-[32px] text-[20px]">
          커뮤니티 정보
        </div>
        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-[#999999] text-[16px] font-normal font-['Inter'] leading-tight">
            총 회원수
          </div>
          <div className="text-[#333333] text-[16px] font-normal font-['Inter'] leading-tight">
            {detailInfo.userCount} 명
          </div>
        </div>
        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-[#999999] text-[16px] font-normal font-['Inter'] leading-tight">
            주 연령대
          </div>
          <div className="text-[#333333] text-[16px] font-normal font-['Inter'] leading-tight">
            {detailInfo.mainAge}대
          </div>
        </div>

        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-[#999999] text-[16px] font-normal font-['Inter'] leading-tight">
            남녀 비율
          </div>
          <div className="text-[#333333] text-[16px] font-normal font-['Inter'] leading-tight">
            {detailInfo.genderRate}
          </div>
        </div>

        <div className="flex w-[780px] mb-[64px]">
          <div className="w-32 h-6 text-[#999999] text-[16px] font-normal font-['Inter'] leading-tight">
            모임 형태
          </div>
          <div className="text-[#333333] text-[16px] font-normal font-['Inter'] leading-tight">
            {detailInfo.meetUpType}
          </div>
        </div>

        <div className="text-[#333333] text-lg font-semibold font-['Inter'] leading-normal w-[780px] mb-[24px]">
          홍보 조건
        </div>
        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-[#999999] text-[16px] font-normal font-['Inter'] leading-tight">
            홍보 가능 분야
          </div>
          <div className="text-[#333333] text-[16px] font-normal font-['Inter'] leading-tight">
            {detailInfo.promotionDomain}
          </div>
        </div>

        <div className="flex w-[780px] mb-[64px]">
          <div className="w-32 h-6 text-[#999999] text-[16px] font-normal font-['Inter'] leading-tight">
            희망 단가
          </div>

          <div className="text-[#333333] text-[16px] font-normal font-['Inter'] leading-tight">
            {detailInfo.promotionPrice.toLocaleString("ko-kr")}원
          </div>
        </div>

        <div className="text-[#333333] text-lg font-semibold font-['Inter'] leading-normal w-[780px] ">
          주요 홍보 전략
        </div>
        <br />
        <div className="w-[780px] pb-[200px] text-[#333333]">
          {detailInfo.promotionContent}
        </div>
        <div className="flex  fixed bottom-[0px] bg-white h-[100px] pb-[100px] left-[50%] translate-x-[-50%] pt-[58px]">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer w-[382px] h-12 px-6 py-2.5 bg-neutral-100 rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex mr-[24px]"
          >
            <div className="text-center text-[#999999] text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
              홈으로
            </div>
          </div>
          <div
            onClick={() => navigate("/suggest", { state: { detailInfo, uid } })}
            className="cursor-pointer w-[382px] h-12 px-6 py-2.5 bg-rose-500 rounded-xl flex-col justify-center items-center gap-2 inline-flex"
          >
            <div className="text-center text-neutral-50 text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
              제안하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
