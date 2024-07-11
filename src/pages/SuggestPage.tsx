import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";

export default function SuggestPage() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.99, // 요소의 10%가 화면에 보이면 콜백 실행
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <div className="min-h-screen h-full  pb-[64px]">
      <Header />
      <div className="flex items-center flex-col">
        <div className="flex flex-col">
          <div className="w-[780px] h-14 relative rounded border border-stone-300 border-solid mt-[56px] ">
            <div className="left-[24px] top-[10px] absolute justify-start items-center gap-1 inline-flex">
              <div className="text-stone-500 text-sm font-normal font-['Inter']">
                현재
              </div>
              <div className="p-2.5 justify-center items-center gap-2.5 flex">
                <div>
                  <span className="text-rose-500 text-base font-bold font-['Inter']">
                    윌펫
                  </span>
                  <span className="text-stone-500 text-base font-bold font-['Inter']">
                    (반려동물 지식 커뮤니티)
                  </span>
                </div>
              </div>
              <div className="text-stone-500 text-sm font-normal font-['Inter']">
                에 보낼 제안을 작성 중입니다.
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-[66px]  justify-center w-full relative">
          <div className=" flex flex-col mr-[72px] fixed top-[250px] left-[380px]">
            <div className="  flex mb-[18px]">
              <div className="w-5 h-5 px-[5.67px] py-[3.20px] bg-zinc-800 rounded-[19.22px] justify-center items-center gap-[5.67px] inline-flex mr-[8px]">
                <div className="text-neutral-100 text-[9.61px] font-bold font-['Inter']">
                  1
                </div>
              </div>
              <div className="text-zinc-800 text-[15px] font-semibold font-['Inter'] leading-tight">
                소속 업체
              </div>
            </div>
            <div
              className={`justify-center flex mb-[18px] ${isVisible ? "text-zinc-800" : "text-stone-300"}`}
            >
              <div className="w-5 h-5 px-[5.67px] py-[3.20px] bg-stone-300 rounded-[19.22px] justify-center items-center gap-[5.67px] inline-flex mr-[8px]">
                <div className=" text-[9.61px] font-bold font-['Inter']">2</div>
              </div>
              <div className=" text-[15px] font-semibold font-['Inter'] leading-tight">
                홍보 제안
              </div>
            </div>

            <div className=" justify-center flex">
              <div className="w-5 h-5 px-[5.67px] py-[3.20px] bg-stone-300 rounded-[19.22px] justify-center items-center gap-[5.67px] inline-flex mr-[8px]">
                <div className="text-neutral-100 text-[9.61px] font-bold font-['Inter']">
                  3
                </div>
              </div>
              <div className="text-stone-300 text-[15px] font-semibold font-['Inter'] leading-tight">
                제공 혜택
              </div>
            </div>
          </div>

          <div className="ml-[220px]">
            <div className="text-zinc-800 text-xl font-semibold font-['Inter'] leading-7">
              1) 내가 소속된 업체 정보
            </div>
            <div className="mt-[56px] mb-[26px]">
              <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug ">
                업체명
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>
            <div className="w-[618px] h-14 relative bg-zinc-100 rounded-lg mb-[56px]">
              <div className="left-[24px] top-[18px] absolute justify-start items-center inline-flex">
                <div className="w-[480px] text-stone-300 text-[15px] font-normal font-['Inter'] leading-tight">
                  소속 업체의 이름을 알려 주세요
                </div>
              </div>
            </div>
            <div className="mb-[26px]">
              <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug">
                담당자 전화번호{" "}
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>
            <div className="w-[618px] h-14 relative bg-zinc-100 rounded-lg">
              <div className="left-[24px] top-[18px] absolute justify-start items-center inline-flex">
                <div className="w-[480px] text-stone-300 text-[15px] font-normal font-['Inter'] leading-tight">
                  소속 업체의 이름을 알려 주세요
                </div>
              </div>
            </div>

            <div className="flex mt-[56px]">
              <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug">
                업체 유형{" "}
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>

              <div className="w-[72px] h-8 px-3 py-1.5 bg-zinc-800 justify-center items-center gap-2 inline-flex">
                <div className="px-1 py-[5px] bg-zinc-800 rounded-[13.57px] border border-neutral-100 justify-center items-center gap-1 flex" />
                <div className="text-center text-neutral-100 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                  영리
                </div>
              </div>
              <div className="w-[63px] h-8 px-3 py-1.5 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-neutral-400 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                  비영리
                </div>
              </div>
            </div>

            <div className="mt-[56px] mb-[26px]">
              <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug">
                한줄 소개
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>
            <div className="w-[618px] h-14 relative bg-zinc-100 rounded-lg mb-[80px]">
              <div className="left-[24px] top-[18px] absolute justify-start items-center inline-flex">
                <div className="justify-start items-start gap-4 flex">
                  <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
                    |
                  </div>
                </div>
                <div className="w-[480px] text-stone-300 text-[15px] font-normal font-['Inter'] leading-tight">
                  소속 업체를 한줄로 간략히 소개해 주세요{" "}
                </div>
              </div>
              <div className="left-[539px] top-[18px]  text-right text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
                0/100자
              </div>
            </div>

            <div className={` text-xl font-semibold font-['Inter'] leading-7 `}>
              2) 커뮤니티에 홍보할 제품/서비스
            </div>

            <div className="flex items-center mt-[56px]">
              <div className="">
                <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug">
                  홍보 내용
                </span>
                <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                  *
                </span>
              </div>
              <div className="w-4 h-4 px-2.5 py-1 bg-rose-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-100 text-xs font-bold font-['Inter']">
                  !
                </div>
              </div>
              <div className="text-right text-stone-500 text-[13px] font-normal font-['Inter']">
                {" "}
                구체적으로 입력할수록 매칭 확률이 높아져요!
              </div>
            </div>

            <div className="mt-[26px] w-[618px] h-[200px] relative bg-zinc-100 rounded-lg">
              <div className="left-[24px] top-[24px] absolute justify-start items-start inline-flex">
                <div className="justify-start items-start gap-4 flex">
                  <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
                    |
                  </div>
                </div>
                <div className="text-stone-300 text-[15px] font-normal font-['Inter'] leading-tight">
                  해당 커뮤니티 내에서 어떤 제품을 어떻게 홍보하고 싶은가요?
                  <br />
                  ex) -------
                </div>
              </div>
              <div className="left-[537px] top-[164px] absolute text-right text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
                0/400자
              </div>
            </div>

            <div className="mt-[56px]" ref={targetRef}>
              <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug">
                제안 단가{" "}
              </span>
              <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                *
              </span>
            </div>

            <div className="w-[477px] h-12 relative rounded border border-stone-300">
              <div className="left-[24px] top-[16px] absolute text-stone-300 text-[15px] font-normal font-['Inter']">
                제안 단가
              </div>
            </div>

            <div className="text-zinc-800 text-xl font-semibold font-['Inter'] leading-7">
              3) 커뮤니티에 제공할 혜택
            </div>

            <div className="flex mt-[56px] items-center">
              <div className="">
                <span className="text-zinc-800 text-base font-semibold font-['Inter'] leading-snug">
                  혜택 내용{" "}
                </span>
                <span className="text-rose-500 text-base font-semibold font-['Inter'] leading-snug">
                  *
                </span>
              </div>

              <div className="w-4 h-4 px-2.5 py-1 bg-rose-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-100 text-xs font-bold font-['Inter']">
                  !
                </div>
              </div>

              <div className="text-right text-stone-500 text-[13px] font-normal font-['Inter'] ">
                커뮤니티 멤버들에게 매력적인 혜택을 알려주세요!
              </div>
            </div>

            <div className="w-[618px] h-[200px] relative bg-zinc-100 rounded-lg mt-[26px]">
              <div className="left-[24px] top-[24px] absolute justify-start items-start inline-flex">
                <div className="justify-start items-start gap-4 flex">
                  <div className="text-zinc-800 text-[15px] font-normal font-['Inter'] leading-tight">
                    |
                  </div>
                </div>
                <div className="text-stone-300 text-[15px] font-normal font-['Inter'] leading-tight">
                  커뮤니티에 어떤 혜택을 제공할 수 있나요? <br />
                  ex) -------
                </div>
              </div>
              <div className="left-[537px] top-[164px] absolute text-right text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">
                0/400자
              </div>
            </div>

            <div className="flex mt-[58px] ">
              <div className="w-[302.50px] h-12 px-6 py-2.5 bg-neutral-100 rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex mr-[12px]">
                <div className="text-center text-stone-500 text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
                  홈으로
                </div>
              </div>
              <div className="w-[302.50px] h-12 px-6 py-2.5 bg-stone-300 rounded-xl flex-col justify-center items-center gap-2 inline-flex">
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
