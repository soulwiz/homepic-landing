import { Download, House, CircleCheck } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-20 py-5 bg-white sticky top-0 z-50 border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-teal rounded-[10px] flex items-center justify-center relative">
          <House className="w-[18px] h-[18px] text-white" />
          <CircleCheck className="w-2.5 h-2.5 text-white absolute bottom-1 right-1" />
        </div>
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
          홈픽
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-9">
        <Link
          href="/#features"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          주요 기능
        </Link>
        <Link
          href="/#recommend"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          이용 방법
        </Link>
        <Link
          href="/#pricing"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          요금 안내
        </Link>
        <Link
          href="/#faq"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          FAQ
        </Link>
        <Link
          href="/#download"
          className="flex items-center gap-2 bg-teal text-white rounded-[10px] px-6 py-2.5 text-sm font-semibold hover:bg-teal-dark transition"
        >
          <Download className="w-4 h-4" />앱 다운로드
        </Link>
      </nav>
    </header>
  );
}
