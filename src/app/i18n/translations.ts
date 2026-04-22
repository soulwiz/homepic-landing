export type Locale = "en" | "ko" | "ja" | "zh" | "es" | "de";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  zh: "中文",
  es: "Español",
  de: "Deutsch",
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Header
    "header.brand": "homepic AI",
    "header.features": "Features",
    "header.pricing": "Pricing",
    "header.faq": "FAQ",
    "header.earlyAccess": "Get Early Access",

    // Event Banner
    "event.badge": "100% FREE",
    "event.title": "Start protecting your home — completely free",
    "event.value": "",

    // Hero
    "hero.badge": "Available in 6 Languages",
    "hero.title": "Every moment\nof your home,\ncaptured.",
    "hero.desc":
      "From move-in to move-out, homepic AI records, inspects, and protects your home with AI — so you never lose a deposit or miss a maintenance issue again.",
    "hero.emailPlaceholder": "Enter your email",
    "hero.cta": "Get Pro 1yr Free",
    "hero.limitedSpots": "Limited to first 500",
    "hero.waitlistCount": "{count} people are waiting",
    "hero.spotsLeft": "{count} spots left out of 500",
    "hero.note": "Launching soon — be the first to know",

    // Phone Mockup
    "phone.greeting": "Hello, Sarah",
    "phone.title": "Your Home, Protected",
    "phone.myProperties": "My Properties",
    "phone.managed": "1 property(ies) being managed",
    "phone.active": "Active",
    "phone.moveOut": "Move-out",
    "phone.addProperty": "Add Property",
    "phone.photos": "Photos",
    "phone.reports": "Reports",
    "phone.address": "420 Broad Ave, Palisades Park, NJ",
    "phone.deposit": "Deposit $1,643 / Monthly $1,095",
    "phone.status": "Analyzed",

    // Features
    "features.badge": "Core Features",
    "features.title": "Powerful features,\nsimple experience",
    "features.desc": "Everything you need to manage your home — powered by AI",
    "features.aiTitle": "AI Home Inspection",
    "features.aiDesc":
      "AI detects mold, cracks, water damage and more before you sign the lease. Compare move-in and move-out photos to settle disputes.",
    "features.timelineTitle": "Smart Photo Timeline",
    "features.timelineDesc":
      "All your photos instantly sorted by room and time automatically. AI baseline scores and defect changes over time.",
    "features.maintenanceTitle": "Maintenance Log",
    "features.maintenanceDesc":
      "Log repairs with timestamped photos, track costs, and generate shareable reports for your landlord.",
    "features.vaultTitle": "Document Vault",
    "features.vaultDesc":
      "Scan and store leases, receipts, and insurance docs. AI OCR extracts key info and sends contract expiry alerts.",

    // Lifecycle
    "lifecycle.badge": "Home Lifecycle",
    "lifecycle.title": "One app for every stage",
    "lifecycle.desc":
      "From finding your next place to moving out — homepic AI covers it all",
    "lifecycle.browseTitle": "Browse",
    "lifecycle.browseDesc":
      "Inspect properties before signing. AI defects analysis: mold, cracks, and water damage.",
    "lifecycle.moveInTitle": "Move-in",
    "lifecycle.moveInDesc":
      "Record every room with timestamped, GPS-verified photos. Your move-in record, automated.",
    "lifecycle.livingTitle": "Living",
    "lifecycle.livingDesc":
      "Track maintenance, log repairs, and keep a timeline of every change in your home.",
    "lifecycle.moveOutTitle": "Move-out",
    "lifecycle.moveOutDesc":
      "AI compares move-in to move-out. Get a legal-ready PDF report to protect your deposit.",

    // Worldwide
    "worldwide.badge": "Global",
    "worldwide.title": "Available worldwide",
    "worldwide.desc":
      "homepic AI supports 6 languages for renters around the globe",

    // Pricing
    "pricing.badge": "Pricing",
    "pricing.title": "Simple, transparent pricing",
    "pricing.desc": "Free to start. Upgrade for unlimited access.",
    "pricing.free": "Free",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "1 property · 30 photos · 5 AI/mo",
    "pricing.freeF1": "30 photo captures",
    "pricing.freeF2": "AI inspection reports — free",
    "pricing.freeF3": "Server timestamps & GPS",
    "pricing.freeF4": "5 AI inspections per month",
    "pricing.pro": "Pro",
    "pricing.proPrice": "$4.99/mo",
    "pricing.proSub": "Unlimited everything",
    "pricing.proF1": "Unlimited photos & properties",
    "pricing.proF2": "Unlimited AI inspections*",
    "pricing.proF3": "Document vault with OCR",
    "pricing.proF4": "Priority support",
    "pricing.proCta": "Get Early Access",
    "pricing.fairUse": "* Fair use: up to 500 AI inspections per month",

    // FAQ
    "faq.title": "Frequently asked questions",
    "faq.q1": "Where are my photos stored?",
    "faq.a1":
      "All photos are encrypted and stored on AWS S3 servers. They are retained for 5 years after the contract ends, then automatically deleted.",
    "faq.q2": "Is the AI analysis legally binding?",
    "faq.a2":
      "The AI analysis itself is not legally binding. However, reports with server-authenticated timestamps and GPS verification data can serve as strong reference material in disputes.",
    "faq.q3": "How much does a report cost?",
    "faq.a3":
      "Reports are completely free. Photo capture, AI inspection, and property management are all included at no cost.",
    "faq.q4": "How does the AI distinguish natural wear from tenant damage?",
    "faq.a4":
      "Our AI compares move-in and move-out photos, classifying wallpaper discoloration, floor indentation, and door wear as natural wear, while new scratches and damage are classified as tenant responsibility.",

    // CTA
    "cta.title": "Be the first to try homepic AI",
    "cta.desc":
      "Sign up for early access. We'll notify you when the app launches.",
    "cta.note": "No spam. Unsubscribe anytime.",

    // Footer
    "footer.tagline": "Your home, managed with AI",
    "footer.service": "Service",
    "footer.legal": "Legal",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",

    // Email Form
    "email.success": "You're on the list! We'll notify you at launch.",
    "email.error": "Something went wrong. Please try again.",
    "email.invalidEmail": "Please enter a valid email address.",
    "email.submitting": "Submitting...",
  },

  ko: {
    "header.brand": "홈픽AI",
    "header.features": "주요 기능",
    "header.pricing": "요금 안내",
    "header.faq": "FAQ",
    "header.earlyAccess": "사전 등록",

    "event.badge": "100% 무료",
    "event.title": "지금 바로 무료로 시작하세요",
    "event.value": "",

    "hero.badge": "6개 언어 지원",
    "hero.title": "내 집의 모든 순간,\n기록하다.",
    "hero.desc":
      "입주부터 퇴실까지, 홈픽AI가 AI로 기록하고, 점검하고, 보호합니다. 보증금 분쟁도, 유지보수 이슈도 놓치지 마세요.",
    "hero.emailPlaceholder": "이메일을 입력하세요",
    "hero.cta": "Pro 1년 무료 받기",
    "hero.limitedSpots": "선착순 500명 한정",
    "hero.waitlistCount": "현재 {count}명이 대기 중입니다",
    "hero.spotsLeft": "500명 중 {count}자리 남음",
    "hero.note": "곧 출시됩니다 — 가장 먼저 알려드릴게요",

    "phone.greeting": "안녕하세요, 테스트유저님",
    "phone.title": "스마트 홈 기록 관리",
    "phone.myProperties": "내 집 현황",
    "phone.managed": "1건의 집이 관리중입니다",
    "phone.active": "관리중",
    "phone.moveOut": "퇴실 예정",
    "phone.addProperty": "내 집 등록",
    "phone.photos": "촬영하기",
    "phone.reports": "리포트",
    "phone.listLabel": "내 집 목록",
    "phone.address": "서울 강서구 강서로 375",
    "phone.nickname": "우리집",
    "phone.deposit": "보증금 $3,000 / 월 $50",
    "phone.status": "분석 완료",
    "phone.address2": "서울 종로구 북촌로5가길 3",
    "phone.deposit2": "보증금 1,000만원 / 월 50만원",
    "phone.status2": "종료",
    "phone.date": "~2036.12.31",
    "phone.tabHome": "홈",
    "phone.tabCamera": "촬영",
    "phone.tabMy": "마이",

    "features.badge": "주요 기능",
    "features.title": "강력한 기능,\n심플한 경험",
    "features.desc": "AI로 내 집을 관리하는 데 필요한 모든 것",
    "features.aiTitle": "AI 하자 점검",
    "features.aiDesc":
      "AI가 곰팡이, 균열, 누수 등을 감지합니다. 입퇴실 사진을 비교하여 분쟁을 해결하세요.",
    "features.timelineTitle": "스마트 사진 타임라인",
    "features.timelineDesc":
      "모든 사진이 공간별, 시간순으로 자동 정리됩니다. AI 점수와 하자 변화를 추적합니다.",
    "features.maintenanceTitle": "유지보수 기록",
    "features.maintenanceDesc":
      "수리 내역을 사진과 함께 기록하고, 비용을 추적하고, 집주인에게 공유할 리포트를 생성하세요.",
    "features.vaultTitle": "문서 보관함",
    "features.vaultDesc":
      "계약서, 영수증, 보험 문서를 스캔하여 보관합니다. AI OCR이 핵심 정보를 추출하고 계약 만료 알림을 보냅니다.",

    "lifecycle.badge": "주거 라이프사이클",
    "lifecycle.title": "모든 단계를 하나의 앱으로",
    "lifecycle.desc": "매물 탐색부터 퇴실까지 — 홈픽AI가 모두 커버합니다",
    "lifecycle.browseTitle": "탐색",
    "lifecycle.browseDesc":
      "계약 전 매물을 점검합니다. AI가 곰팡이, 균열, 누수를 감지합니다.",
    "lifecycle.moveInTitle": "입주",
    "lifecycle.moveInDesc":
      "타임스탬프와 GPS가 검증된 사진으로 모든 공간을 기록합니다.",
    "lifecycle.livingTitle": "거주",
    "lifecycle.livingDesc":
      "유지보수를 추적하고, 수리를 기록하고, 집의 모든 변화 타임라인을 유지합니다.",
    "lifecycle.moveOutTitle": "퇴실",
    "lifecycle.moveOutDesc":
      "AI가 입퇴실 사진을 비교합니다. 법적 참고용 PDF 리포트로 보증금을 보호하세요.",

    "worldwide.badge": "글로벌",
    "worldwide.title": "전 세계에서 사용 가능",
    "worldwide.desc": "홈픽AI는 전 세계 임차인을 위해 6개 언어를 지원합니다",

    "pricing.badge": "요금 안내",
    "pricing.title": "심플하고 투명한 요금제",
    "pricing.desc": "무료로 시작하세요. 업그레이드하면 무제한.",
    "pricing.free": "무료",
    "pricing.freePrice": "₩0",
    "pricing.freeSub": "1 내 집 · 30장 · AI 월 5회",
    "pricing.freeF1": "사진 30장 촬영",
    "pricing.freeF2": "AI 점검 리포트 — 무료",
    "pricing.freeF3": "서버 타임스탬프 & GPS",
    "pricing.freeF4": "AI 점검 월 5회",
    "pricing.pro": "Pro",
    "pricing.proPrice": "₩4,900/월",
    "pricing.proSub": "무제한 이용",
    "pricing.proF1": "무제한 사진 & 내 집",
    "pricing.proF2": "무제한 AI 점검*",
    "pricing.proF3": "OCR 문서 보관함",
    "pricing.proF4": "우선 지원",
    "pricing.proCta": "사전 등록하기",
    "pricing.fairUse": "* 공정이용: AI 점검 월 500회까지",

    "faq.title": "자주 묻는 질문",
    "faq.q1": "촬영한 사진은 어디에 저장되나요?",
    "faq.a1":
      "모든 사진은 AWS S3 서버에 암호화 저장됩니다. 계약 종료 후 5년간 보관되며, 이후 자동 삭제됩니다.",
    "faq.q2": "AI 분석 결과는 법적 효력이 있나요?",
    "faq.a2":
      "AI 분석 결과 자체는 법적 효력을 보장하지 않습니다. 다만 서버 인증 타임스탬프, GPS 검증 데이터가 포함된 리포트는 분쟁 시 유력한 참고자료로 활용할 수 있습니다.",
    "faq.q3": "리포트 비용은 얼마인가요?",
    "faq.a3":
      "리포트는 완전 무료입니다. 사진 촬영, AI 점검, 내 집 관리 모두 무료로 이용 가능합니다.",
    "faq.q4": "자연마모와 세입자 과실은 어떻게 구분하나요?",
    "faq.a4":
      "AI가 입주 시와 퇴실 시 사진을 비교하여, 벽지 변색·장판 눌림·도어 마모 등은 자연마모로, 새로운 스크래치·파손 등은 세입자 과실로 판정합니다.",

    "cta.title": "홈픽AI를 가장 먼저 만나보세요",
    "cta.desc": "사전 등록하시면 앱 출시 시 가장 먼저 알려드립니다.",
    "cta.note": "스팸 없음. 언제든 구독 해지 가능.",

    "footer.tagline": "AI로 관리하는 내 집",
    "footer.service": "서비스",
    "footer.legal": "법적 고지",
    "footer.terms": "이용약관",
    "footer.privacy": "개인정보처리방침",

    "email.success": "등록 완료! 출시 시 알려드리겠습니다.",
    "email.error": "문제가 발생했습니다. 다시 시도해주세요.",
    "email.invalidEmail": "올바른 이메일 주소를 입력해주세요.",
    "email.submitting": "등록 중...",
  },

  ja: {
    "header.brand": "homepic AI",
    "header.features": "機能",
    "header.pricing": "料金",
    "header.faq": "FAQ",
    "header.earlyAccess": "事前登録",

    "event.badge": "100% 無料",
    "event.title": "今すぐ無料で始めましょう",
    "event.value": "",

    "hero.badge": "6言語対応",
    "hero.title": "住まいの全てを、\n記録する。",
    "hero.desc":
      "入居から退去まで、homepic AIがAIで記録・検査・保護します。敷金トラブルもメンテナンス問題も見逃しません。",
    "hero.emailPlaceholder": "メールアドレスを入力",
    "hero.cta": "Pro 1年無料で入手",
    "hero.limitedSpots": "先着500名限定",
    "hero.waitlistCount": "現在{count}名が待機中です",
    "hero.spotsLeft": "500名中 残り{count}席",
    "hero.note": "まもなくリリース — いち早くお届けします",

    "phone.greeting": "こんにちは、Sarahさん",
    "phone.title": "住まいを守る",
    "phone.myProperties": "マイ物件",
    "phone.managed": "1件の物件を管理中",
    "phone.active": "管理中",
    "phone.moveOut": "退去",
    "phone.addProperty": "物件追加",
    "phone.photos": "撮影",
    "phone.reports": "レポート",
    "phone.address": "420 Broad Ave, Palisades Park, NJ",
    "phone.deposit": "敷金 $1,643 / 月額 $1,095",
    "phone.status": "分析済み",

    "features.badge": "主要機能",
    "features.title": "パワフルな機能、\nシンプルな体験",
    "features.desc": "AIで住まいを管理するために必要な全てが揃っています",
    "features.aiTitle": "AI住宅検査",
    "features.aiDesc":
      "AIがカビ、ひび割れ、水漏れなどを検知。入退去時の写真を比較してトラブルを解決します。",
    "features.timelineTitle": "スマートフォトタイムライン",
    "features.timelineDesc":
      "全ての写真が部屋別・時系列で自動整理されます。AIスコアと変化を追跡します。",
    "features.maintenanceTitle": "メンテナンス記録",
    "features.maintenanceDesc":
      "修理をタイムスタンプ付き写真で記録し、費用を追跡し、大家さんと共有できるレポートを作成します。",
    "features.vaultTitle": "書類保管庫",
    "features.vaultDesc":
      "契約書、領収書、保険書類をスキャンして保管。AI OCRが重要情報を抽出し、契約満了アラートを送信します。",

    "lifecycle.badge": "住まいのライフサイクル",
    "lifecycle.title": "全てのステージを一つのアプリで",
    "lifecycle.desc": "物件探しから退去まで — homepic AIが全てカバーします",
    "lifecycle.browseTitle": "検索",
    "lifecycle.browseDesc":
      "契約前に物件を検査。AIがカビ、ひび割れ、水漏れを検知します。",
    "lifecycle.moveInTitle": "入居",
    "lifecycle.moveInDesc":
      "タイムスタンプとGPS検証付き写真で全ての部屋を記録します。",
    "lifecycle.livingTitle": "居住",
    "lifecycle.livingDesc":
      "メンテナンスを追跡し、修理を記録し、住まいの変化タイムラインを維持します。",
    "lifecycle.moveOutTitle": "退去",
    "lifecycle.moveOutDesc":
      "AIが入退去写真を比較。法的参考用PDFレポートで敷金を守ります。",

    "worldwide.badge": "グローバル",
    "worldwide.title": "世界中で利用可能",
    "worldwide.desc":
      "homepic AIは世界中の入居者のために6言語をサポートしています",

    "pricing.badge": "料金",
    "pricing.title": "シンプルで透明な料金",
    "pricing.desc": "無料で始められます。アップグレードで無制限に。",
    "pricing.free": "無料",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "1物件 · 30枚 · AI月5回",
    "pricing.freeF1": "写真30枚撮影",
    "pricing.freeF2": "AI点検レポート — 無料",
    "pricing.freeF3": "サーバータイムスタンプ & GPS",
    "pricing.freeF4": "AI検査 月5回",
    "pricing.pro": "Pro",
    "pricing.proPrice": "$4.99/月",
    "pricing.proSub": "すべて無制限",
    "pricing.proF1": "無制限の写真 & 物件",
    "pricing.proF2": "無制限AI検査*",
    "pricing.proF3": "OCR書類保管庫",
    "pricing.proF4": "優先サポート",
    "pricing.proCta": "事前登録する",
    "pricing.fairUse": "* 公正利用: AI検査 月500回まで",

    "faq.title": "よくある質問",
    "faq.q1": "撮影した写真はどこに保存されますか？",
    "faq.a1":
      "全ての写真はAWS S3サーバーに暗号化して保存されます。契約終了後5年間保管され、その後自動削除されます。",
    "faq.q2": "AI分析結果には法的効力がありますか？",
    "faq.a2":
      "AI分析結果自体は法的効力を保証しません。ただし、サーバー認証タイムスタンプやGPS検証データを含むレポートは、紛争時の有力な参考資料として活用できます。",
    "faq.q3": "レポートの費用はいくらですか？",
    "faq.a3":
      "レポートの料金はリリース時に公開されます。アプリのダウンロード、写真撮影、物件管理機能は全て無料です。",
    "faq.q4": "自然劣化と入居者の過失はどう区別しますか？",
    "faq.a4":
      "AIが入居時と退去時の写真を比較し、壁紙の変色・床の凹み・ドアの摩耗などは自然劣化として、新しい傷・破損などは入居者の責任として判定します。",

    "cta.title": "homepic AIをいち早くお試しください",
    "cta.desc": "事前登録していただければ、アプリリリース時にお知らせします。",
    "cta.note": "スパムなし。いつでも解除可能。",

    "footer.tagline": "AIで管理する住まい",
    "footer.service": "サービス",
    "footer.legal": "法的事項",
    "footer.terms": "利用規約",
    "footer.privacy": "プライバシーポリシー",

    "email.success": "登録完了！リリース時にお知らせします。",
    "email.error": "エラーが発生しました。もう一度お試しください。",
    "email.invalidEmail": "有効なメールアドレスを入力してください。",
    "email.submitting": "送信中...",
  },

  zh: {
    "header.brand": "homepic AI",
    "header.features": "功能",
    "header.pricing": "价格",
    "header.faq": "常见问题",
    "header.earlyAccess": "预约注册",

    "event.badge": "100% 免费",
    "event.title": "立即免费开始保护您的家",
    "event.value": "",

    "hero.badge": "支持6种语言",
    "hero.title": "家的每一刻，\n尽在掌握。",
    "hero.desc":
      "从入住到退租，homepic AI用AI记录、检查、保护您的家。再也不会丢失押金或遗漏维修问题。",
    "hero.emailPlaceholder": "输入您的邮箱",
    "hero.cta": "免费获取Pro 1年",
    "hero.limitedSpots": "限前500名",
    "hero.waitlistCount": "目前{count}人正在等待",
    "hero.spotsLeft": "500名中剩余{count}个名额",
    "hero.note": "即将上线 — 第一时间通知您",

    "phone.greeting": "您好，Sarah",
    "phone.title": "守护您的家",
    "phone.myProperties": "我的房产",
    "phone.managed": "正在管理1个房产",
    "phone.active": "管理中",
    "phone.moveOut": "退租",
    "phone.addProperty": "添加房产",
    "phone.photos": "拍照",
    "phone.reports": "报告",
    "phone.address": "420 Broad Ave, Palisades Park, NJ",
    "phone.deposit": "押金 $1,643 / 月租 $1,095",
    "phone.status": "已分析",

    "features.badge": "核心功能",
    "features.title": "强大功能，\n简约体验",
    "features.desc": "AI管理您的家所需的一切",
    "features.aiTitle": "AI房屋检查",
    "features.aiDesc":
      "AI检测霉菌、裂缝、漏水等问题。比较入住和退租照片来解决纠纷。",
    "features.timelineTitle": "智能照片时间线",
    "features.timelineDesc":
      "所有照片按房间和时间自动整理。追踪AI评分和缺陷变化。",
    "features.maintenanceTitle": "维修记录",
    "features.maintenanceDesc":
      "用带时间戳的照片记录维修，追踪费用，生成可分享的报告给房东。",
    "features.vaultTitle": "文件保管库",
    "features.vaultDesc":
      "扫描保存租约、收据和保险文件。AI OCR提取关键信息并发送合同到期提醒。",

    "lifecycle.badge": "住房生命周期",
    "lifecycle.title": "一个应用，覆盖每个阶段",
    "lifecycle.desc": "从找房到退租 — homepic AI全面覆盖",
    "lifecycle.browseTitle": "浏览",
    "lifecycle.browseDesc": "签约前检查房产。AI检测霉菌、裂缝和水损。",
    "lifecycle.moveInTitle": "入住",
    "lifecycle.moveInDesc": "用带时间戳和GPS验证的照片记录每个房间。",
    "lifecycle.livingTitle": "居住",
    "lifecycle.livingDesc": "追踪维修，记录修缮，保持家的每一个变化时间线。",
    "lifecycle.moveOutTitle": "退租",
    "lifecycle.moveOutDesc":
      "AI比较入住和退租照片。获取法律参考PDF报告保护您的押金。",

    "worldwide.badge": "全球",
    "worldwide.title": "全球可用",
    "worldwide.desc": "homepic AI为全球租户提供6种语言支持",

    "pricing.badge": "价格",
    "pricing.title": "简单透明的定价",
    "pricing.desc": "免费开始。升级即可无限使用。",
    "pricing.free": "免费",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "1个房产 · 30张 · AI每月5次",
    "pricing.freeF1": "拍照30张",
    "pricing.freeF2": "AI检查报告 — 免费",
    "pricing.freeF3": "服务器时间戳 & GPS",
    "pricing.freeF4": "每月5次AI检查",
    "pricing.pro": "Pro",
    "pricing.proPrice": "$4.99/月",
    "pricing.proSub": "全部无限",
    "pricing.proF1": "无限照片 & 房产",
    "pricing.proF2": "无限AI检查*",
    "pricing.proF3": "OCR文件保管库",
    "pricing.proF4": "优先支持",
    "pricing.proCta": "预约注册",
    "pricing.fairUse": "* 公平使用: 每月最多500次AI检查",

    "faq.title": "常见问题",
    "faq.q1": "拍摄的照片存储在哪里？",
    "faq.a1":
      "所有照片都加密存储在AWS S3服务器上。合同结束后保留5年，之后自动删除。",
    "faq.q2": "AI分析结果有法律效力吗？",
    "faq.a2":
      "AI分析结果本身不具有法律效力。但包含服务器认证时间戳和GPS验证数据的报告可作为纠纷中的有力参考材料。",
    "faq.q3": "报告费用是多少？",
    "faq.a3":
      "报告价格将在上线时公布。应用下载、照片拍摄和房产管理功能均免费。",
    "faq.q4": "如何区分自然磨损和租户损坏？",
    "faq.a4":
      "AI比较入住和退租照片，将墙纸褪色、地板凹痕、门磨损等归类为自然磨损，将新划痕和损坏归类为租户责任。",

    "cta.title": "率先体验homepic AI",
    "cta.desc": "注册预约，应用上线时第一时间通知您。",
    "cta.note": "无垃圾邮件。随时退订。",

    "footer.tagline": "AI管理您的家",
    "footer.service": "服务",
    "footer.legal": "法律声明",
    "footer.terms": "服务条款",
    "footer.privacy": "隐私政策",

    "email.success": "注册成功！上线时会通知您。",
    "email.error": "出了点问题，请重试。",
    "email.invalidEmail": "请输入有效的邮箱地址。",
    "email.submitting": "提交中...",
  },

  es: {
    "header.brand": "homepic AI",
    "header.features": "Funciones",
    "header.pricing": "Precios",
    "header.faq": "FAQ",
    "header.earlyAccess": "Acceso anticipado",

    "event.badge": "100% GRATIS",
    "event.title": "Empieza a proteger tu hogar — totalmente gratis",
    "event.value": "",

    "hero.badge": "Disponible en 6 idiomas",
    "hero.title": "Cada momento\nde tu hogar,\ncapturado.",
    "hero.desc":
      "Desde la mudanza hasta la salida, homepic AI registra, inspecciona y protege tu hogar con IA — para que nunca pierdas una fianza ni pases por alto un problema de mantenimiento.",
    "hero.emailPlaceholder": "Ingresa tu email",
    "hero.cta": "Pro 1 año gratis",
    "hero.limitedSpots": "Limitado a los primeros 500",
    "hero.waitlistCount": "{count} personas están esperando",
    "hero.spotsLeft": "{count} lugares de 500 disponibles",
    "hero.note": "Próximamente — sé el primero en enterarte",

    "phone.greeting": "Hola, Sarah",
    "phone.title": "Tu hogar, protegido",
    "phone.myProperties": "Mis propiedades",
    "phone.managed": "1 propiedad(es) en gestión",
    "phone.active": "Activo",
    "phone.moveOut": "Salida",
    "phone.addProperty": "Agregar",
    "phone.photos": "Fotos",
    "phone.reports": "Reportes",
    "phone.address": "420 Broad Ave, Palisades Park, NJ",
    "phone.deposit": "Fianza $1,643 / Mensual $1,095",
    "phone.status": "Analizado",

    "features.badge": "Funciones principales",
    "features.title": "Funciones potentes,\nexperiencia simple",
    "features.desc":
      "Todo lo que necesitas para gestionar tu hogar — impulsado por IA",
    "features.aiTitle": "Inspección AI",
    "features.aiDesc":
      "La IA detecta moho, grietas y daños por agua. Compara fotos de entrada y salida para resolver disputas.",
    "features.timelineTitle": "Línea de tiempo inteligente",
    "features.timelineDesc":
      "Todas tus fotos ordenadas por habitación y tiempo automáticamente. Puntuaciones AI y seguimiento de cambios.",
    "features.maintenanceTitle": "Registro de mantenimiento",
    "features.maintenanceDesc":
      "Registra reparaciones con fotos con marca de tiempo, rastrea costos y genera reportes para tu arrendador.",
    "features.vaultTitle": "Bóveda de documentos",
    "features.vaultDesc":
      "Escanea y guarda contratos, recibos y seguros. AI OCR extrae información clave y envía alertas de vencimiento.",

    "lifecycle.badge": "Ciclo de vida del hogar",
    "lifecycle.title": "Una app para cada etapa",
    "lifecycle.desc":
      "Desde buscar tu próximo lugar hasta mudarte — homepic AI lo cubre todo",
    "lifecycle.browseTitle": "Buscar",
    "lifecycle.browseDesc":
      "Inspecciona propiedades antes de firmar. AI detecta moho, grietas y daños por agua.",
    "lifecycle.moveInTitle": "Entrada",
    "lifecycle.moveInDesc":
      "Registra cada habitación con fotos con marca de tiempo y GPS verificado.",
    "lifecycle.livingTitle": "Vivir",
    "lifecycle.livingDesc":
      "Rastrea mantenimiento, registra reparaciones y mantén una línea de tiempo de cada cambio.",
    "lifecycle.moveOutTitle": "Salida",
    "lifecycle.moveOutDesc":
      "La IA compara fotos de entrada y salida. Obtén un reporte PDF legal para proteger tu fianza.",

    "worldwide.badge": "Global",
    "worldwide.title": "Disponible en todo el mundo",
    "worldwide.desc":
      "homepic AI soporta 6 idiomas para inquilinos en todo el mundo",

    "pricing.badge": "Precios",
    "pricing.title": "Precios simples y transparentes",
    "pricing.desc": "Empieza gratis. Actualiza para acceso ilimitado.",
    "pricing.free": "Gratis",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "1 propiedad · 30 fotos · 5 IA/mes",
    "pricing.freeF1": "30 capturas de fotos",
    "pricing.freeF2": "Informes de inspección AI — gratis",
    "pricing.freeF3": "Marca de tiempo & GPS",
    "pricing.freeF4": "5 inspecciones AI al mes",
    "pricing.pro": "Pro",
    "pricing.proPrice": "$4.99/mes",
    "pricing.proSub": "Todo ilimitado",
    "pricing.proF1": "Fotos & propiedades ilimitadas",
    "pricing.proF2": "Inspecciones AI ilimitadas*",
    "pricing.proF3": "Bóveda de documentos con OCR",
    "pricing.proF4": "Soporte prioritario",
    "pricing.proCta": "Acceso anticipado",
    "pricing.fairUse": "* Uso justo: hasta 500 inspecciones AI al mes",

    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Dónde se almacenan mis fotos?",
    "faq.a1":
      "Todas las fotos se almacenan encriptadas en servidores AWS S3. Se conservan por 5 años después del fin del contrato y luego se eliminan automáticamente.",
    "faq.q2": "¿El análisis AI tiene validez legal?",
    "faq.a2":
      "El análisis AI en sí no tiene validez legal. Sin embargo, los reportes con marcas de tiempo autenticadas y datos de verificación GPS pueden servir como material de referencia en disputas.",
    "faq.q3": "¿Cuánto cuesta un reporte?",
    "faq.a3":
      "Los precios de reportes se anunciarán en el lanzamiento. La descarga de la app, captura de fotos y gestión de propiedades son gratuitas.",
    "faq.q4":
      "¿Cómo distingue la IA el desgaste natural del daño del inquilino?",
    "faq.a4":
      "La IA compara fotos de entrada y salida, clasificando decoloración de papel tapiz, marcas en el piso y desgaste de puertas como desgaste natural, mientras que nuevos rasguños y daños se clasifican como responsabilidad del inquilino.",

    "cta.title": "Sé el primero en probar homepic AI",
    "cta.desc":
      "Regístrate para acceso anticipado. Te notificaremos cuando la app se lance.",
    "cta.note": "Sin spam. Cancela cuando quieras.",

    "footer.tagline": "Tu hogar, gestionado con IA",
    "footer.service": "Servicio",
    "footer.legal": "Legal",
    "footer.terms": "Términos de servicio",
    "footer.privacy": "Política de privacidad",

    "email.success": "¡Estás en la lista! Te notificaremos en el lanzamiento.",
    "email.error": "Algo salió mal. Por favor intenta de nuevo.",
    "email.invalidEmail": "Por favor ingresa una dirección de email válida.",
    "email.submitting": "Enviando...",
  },

  de: {
    "header.brand": "homepic AI",
    "header.features": "Funktionen",
    "header.pricing": "Preise",
    "header.faq": "FAQ",
    "header.earlyAccess": "Früher Zugang",

    "event.badge": "100% KOSTENLOS",
    "event.title": "Schützen Sie Ihr Zuhause — völlig kostenlos",
    "event.value": "",

    "hero.badge": "Verfügbar in 6 Sprachen",
    "hero.title": "Jeden Moment\ndeines Zuhauses,\nfestgehalten.",
    "hero.desc":
      "Vom Einzug bis zum Auszug — homepic AI dokumentiert, prüft und schützt dein Zuhause mit KI. Nie wieder Kaution verlieren oder Wartungsprobleme übersehen.",
    "hero.emailPlaceholder": "E-Mail eingeben",
    "hero.cta": "Pro 1 Jahr kostenlos",
    "hero.limitedSpots": "Begrenzt auf die ersten 500",
    "hero.waitlistCount": "{count} Personen warten bereits",
    "hero.spotsLeft": "{count} von 500 Plätzen übrig",
    "hero.note": "Bald verfügbar — sei der Erste, der es erfährt",

    "phone.greeting": "Hallo, Sarah",
    "phone.title": "Dein Zuhause, geschützt",
    "phone.myProperties": "Meine Immobilien",
    "phone.managed": "1 Immobilie(n) verwaltet",
    "phone.active": "Aktiv",
    "phone.moveOut": "Auszug",
    "phone.addProperty": "Hinzufügen",
    "phone.photos": "Fotos",
    "phone.reports": "Berichte",
    "phone.address": "420 Broad Ave, Palisades Park, NJ",
    "phone.deposit": "Kaution $1.643 / Monatlich $1.095",
    "phone.status": "Analysiert",

    "features.badge": "Kernfunktionen",
    "features.title": "Leistungsstarke Funktionen,\neinfache Erfahrung",
    "features.desc":
      "Alles was du brauchst, um dein Zuhause zu verwalten — mit KI",
    "features.aiTitle": "KI-Hausinspektion",
    "features.aiDesc":
      "KI erkennt Schimmel, Risse und Wasserschäden. Vergleiche Ein- und Auszugsfotos zur Streitbeilegung.",
    "features.timelineTitle": "Smarte Foto-Timeline",
    "features.timelineDesc":
      "Alle Fotos automatisch nach Raum und Zeit sortiert. KI-Bewertungen und Veränderungen im Zeitverlauf.",
    "features.maintenanceTitle": "Wartungsprotokoll",
    "features.maintenanceDesc":
      "Reparaturen mit Zeitstempel-Fotos dokumentieren, Kosten verfolgen und teilbare Berichte für den Vermieter erstellen.",
    "features.vaultTitle": "Dokumententresor",
    "features.vaultDesc":
      "Mietverträge, Quittungen und Versicherungen scannen und aufbewahren. KI-OCR extrahiert Schlüsselinfos und sendet Vertragsablauf-Erinnerungen.",

    "lifecycle.badge": "Wohn-Lebenszyklus",
    "lifecycle.title": "Eine App für jede Phase",
    "lifecycle.desc":
      "Von der Wohnungssuche bis zum Auszug — homepic AI deckt alles ab",
    "lifecycle.browseTitle": "Suchen",
    "lifecycle.browseDesc":
      "Immobilien vor Vertragsunterzeichnung prüfen. KI erkennt Schimmel, Risse und Wasserschäden.",
    "lifecycle.moveInTitle": "Einzug",
    "lifecycle.moveInDesc":
      "Jeden Raum mit zeitgestempelten, GPS-verifizierten Fotos dokumentieren.",
    "lifecycle.livingTitle": "Wohnen",
    "lifecycle.livingDesc":
      "Wartung verfolgen, Reparaturen dokumentieren und eine Timeline jeder Veränderung führen.",
    "lifecycle.moveOutTitle": "Auszug",
    "lifecycle.moveOutDesc":
      "KI vergleicht Ein- und Auszugsfotos. Rechtsfähigen PDF-Bericht zum Schutz der Kaution erhalten.",

    "worldwide.badge": "Global",
    "worldwide.title": "Weltweit verfügbar",
    "worldwide.desc":
      "homepic AI unterstützt 6 Sprachen für Mieter auf der ganzen Welt",

    "pricing.badge": "Preise",
    "pricing.title": "Einfache, transparente Preise",
    "pricing.desc": "Kostenlos starten. Upgrade für unbegrenzten Zugang.",
    "pricing.free": "Kostenlos",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "1 Immobilie · 30 Fotos · 5 KI/Mon.",
    "pricing.freeF1": "30 Fotoaufnahmen",
    "pricing.freeF2": "KI-Inspektionsberichte — kostenlos",
    "pricing.freeF3": "Server-Zeitstempel & GPS",
    "pricing.freeF4": "5 KI-Inspektionen pro Monat",
    "pricing.pro": "Pro",
    "pricing.proPrice": "$4.99/Mo.",
    "pricing.proSub": "Alles unbegrenzt",
    "pricing.proF1": "Unbegrenzte Fotos & Immobilien",
    "pricing.proF2": "Unbegrenzte KI-Inspektionen*",
    "pricing.proF3": "Dokumententresor mit OCR",
    "pricing.proF4": "Prioritäts-Support",
    "pricing.proCta": "Früher Zugang",
    "pricing.fairUse": "* Faire Nutzung: bis zu 500 KI-Inspektionen/Monat",

    "faq.title": "Häufig gestellte Fragen",
    "faq.q1": "Wo werden meine Fotos gespeichert?",
    "faq.a1":
      "Alle Fotos werden verschlüsselt auf AWS S3-Servern gespeichert. Sie werden 5 Jahre nach Vertragsende aufbewahrt und danach automatisch gelöscht.",
    "faq.q2": "Ist die KI-Analyse rechtlich bindend?",
    "faq.a2":
      "Die KI-Analyse selbst ist nicht rechtlich bindend. Berichte mit serverauthentifizierten Zeitstempeln und GPS-Verifizierungsdaten können jedoch als starkes Referenzmaterial bei Streitigkeiten dienen.",
    "faq.q3": "Was kostet ein Bericht?",
    "faq.a3":
      "Die Berichtspreise werden bei Marktstart bekannt gegeben. App-Download, Fotoaufnahme und Immobilienverwaltung sind kostenlos.",
    "faq.q4": "Wie unterscheidet die KI normale Abnutzung von Mieterschäden?",
    "faq.a4":
      "Die KI vergleicht Ein- und Auszugsfotos und klassifiziert Tapetenverfärbungen, Bodeneindrücke und Türabnutzung als normale Abnutzung, während neue Kratzer und Schäden als Mieterverantwortung eingestuft werden.",

    "cta.title": "Sei der Erste, der homepic AI ausprobiert",
    "cta.desc":
      "Melde dich für den frühen Zugang an. Wir benachrichtigen dich beim Start.",
    "cta.note": "Kein Spam. Jederzeit abbestellbar.",

    "footer.tagline": "Dein Zuhause, mit KI verwaltet",
    "footer.service": "Service",
    "footer.legal": "Rechtliches",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzrichtlinie",

    "email.success":
      "Du bist auf der Liste! Wir benachrichtigen dich beim Start.",
    "email.error": "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    "email.invalidEmail": "Bitte gib eine gültige E-Mail-Adresse ein.",
    "email.submitting": "Wird gesendet...",
  },
};
