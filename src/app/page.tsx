import HeroSlider from "@/components/home/HeroSlider";
import BestItems from "@/components/home/BestItems";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />
      <BestItems />
      
      {/* Brand Story Banner (Simple Placeholder) */}
      <section className="w-full bg-cream-50 py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-teal-axis mb-6">Inspired by Climate, Perfected by GUMISU</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            우리는 변화하는 기후와 환경 속에서 피부가 겪는 스트레스에 집중합니다.<br />
            당신의 피부가 어떤 환경에서도 가장 건강한 밸런스를 유지할 수 있도록,<br />
            자연 유래 성분과 진보된 스킨케어 기술을 결합합니다.
          </p>
          <button className="border border-teal-axis text-teal-axis px-8 py-3 hover:bg-teal-axis hover:text-white transition-colors duration-300">
            브랜드 스토리 보기
          </button>
        </div>
      </section>
    </div>
  );
}
