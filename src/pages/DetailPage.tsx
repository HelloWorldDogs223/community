import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function DetailPage() {
  const { uid } = useParams();
  const navigate = useNavigate();

  console.log(uid);

  return (
    <>
      <Header />
      <div className="flex items-center flex-col mb-[44px]">
        <div className="flex justify-center mb-[48px]">
          <img
            className="w-[780px] h-80 rounded-xl mt-[56px]"
            src="https://via.placeholder.com/780x320"
          />
        </div>
        <div className="flex items-center w-[780px] mb-[50px]">
          <img
            className="w-20 h-20 rounded-full mr-[24px]"
            src="https://via.placeholder.com/80x80"
          />
          <div>
            <div className="text-zinc-800 text-[28px] font-semibold font-['Inter'] leading-[38.08px]">
              윌펫
            </div>
            <div className="text-stone-500 text-sm font-normal font-['Inter'] leading-[19.04px]">
              반려동물 지식 커뮤니티
            </div>
          </div>
        </div>
        <div className="text-zinc-800 text-lg font-semibold font-['Inter'] leading-normal w-[780px] mb-[32px]">
          커뮤니티 정보
        </div>
        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
            총 회원수
          </div>
          <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            2,600 명
          </div>
        </div>
        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
            주 연령대
          </div>
          <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            20대
          </div>
        </div>

        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
            남녀 비율
          </div>
          <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            5:5
          </div>
        </div>

        <div className="flex w-[780px] mb-[64px]">
          <div className="w-32 h-6 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
            모임 형태
          </div>
          <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            오프라인 정기 모임{" "}
          </div>
        </div>

        <div className="text-zinc-800 text-lg font-semibold font-['Inter'] leading-normal w-[780px] mb-[24px]">
          홍보 조건
        </div>
        <div className="flex w-[780px] mb-[16px]">
          <div className="w-32 h-6 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
            홍보 가능 분야
          </div>
          <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            (미정)
          </div>
        </div>

        <div className="flex w-[780px] mb-[64px]">
          <div className="w-32 h-6 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
            희망 단가
          </div>

          <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            150만 원
          </div>
        </div>

        <div className="text-zinc-800 text-lg font-semibold font-['Inter'] leading-normal w-[780px]">
          주요 홍보 전략
        </div>
        <br />
        <div className="w-[779px]">
          <span className="text-zinc-800 text-[15px] font-normal font-['Inter'] underline leading-tight">
            (chatGPT 답변 참조)
          </span>
          <br />
          <br />
          <span className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
            1. 제품 경품 및 콘테스트:
            <br />
            <br />
            회원이 제품을 받을 수 있는 커뮤니티 내에서 콘테스트와 경품 행사를
            조직합니다. 참가자들이 자신의 경험과 피드백을 공유하도록
            격려하십시오.
            <br />
            <br />
            해시태그를 사용하고 참가자들이 Wilpet의 소셜 미디어 계정을
            팔로우하고 게시물을 공유하거나 친구를 커뮤니티에 초대하도록 요구하여
            가시성과 참여도를 높입니다.
            <br />
            <br />
            <br />
            2. 독점 할인 및 프로모션:
            <br />
            <br />
            제한된 시간 동안 커뮤니티 회원에게 독점 할인 또는 프로모션 코드를
            제공합니다. 이는 긴박감을 조성하고 회원들이 가치 있다고 느끼게
            만듭니다.
            <br />
            <br />
            커뮤니티 공지, 이메일 뉴스레터, 포럼 및 소셜 미디어 그룹의 고정
            게시물을 통해 이러한 제안을 홍보하십시오.
            <br />
            <br />
            <br />
            3. 사용자 생성 콘텐츠 및 리뷰:
            <br />
            <br />
            제품을 구매한 회원이 커뮤니티 내에서 자신의 경험, 사진, 리뷰를
            공유하도록 권장합니다. 이러한 사용후기를 눈에 띄게 표시하여 신뢰와
            진정성을 구축하세요.
            <br />
            <br />
            커뮤니티 내에 제품 리뷰 및 토론을 위한 전용 공간을 만들어 잠재
            구매자가 실제 피드백을 쉽게 찾고 읽을 수 있도록 합니다.
          </span>
        </div>
        <div className="flex mt-[106px]">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer w-[382px] h-12 px-6 py-2.5 bg-neutral-100 rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex mr-[24px]"
          >
            <div className="text-center text-stone-500 text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
              홈으로
            </div>
          </div>
          <div
            onClick={() => navigate("/suggest")}
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
