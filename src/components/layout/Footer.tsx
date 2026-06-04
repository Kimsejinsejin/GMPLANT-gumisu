export default function Footer() {
  return (
    <footer className="bg-teal-axis text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & CS Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif font-bold tracking-widest mb-6">GUMISU</h2>
            <div className="space-y-2 text-sm text-white/80">
              <p className="text-lg font-semibold text-white mb-4">CS CENTER 1588-0000</p>
              <p>평일 10:00 - 17:00 (점심시간 12:00 - 13:00)</p>
              <p>주말 및 공휴일 휴무</p>
              <div className="pt-4 flex gap-4">
                <button className="border border-white/30 px-4 py-2 rounded-sm text-xs hover:bg-white/10 transition">
                  1:1 문의하기
                </button>
                <button className="border border-white/30 px-4 py-2 rounded-sm text-xs hover:bg-white/10 transition">
                  FAQ
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ABOUT</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition">브랜드 스토리</a></li>
              <li><a href="#" className="hover:text-white transition">매장 안내</a></li>
              <li><a href="#" className="hover:text-white transition">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition">이벤트</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-6">POLICY</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition">이용약관</a></li>
              <li><a href="#" className="font-bold text-white">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition">이용안내</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/60 space-y-4 md:space-y-0">
          <div className="space-y-1">
            <p>(주)구미수코스메틱 | 대표: 김세진 | 사업자등록번호: 123-45-67890</p>
            <p>통신판매업신고: 제2026-서울강남-0000호 | 개인정보관리책임자: 김세진</p>
            <p>서울특별시 강남구 테헤란로 123, 구미수빌딩</p>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} GUMISU. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
