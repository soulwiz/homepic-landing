import type { Locale } from "./translations";

export const privacyTranslations: Record<Locale, Record<string, string>> = {
  en: {
    "privacy.pageTitle": "Privacy Policy - homepic AI",
    "privacy.title": "Privacy Policy",
    "privacy.effectiveDate": "Effective: March 1, 2026",
    "privacy.intro":
      'interstick Corp (hereinafter "the Company") establishes and discloses this Privacy Policy in accordance with the Personal Information Protection Act and other applicable laws, in order to protect users\' personal information and to promptly address related grievances.',

    // 제1조
    "privacy.article1.title":
      "Article 1 (Categories and Methods of Personal Information Collected)",
    "privacy.article1.paragraph1":
      "1. The Company collects the following personal information to provide its services.",
    "privacy.article1.category1": "1. Required Items",
    "privacy.article1.required1":
      "Social login information: nickname, email, and unique identifier from Kakao/Google/Apple accounts",
    "privacy.article1.required2":
      "Email login information: email, password (stored encrypted), name",
    "privacy.article1.required3":
      "Lease information: lease address, deposit, monthly rent, lease period, landlord name",
    "privacy.article1.category2": "2. Optional Items",
    "privacy.article1.optional1": "Contact number (phone number)",
    "privacy.article1.optional2": "Lease agreement photos",
    "privacy.article1.category3": "3. Automatically Collected Items",
    "privacy.article1.auto1":
      "GPS location data (for verifying match with lease address during photo capture)",
    "privacy.article1.auto2": "Captured photos and server timestamps",
    "privacy.article1.auto3":
      "Device information (OS version, app version, device model)",
    "privacy.article1.auto4": "Service usage records, access logs",
    "privacy.article1.paragraph2":
      "2. Collection methods: Direct input within the app, social login API, email registration, camera capture, GPS sensor",

    // 제2조
    "privacy.article2.title":
      "Article 2 (Purpose of Using Personal Information)",
    "privacy.article2.intro":
      "The Company uses collected personal information for the following purposes.",
    "privacy.article2.item1": "Member registration and identity verification",
    "privacy.article2.item2":
      "Capturing, storing, and managing lease defect evidence photos",
    "privacy.article2.item3":
      "AI-based (OpenAI GPT-4o Vision) defect detection and move-in/move-out comparative analysis",
    "privacy.article2.item4":
      "Generation of PDF defect evidence reports for legal reference",
    "privacy.article2.item5":
      "Ensuring photo reliability through GPS location verification",
    "privacy.article2.item6": "Payment processing and subscription management",
    "privacy.article2.item7":
      "Service improvement, statistical analysis, and customer support",

    // 제3조
    "privacy.article3.title":
      "Article 3 (Retention and Usage Period of Personal Information)",
    "privacy.article3.item1":
      "Lease-related data (photos, analysis results, reports): Retained for 5 years from the lease termination date (based on the statute of limitations for deposit return claims under the Housing Lease Protection Act)",
    "privacy.article3.item2":
      "Member information: Retained until membership withdrawal. Upon withdrawal request, data is destroyed without delay. However, if there is a legal obligation to retain data, it shall be retained for the applicable period.",
    "privacy.article3.item2.sub1":
      "Contract and payment records under the Electronic Commerce Act: 5 years",
    "privacy.article3.item2.sub2":
      "Access logs under the Protection of Communications Secrets Act: 3 months",
    "privacy.article3.item3":
      "Data is destroyed without delay after the retention period expires or the processing purpose is achieved.",

    // 제4조
    "privacy.article4.title":
      "Article 4 (Provision of Personal Information to Third Parties)",
    "privacy.article4.paragraph1":
      "1. The Company, in principle, does not provide users' personal information to third parties.",
    "privacy.article4.paragraph2":
      "2. Exceptions are made only in the following cases.",
    "privacy.article4.exception1": "When the user has given prior consent",
    "privacy.article4.exception2":
      "When required by law (court orders, investigative agency requests, etc.)",

    // 제5조
    "privacy.article5.title":
      "Article 5 (Entrustment of Personal Information Processing)",
    "privacy.article5.intro":
      "The Company entrusts personal information processing as follows to provide its services.",
    "privacy.article5.item1":
      "Supabase (AWS infrastructure): Database hosting and file storage",
    "privacy.article5.item2":
      "OpenAI: AI image analysis (defect detection and comparative analysis)",
    "privacy.article5.item3": "Kakao/Google/Apple: Social login authentication",
    "privacy.article5.note":
      "* The Company supervises and manages entrusted entities to ensure personal information is processed securely.",

    // 제6조
    "privacy.article6.title":
      "Article 6 (Measures to Ensure Security of Personal Information)",
    "privacy.article6.intro":
      "The Company takes the following measures to ensure the security of personal information.",
    "privacy.article6.item1":
      "Encrypted storage of sensitive information such as lease agreement photos and addresses",
    "privacy.article6.item2": "SSL/TLS communication encryption",
    "privacy.article6.item3":
      "Access permission management and access control based on authentication tokens (JWT)",
    "privacy.article6.item4": "Secure cloud storage (AWS S3) for photo files",
    "privacy.article6.item5":
      "Prevention of photo timestamp tampering through server timestamps",
    "privacy.article6.item6":
      "Regular security inspections and vulnerability assessments",

    // 제7조
    "privacy.article7.title":
      "Article 7 (Users' Rights and How to Exercise Them)",
    "privacy.article7.paragraph1":
      "1. Users may exercise the following rights at any time.",
    "privacy.article7.right1": "Request to access personal information",
    "privacy.article7.right2": "Request to correct errors",
    "privacy.article7.right3": "Request for deletion",
    "privacy.article7.right4": "Request to suspend processing",
    "privacy.article7.paragraph2":
      "2. Rights may be exercised through My Page within the app or via customer support (support@interstick.co.kr).",
    "privacy.article7.paragraph3":
      "3. Upon membership withdrawal, personal information is destroyed without delay, except where retention is required by law.",

    // 제8조
    "privacy.article8.title": "Article 8 (Collection of Location Information)",
    "privacy.article8.item1":
      "The Company collects GPS location information during photo capture to verify whether the location matches the lease address.",
    "privacy.article8.item2":
      "Location information is collected only at the time of capture on a one-time basis; no real-time tracking is performed.",
    "privacy.article8.item3":
      "Users may deny location permissions through device settings, in which case the location verification feature will be limited.",

    // 제9조
    "privacy.article9.title":
      "Article 9 (Installation, Operation, and Rejection of Automatic Collection Devices)",
    "privacy.article9.content":
      "The Company may automatically collect device identification information, access logs, and similar data during service use. Users may refuse this through device settings, but some services may be limited if refused.",

    // 제10조
    "privacy.article10.title":
      "Article 10 (Personal Information Protection Officer)",
    "privacy.article10.intro":
      "The Company's Personal Information Protection Officer is as follows.",
    "privacy.article10.company": "Company: interstick Corp",
    "privacy.article10.email": "Email: privacy@interstick.co.kr",
    "privacy.article10.inquiry": "Privacy inquiries: support@interstick.co.kr",

    // 제11조
    "privacy.article11.title":
      "Article 11 (Remedies for Infringement of Rights)",
    "privacy.article11.intro":
      "If you wish to receive remedies for damages caused by personal information infringement, you may contact the following organizations.",
    "privacy.article11.org1":
      "Personal Information Dispute Mediation Committee: 1833-6972 (www.kopico.go.kr)",
    "privacy.article11.org2":
      "Personal Information Infringement Report Center: 118 (privacy.kisa.or.kr)",
    "privacy.article11.org3":
      "Supreme Prosecutors' Office Cyber Investigation Division: 1301 (www.spo.go.kr)",
    "privacy.article11.org4":
      "National Police Agency Cyber Investigation Bureau: 182 (ecrm.cyber.go.kr)",

    // 제12조
    "privacy.article12.title": "Article 12 (Changes to the Privacy Policy)",
    "privacy.article12.content":
      "This Privacy Policy takes effect on March 1, 2026. Any changes will be notified in advance through in-app announcements.",

    // 회사명
    "privacy.company": "interstick Corp",
  },

  ko: {
    "privacy.pageTitle": "개인정보처리방침 - 홈픽AI",
    "privacy.title": "개인정보 처리방침",
    "privacy.effectiveDate": "시행일: 2026년 3월 1일",
    "privacy.intro":
      '주식회사 인터스틱(이하 "회사")은 「개인정보 보호법」 등 관련 법령에 따라 이용자의 개인정보를 보호하고, 이와 관련된 고충을 신속하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.',

    // 제1조
    "privacy.article1.title": "제1조 (수집하는 개인정보 항목 및 수집 방법)",
    "privacy.article1.paragraph1":
      "① 회사는 서비스 제공을 위해 다음 개인정보를 수집합니다.",
    "privacy.article1.category1": "1. 필수 항목",
    "privacy.article1.required1":
      "소셜 로그인 정보: 카카오/Google/Apple 계정의 닉네임, 이메일, 고유 식별자",
    "privacy.article1.required2":
      "이메일 로그인 정보: 이메일, 비밀번호(암호화 저장), 이름",
    "privacy.article1.required3":
      "계약 정보: 임대차 주소, 보증금, 월세, 계약 기간, 임대인 성명",
    "privacy.article1.category2": "2. 선택 항목",
    "privacy.article1.optional1": "연락처(전화번호)",
    "privacy.article1.optional2": "계약서 사진",
    "privacy.article1.category3": "3. 자동 수집 항목",
    "privacy.article1.auto1": "GPS 위치정보 (촬영 시 계약 주소 일치 검증 목적)",
    "privacy.article1.auto2": "촬영 사진 및 서버 타임스탬프",
    "privacy.article1.auto3": "기기 정보 (OS 버전, 앱 버전, 디바이스 모델)",
    "privacy.article1.auto4": "서비스 이용 기록, 접속 로그",
    "privacy.article1.paragraph2":
      "② 수집 방법: 앱 내 직접 입력, 소셜 로그인 API, 이메일 회원가입, 카메라 촬영, GPS 센서",

    // 제2조
    "privacy.article2.title": "제2조 (개인정보의 이용 목적)",
    "privacy.article2.intro":
      "회사는 수집한 개인정보를 다음 목적으로 이용합니다.",
    "privacy.article2.item1": "회원 가입 및 본인 확인",
    "privacy.article2.item2": "임대차 하자 증거 사진 촬영·저장·관리",
    "privacy.article2.item3":
      "AI(OpenAI GPT-4o Vision) 기반 하자 감지 및 입퇴실 비교 분석",
    "privacy.article2.item4": "법적 참고용 PDF 하자 증거 리포트 생성",
    "privacy.article2.item5": "GPS 위치 검증을 통한 촬영 신뢰성 확보",
    "privacy.article2.item6": "결제 처리 및 구독 관리",
    "privacy.article2.item7": "서비스 개선, 통계 분석, 고객 지원",

    // 제3조
    "privacy.article3.title": "제3조 (개인정보의 보유 및 이용 기간)",
    "privacy.article3.item1":
      "계약 관련 데이터(사진, 분석 결과, 리포트): 계약 종료일로부터 5년간 보관 (주택임대차보호법상 보증금 반환 청구권 소멸시효 기준)",
    "privacy.article3.item2":
      "회원 정보: 회원 탈퇴 시까지 보유하며, 탈퇴 요청 시 지체 없이 파기합니다. 다만 법령에 따른 보관 의무가 있는 경우 해당 기간까지 보관합니다.",
    "privacy.article3.item2.sub1": "전자상거래법에 따른 계약·결제 기록: 5년",
    "privacy.article3.item2.sub2": "통신비밀보호법에 따른 접속 로그: 3개월",
    "privacy.article3.item3":
      "보유 기간 경과 또는 처리 목적 달성 후 지체 없이 파기합니다.",

    // 제4조
    "privacy.article4.title": "제4조 (개인정보의 제3자 제공)",
    "privacy.article4.paragraph1":
      "① 회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.",
    "privacy.article4.paragraph2": "② 다음 경우에 한하여 예외로 합니다.",
    "privacy.article4.exception1": "이용자가 사전에 동의한 경우",
    "privacy.article4.exception2":
      "법령에 의한 요청이 있는 경우 (법원 명령, 수사기관 요청 등)",

    // 제5조
    "privacy.article5.title": "제5조 (개인정보 처리의 위탁)",
    "privacy.article5.intro":
      "회사는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁합니다.",
    "privacy.article5.item1":
      "Supabase (AWS 인프라): 데이터베이스 호스팅 및 파일 스토리지",
    "privacy.article5.item2": "OpenAI: AI 이미지 분석 (하자 감지 및 비교 분석)",
    "privacy.article5.item3": "카카오/Google/Apple: 소셜 로그인 인증",
    "privacy.article5.note":
      "※ 위탁 업무 수행 시 개인정보가 안전하게 처리되도록 관리·감독합니다.",

    // 제6조
    "privacy.article6.title": "제6조 (개인정보의 안전성 확보 조치)",
    "privacy.article6.intro":
      "회사는 개인정보의 안전성 확보를 위해 다음 조치를 취합니다.",
    "privacy.article6.item1": "계약서 사진, 주소 등 민감 정보의 암호화 저장",
    "privacy.article6.item2": "SSL/TLS 통신 암호화",
    "privacy.article6.item3": "접근 권한 관리 및 인증 토큰(JWT) 기반 접근 통제",
    "privacy.article6.item4":
      "사진 파일의 안전한 클라우드 스토리지(AWS S3) 저장",
    "privacy.article6.item5": "서버 타임스탬프를 통한 촬영 시점 위변조 방지",
    "privacy.article6.item6": "정기적인 보안 점검 및 취약점 진단",

    // 제7조
    "privacy.article7.title": "제7조 (이용자의 권리와 행사 방법)",
    "privacy.article7.paragraph1":
      "① 이용자는 언제든지 다음 권리를 행사할 수 있습니다.",
    "privacy.article7.right1": "개인정보 열람 요구",
    "privacy.article7.right2": "오류 정정 요구",
    "privacy.article7.right3": "삭제 요구",
    "privacy.article7.right4": "처리 정지 요구",
    "privacy.article7.paragraph2":
      "② 권리 행사는 앱 내 마이페이지 또는 고객센터(support@interstick.co.kr)를 통해 가능합니다.",
    "privacy.article7.paragraph3":
      "③ 회원 탈퇴 시 개인정보는 법령상 보관 의무가 있는 경우를 제외하고 지체 없이 파기됩니다.",

    // 제8조
    "privacy.article8.title": "제8조 (위치정보의 수집)",
    "privacy.article8.item1":
      "회사는 촬영 시 GPS 위치정보를 수집하여 계약 주소와의 일치 여부를 검증합니다.",
    "privacy.article8.item2":
      "위치정보는 촬영 시점에만 일회성으로 수집되며, 별도의 실시간 추적은 하지 않습니다.",
    "privacy.article8.item3":
      "이용자는 기기 설정에서 위치 권한을 거부할 수 있으며, 이 경우 위치 검증 기능이 제한됩니다.",

    // 제9조
    "privacy.article9.title": "제9조 (자동 수집 장치의 설치·운영 및 거부)",
    "privacy.article9.content":
      "회사는 서비스 이용 과정에서 기기 식별 정보, 접속 로그 등을 자동으로 수집할 수 있습니다. 이용자는 기기 설정을 통해 이를 거부할 수 있으며, 거부 시 일부 서비스 이용이 제한될 수 있습니다.",

    // 제10조
    "privacy.article10.title": "제10조 (개인정보 보호책임자)",
    "privacy.article10.intro": "회사의 개인정보 보호책임자는 다음과 같습니다.",
    "privacy.article10.company": "회사명: 주식회사 인터스틱 (interstick Corp)",
    "privacy.article10.email": "이메일: privacy@interstick.co.kr",
    "privacy.article10.inquiry": "개인정보 관련 문의: support@interstick.co.kr",

    // 제11조
    "privacy.article11.title": "제11조 (권익 침해 구제 방법)",
    "privacy.article11.intro":
      "개인정보 침해로 인한 피해 구제를 받으시려면 아래 기관에 문의하실 수 있습니다.",
    "privacy.article11.org1":
      "개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)",
    "privacy.article11.org2": "개인정보침해신고센터: 118 (privacy.kisa.or.kr)",
    "privacy.article11.org3": "대검찰청 사이버수사과: 1301 (www.spo.go.kr)",
    "privacy.article11.org4": "경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)",

    // 제12조
    "privacy.article12.title": "제12조 (개인정보 처리방침 변경)",
    "privacy.article12.content":
      "이 개인정보 처리방침은 2026년 3월 1일부터 적용됩니다. 변경 시 앱 내 공지사항을 통해 사전 고지합니다.",

    // 회사명
    "privacy.company": "주식회사 인터스틱 (interstick Corp)",
  },

  ja: {
    "privacy.pageTitle": "プライバシーポリシー - homepic AI",
    "privacy.title": "プライバシーポリシー",
    "privacy.effectiveDate": "施行日: 2026年3月1日",
    "privacy.intro":
      "株式会社インタースティック（以下「当社」）は、「個人情報保護法」等の関連法令に基づき、利用者の個人情報を保護し、関連する苦情を迅速に処理するため、以下のとおり個人情報処理方針を策定・公開します。",

    // 第1条
    "privacy.article1.title": "第1条（収集する個人情報の項目および収集方法）",
    "privacy.article1.paragraph1":
      "① 当社はサービス提供のため、以下の個人情報を収集します。",
    "privacy.article1.category1": "1. 必須項目",
    "privacy.article1.required1":
      "ソーシャルログイン情報：Kakao/Google/Appleアカウントのニックネーム、メールアドレス、固有識別子",
    "privacy.article1.required2":
      "メールログイン情報：メールアドレス、パスワード（暗号化保存）、氏名",
    "privacy.article1.required3":
      "契約情報：賃貸住所、敷金、月額賃料、契約期間、賃貸人氏名",
    "privacy.article1.category2": "2. 任意項目",
    "privacy.article1.optional1": "連絡先（電話番号）",
    "privacy.article1.optional2": "契約書の写真",
    "privacy.article1.category3": "3. 自動収集項目",
    "privacy.article1.auto1":
      "GPS位置情報（撮影時に契約住所との一致を検証する目的）",
    "privacy.article1.auto2": "撮影写真およびサーバータイムスタンプ",
    "privacy.article1.auto3":
      "端末情報（OSバージョン、アプリバージョン、デバイスモデル）",
    "privacy.article1.auto4": "サービス利用記録、アクセスログ",
    "privacy.article1.paragraph2":
      "② 収集方法：アプリ内での直接入力、ソーシャルログインAPI、メール会員登録、カメラ撮影、GPSセンサー",

    // 第2条
    "privacy.article2.title": "第2条（個人情報の利用目的）",
    "privacy.article2.intro":
      "当社は収集した個人情報を以下の目的で利用します。",
    "privacy.article2.item1": "会員登録および本人確認",
    "privacy.article2.item2": "賃貸物件の瑕疵証拠写真の撮影・保存・管理",
    "privacy.article2.item3":
      "AI（OpenAI GPT-4o Vision）による瑕疵検出および入退去比較分析",
    "privacy.article2.item4": "法的参考用PDF瑕疵証拠レポートの生成",
    "privacy.article2.item5": "GPS位置検証による撮影信頼性の確保",
    "privacy.article2.item6": "決済処理およびサブスクリプション管理",
    "privacy.article2.item7": "サービス改善、統計分析、カスタマーサポート",

    // 第3条
    "privacy.article3.title": "第3条（個人情報の保有および利用期間）",
    "privacy.article3.item1":
      "契約関連データ（写真、分析結果、レポート）：契約終了日から5年間保管（住宅賃貸借保護法に基づく敷金返還請求権の消滅時効基準）",
    "privacy.article3.item2":
      "会員情報：退会時まで保有し、退会要請時は遅滞なく破棄します。ただし、法令に基づく保管義務がある場合は当該期間まで保管します。",
    "privacy.article3.item2.sub1": "電子商取引法に基づく契約・決済記録：5年",
    "privacy.article3.item2.sub2": "通信秘密保護法に基づくアクセスログ：3か月",
    "privacy.article3.item3":
      "保有期間の経過または処理目的の達成後、遅滞なく破棄します。",

    // 第4条
    "privacy.article4.title": "第4条（個人情報の第三者提供）",
    "privacy.article4.paragraph1":
      "① 当社は原則として、利用者の個人情報を外部に提供しません。",
    "privacy.article4.paragraph2": "② 以下の場合に限り例外とします。",
    "privacy.article4.exception1": "利用者が事前に同意した場合",
    "privacy.article4.exception2":
      "法令による要請がある場合（裁判所命令、捜査機関の要請等）",

    // 第5条
    "privacy.article5.title": "第5条（個人情報処理の委託）",
    "privacy.article5.intro":
      "当社はサービス提供のため、以下のとおり個人情報処理を委託しています。",
    "privacy.article5.item1":
      "Supabase（AWSインフラ）：データベースホスティングおよびファイルストレージ",
    "privacy.article5.item2": "OpenAI：AI画像分析（瑕疵検出および比較分析）",
    "privacy.article5.item3": "Kakao/Google/Apple：ソーシャルログイン認証",
    "privacy.article5.note":
      "※ 委託業務の遂行において個人情報が安全に処理されるよう管理・監督します。",

    // 第6条
    "privacy.article6.title": "第6条（個人情報の安全性確保措置）",
    "privacy.article6.intro":
      "当社は個人情報の安全性確保のために以下の措置を講じます。",
    "privacy.article6.item1": "契約書の写真、住所等の機密情報の暗号化保存",
    "privacy.article6.item2": "SSL/TLS通信の暗号化",
    "privacy.article6.item3":
      "アクセス権限管理および認証トークン（JWT）に基づくアクセス制御",
    "privacy.article6.item4":
      "写真ファイルの安全なクラウドストレージ（AWS S3）での保存",
    "privacy.article6.item5":
      "サーバータイムスタンプによる撮影時点の改ざん防止",
    "privacy.article6.item6": "定期的なセキュリティ検査および脆弱性診断",

    // 第7条
    "privacy.article7.title": "第7条（利用者の権利と行使方法）",
    "privacy.article7.paragraph1":
      "① 利用者はいつでも以下の権利を行使できます。",
    "privacy.article7.right1": "個人情報の閲覧要求",
    "privacy.article7.right2": "誤り訂正の要求",
    "privacy.article7.right3": "削除の要求",
    "privacy.article7.right4": "処理停止の要求",
    "privacy.article7.paragraph2":
      "② 権利行使は、アプリ内のマイページまたはカスタマーセンター（support@interstick.co.kr）を通じて行えます。",
    "privacy.article7.paragraph3":
      "③ 退会時、個人情報は法令上の保管義務がある場合を除き、遅滞なく破棄されます。",

    // 第8条
    "privacy.article8.title": "第8条（位置情報の収集）",
    "privacy.article8.item1":
      "当社は撮影時にGPS位置情報を収集し、契約住所との一致を検証します。",
    "privacy.article8.item2":
      "位置情報は撮影時点のみ一回限り収集され、リアルタイムの追跡は行いません。",
    "privacy.article8.item3":
      "利用者は端末設定で位置情報の権限を拒否できます。その場合、位置検証機能が制限されます。",

    // 第9条
    "privacy.article9.title": "第9条（自動収集装置の設置・運営および拒否）",
    "privacy.article9.content":
      "当社はサービス利用の過程で、端末識別情報やアクセスログ等を自動的に収集する場合があります。利用者は端末設定を通じてこれを拒否できますが、拒否した場合、一部のサービス利用が制限される場合があります。",

    // 第10条
    "privacy.article10.title": "第10条（個人情報保護責任者）",
    "privacy.article10.intro": "当社の個人情報保護責任者は以下のとおりです。",
    "privacy.article10.company":
      "会社名：株式会社インタースティック（interstick Corp）",
    "privacy.article10.email": "メール：privacy@interstick.co.kr",
    "privacy.article10.inquiry":
      "個人情報に関するお問い合わせ：support@interstick.co.kr",

    // 第11条
    "privacy.article11.title": "第11条（権益侵害の救済方法）",
    "privacy.article11.intro":
      "個人情報の侵害による被害の救済を受けるには、以下の機関にお問い合わせください。",
    "privacy.article11.org1":
      "個人情報紛争調停委員会：1833-6972（www.kopico.go.kr）",
    "privacy.article11.org2":
      "個人情報侵害通報センター：118（privacy.kisa.or.kr）",
    "privacy.article11.org3": "大検察庁サイバー捜査課：1301（www.spo.go.kr）",
    "privacy.article11.org4": "警察庁サイバー捜査局：182（ecrm.cyber.go.kr）",

    // 第12条
    "privacy.article12.title": "第12条（個人情報処理方針の変更）",
    "privacy.article12.content":
      "この個人情報処理方針は2026年3月1日から適用されます。変更時はアプリ内のお知らせを通じて事前に告知します。",

    // 会社名
    "privacy.company": "株式会社インタースティック（interstick Corp）",
  },

  zh: {
    "privacy.pageTitle": "隐私政策 - homepic AI",
    "privacy.title": "隐私政策",
    "privacy.effectiveDate": "生效日期：2026年3月1日",
    "privacy.intro":
      "株式会社interstick（以下简称\u201C公司\u201D）根据《个人信息保护法》等相关法律法规，为保护用户的个人信息并迅速处理相关投诉，特制定并公布以下个人信息处理方针。",

    // 第1条
    "privacy.article1.title": "第1条（收集的个人信息项目及收集方式）",
    "privacy.article1.paragraph1": "① 公司为提供服务，收集以下个人信息。",
    "privacy.article1.category1": "1. 必填项",
    "privacy.article1.required1":
      "社交登录信息：Kakao/Google/Apple账户的昵称、电子邮件、唯一标识符",
    "privacy.article1.required2":
      "电子邮件登录信息：电子邮件、密码（加密存储）、姓名",
    "privacy.article1.required3":
      "合同信息：租赁地址、押金、月租、合同期限、出租人姓名",
    "privacy.article1.category2": "2. 选填项",
    "privacy.article1.optional1": "联系方式（电话号码）",
    "privacy.article1.optional2": "合同照片",
    "privacy.article1.category3": "3. 自动收集项",
    "privacy.article1.auto1": "GPS位置信息（用于拍摄时验证与合同地址的匹配）",
    "privacy.article1.auto2": "拍摄照片及服务器时间戳",
    "privacy.article1.auto3": "设备信息（操作系统版本、应用版本、设备型号）",
    "privacy.article1.auto4": "服务使用记录、访问日志",
    "privacy.article1.paragraph2":
      "② 收集方式：应用内直接输入、社交登录API、电子邮件注册、相机拍摄、GPS传感器",

    // 第2条
    "privacy.article2.title": "第2条（个人信息的使用目的）",
    "privacy.article2.intro": "公司将收集的个人信息用于以下目的。",
    "privacy.article2.item1": "会员注册及身份验证",
    "privacy.article2.item2": "租赁缺陷证据照片的拍摄、存储和管理",
    "privacy.article2.item3":
      "基于AI（OpenAI GPT-4o Vision）的缺陷检测和入住/退房对比分析",
    "privacy.article2.item4": "生成用于法律参考的PDF缺陷证据报告",
    "privacy.article2.item5": "通过GPS位置验证确保拍摄可靠性",
    "privacy.article2.item6": "支付处理及订阅管理",
    "privacy.article2.item7": "服务改进、统计分析、客户支持",

    // 第3条
    "privacy.article3.title": "第3条（个人信息的保留及使用期限）",
    "privacy.article3.item1":
      "合同相关数据（照片、分析结果、报告）：自合同终止日起保留5年（根据《住宅租赁保护法》押金返还请求权的诉讼时效）",
    "privacy.article3.item2":
      "会员信息：保留至会员退出时止，退出申请时立即销毁。但如有法律规定的保留义务，则保留至相应期限。",
    "privacy.article3.item2.sub1": "根据《电子商务法》的合同及支付记录：5年",
    "privacy.article3.item2.sub2": "根据《通信秘密保护法》的访问日志：3个月",
    "privacy.article3.item3": "保留期限届满或处理目的达成后，立即销毁。",

    // 第4条
    "privacy.article4.title": "第4条（向第三方提供个人信息）",
    "privacy.article4.paragraph1": "① 公司原则上不向外部提供用户的个人信息。",
    "privacy.article4.paragraph2": "② 仅在以下情况下例外处理。",
    "privacy.article4.exception1": "用户事先同意的情况",
    "privacy.article4.exception2": "法律要求的情况（法院命令、侦查机关要求等）",

    // 第5条
    "privacy.article5.title": "第5条（个人信息处理的委托）",
    "privacy.article5.intro": "公司为提供服务，按以下方式委托个人信息处理。",
    "privacy.article5.item1": "Supabase（AWS基础设施）：数据库托管及文件存储",
    "privacy.article5.item2": "OpenAI：AI图像分析（缺陷检测及对比分析）",
    "privacy.article5.item3": "Kakao/Google/Apple：社交登录认证",
    "privacy.article5.note":
      "※ 在执行委托业务时，公司对个人信息的安全处理进行管理和监督。",

    // 第6条
    "privacy.article6.title": "第6条（确保个人信息安全的措施）",
    "privacy.article6.intro": "公司采取以下措施确保个人信息的安全。",
    "privacy.article6.item1": "合同照片、地址等敏感信息的加密存储",
    "privacy.article6.item2": "SSL/TLS通信加密",
    "privacy.article6.item3": "访问权限管理及基于认证令牌（JWT）的访问控制",
    "privacy.article6.item4": "照片文件安全存储于云存储（AWS S3）",
    "privacy.article6.item5": "通过服务器时间戳防止拍摄时间篡改",
    "privacy.article6.item6": "定期安全检查及漏洞诊断",

    // 第7条
    "privacy.article7.title": "第7条（用户的权利及行使方法）",
    "privacy.article7.paragraph1": "① 用户可随时行使以下权利。",
    "privacy.article7.right1": "要求查阅个人信息",
    "privacy.article7.right2": "要求更正错误",
    "privacy.article7.right3": "要求删除",
    "privacy.article7.right4": "要求停止处理",
    "privacy.article7.paragraph2":
      "② 可通过应用内的\u201C我的页面\u201D或客服中心（support@interstick.co.kr）行使权利。",
    "privacy.article7.paragraph3":
      "③ 退出会员时，除法律规定的保留义务外，个人信息将立即销毁。",

    // 第8条
    "privacy.article8.title": "第8条（位置信息的收集）",
    "privacy.article8.item1":
      "公司在拍摄时收集GPS位置信息，用于验证与合同地址的匹配情况。",
    "privacy.article8.item2": "位置信息仅在拍摄时一次性收集，不进行实时追踪。",
    "privacy.article8.item3":
      "用户可在设备设置中拒绝位置权限，在此情况下位置验证功能将受到限制。",

    // 第9条
    "privacy.article9.title": "第9条（自动收集装置的安装、运营及拒绝）",
    "privacy.article9.content":
      "公司在服务使用过程中可能自动收集设备识别信息、访问日志等。用户可通过设备设置拒绝，但拒绝后部分服务的使用可能受到限制。",

    // 第10条
    "privacy.article10.title": "第10条（个人信息保护负责人）",
    "privacy.article10.intro": "公司的个人信息保护负责人如下。",
    "privacy.article10.company":
      "公司名称：株式会社interstick（interstick Corp）",
    "privacy.article10.email": "电子邮件：privacy@interstick.co.kr",
    "privacy.article10.inquiry": "个人信息相关咨询：support@interstick.co.kr",

    // 第11条
    "privacy.article11.title": "第11条（权益侵害的救济方法）",
    "privacy.article11.intro": "如因个人信息侵害需要获得救济，可咨询以下机构。",
    "privacy.article11.org1":
      "个人信息纠纷调解委员会：1833-6972（www.kopico.go.kr）",
    "privacy.article11.org2": "个人信息侵害举报中心：118（privacy.kisa.or.kr）",
    "privacy.article11.org3": "大检察厅网络犯罪调查科：1301（www.spo.go.kr）",
    "privacy.article11.org4": "警察厅网络犯罪调查局：182（ecrm.cyber.go.kr）",

    // 第12条
    "privacy.article12.title": "第12条（个人信息处理方针的变更）",
    "privacy.article12.content":
      "本个人信息处理方针自2026年3月1日起适用。变更时将通过应用内公告提前通知。",

    // 公司名
    "privacy.company": "株式会社interstick（interstick Corp）",
  },

  es: {
    "privacy.pageTitle": "Pol\u00edtica de Privacidad - homepic AI",
    "privacy.title": "Pol\u00edtica de Privacidad",
    "privacy.effectiveDate": "Fecha de vigencia: 1 de marzo de 2026",
    "privacy.intro":
      'interstick Corp (en adelante, "la Empresa") establece y publica la presente Pol\u00edtica de Privacidad de conformidad con la Ley de Protecci\u00f3n de Informaci\u00f3n Personal y dem\u00e1s legislaci\u00f3n aplicable, con el fin de proteger la informaci\u00f3n personal de los usuarios y resolver con prontitud las quejas relacionadas.',

    // Art\u00edculo 1
    "privacy.article1.title":
      "Art\u00edculo 1 (Categor\u00edas y m\u00e9todos de recogida de informaci\u00f3n personal)",
    "privacy.article1.paragraph1":
      "1. La Empresa recoge la siguiente informaci\u00f3n personal para la prestaci\u00f3n de sus servicios.",
    "privacy.article1.category1": "1. Datos obligatorios",
    "privacy.article1.required1":
      "Informaci\u00f3n de inicio de sesi\u00f3n social: apodo, correo electr\u00f3nico e identificador \u00fanico de cuentas Kakao/Google/Apple",
    "privacy.article1.required2":
      "Informaci\u00f3n de inicio de sesi\u00f3n por correo electr\u00f3nico: correo electr\u00f3nico, contrase\u00f1a (almacenada cifrada), nombre",
    "privacy.article1.required3":
      "Informaci\u00f3n del contrato: direcci\u00f3n del arrendamiento, dep\u00f3sito, alquiler mensual, per\u00edodo del contrato, nombre del arrendador",
    "privacy.article1.category2": "2. Datos opcionales",
    "privacy.article1.optional1": "N\u00famero de contacto (tel\u00e9fono)",
    "privacy.article1.optional2": "Fotos del contrato de arrendamiento",
    "privacy.article1.category3": "3. Datos recopilados autom\u00e1ticamente",
    "privacy.article1.auto1":
      "Datos de ubicaci\u00f3n GPS (para verificar la coincidencia con la direcci\u00f3n del contrato durante la captura de fotos)",
    "privacy.article1.auto2":
      "Fotos capturadas y marcas de tiempo del servidor",
    "privacy.article1.auto3":
      "Informaci\u00f3n del dispositivo (versi\u00f3n del SO, versi\u00f3n de la app, modelo del dispositivo)",
    "privacy.article1.auto4":
      "Registros de uso del servicio, registros de acceso",
    "privacy.article1.paragraph2":
      "2. M\u00e9todos de recogida: entrada directa en la aplicaci\u00f3n, API de inicio de sesi\u00f3n social, registro por correo electr\u00f3nico, captura con c\u00e1mara, sensor GPS",

    // Art\u00edculo 2
    "privacy.article2.title":
      "Art\u00edculo 2 (Finalidad del uso de la informaci\u00f3n personal)",
    "privacy.article2.intro":
      "La Empresa utiliza la informaci\u00f3n personal recopilada para los siguientes fines.",
    "privacy.article2.item1":
      "Registro de miembros y verificaci\u00f3n de identidad",
    "privacy.article2.item2":
      "Captura, almacenamiento y gesti\u00f3n de fotos de evidencia de defectos del arrendamiento",
    "privacy.article2.item3":
      "Detecci\u00f3n de defectos basada en IA (OpenAI GPT-4o Vision) y an\u00e1lisis comparativo de entrada/salida",
    "privacy.article2.item4":
      "Generaci\u00f3n de informes PDF de evidencia de defectos para referencia legal",
    "privacy.article2.item5":
      "Garant\u00eda de fiabilidad fotogr\u00e1fica mediante verificaci\u00f3n de ubicaci\u00f3n GPS",
    "privacy.article2.item6":
      "Procesamiento de pagos y gesti\u00f3n de suscripciones",
    "privacy.article2.item7":
      "Mejora del servicio, an\u00e1lisis estad\u00edstico y atenci\u00f3n al cliente",

    // Art\u00edculo 3
    "privacy.article3.title":
      "Art\u00edculo 3 (Per\u00edodo de conservaci\u00f3n y uso de la informaci\u00f3n personal)",
    "privacy.article3.item1":
      "Datos relacionados con el contrato (fotos, resultados de an\u00e1lisis, informes): conservados durante 5 a\u00f1os a partir de la fecha de terminaci\u00f3n del contrato (seg\u00fan el plazo de prescripci\u00f3n del derecho de reclamaci\u00f3n de devoluci\u00f3n del dep\u00f3sito bajo la Ley de Protecci\u00f3n del Arrendamiento de Vivienda)",
    "privacy.article3.item2":
      "Informaci\u00f3n de miembros: conservada hasta la baja del miembro. Tras la solicitud de baja, se destruye sin demora. No obstante, si existe una obligaci\u00f3n legal de conservaci\u00f3n, se mantendr\u00e1 durante el per\u00edodo correspondiente.",
    "privacy.article3.item2.sub1":
      "Registros de contratos y pagos seg\u00fan la Ley de Comercio Electr\u00f3nico: 5 a\u00f1os",
    "privacy.article3.item2.sub2":
      "Registros de acceso seg\u00fan la Ley de Protecci\u00f3n del Secreto de las Comunicaciones: 3 meses",
    "privacy.article3.item3":
      "Los datos se destruyen sin demora tras la expiraci\u00f3n del per\u00edodo de conservaci\u00f3n o el cumplimiento del fin del tratamiento.",

    // Art\u00edculo 4
    "privacy.article4.title":
      "Art\u00edculo 4 (Suministro de informaci\u00f3n personal a terceros)",
    "privacy.article4.paragraph1":
      "1. La Empresa, como principio, no proporciona la informaci\u00f3n personal de los usuarios a terceros.",
    "privacy.article4.paragraph2":
      "2. Se hacen excepciones \u00fanicamente en los siguientes casos.",
    "privacy.article4.exception1":
      "Cuando el usuario ha dado su consentimiento previo",
    "privacy.article4.exception2":
      "Cuando lo exija la ley (orden judicial, solicitud de organismos de investigaci\u00f3n, etc.)",

    // Art\u00edculo 5
    "privacy.article5.title":
      "Art\u00edculo 5 (Delegaci\u00f3n del tratamiento de informaci\u00f3n personal)",
    "privacy.article5.intro":
      "La Empresa delega el tratamiento de informaci\u00f3n personal de la siguiente manera para prestar sus servicios.",
    "privacy.article5.item1":
      "Supabase (infraestructura AWS): alojamiento de bases de datos y almacenamiento de archivos",
    "privacy.article5.item2":
      "OpenAI: an\u00e1lisis de im\u00e1genes mediante IA (detecci\u00f3n de defectos y an\u00e1lisis comparativo)",
    "privacy.article5.item3":
      "Kakao/Google/Apple: autenticaci\u00f3n de inicio de sesi\u00f3n social",
    "privacy.article5.note":
      "* La Empresa supervisa y gestiona a las entidades delegadas para garantizar el tratamiento seguro de la informaci\u00f3n personal.",

    // Art\u00edculo 6
    "privacy.article6.title":
      "Art\u00edculo 6 (Medidas de seguridad para la informaci\u00f3n personal)",
    "privacy.article6.intro":
      "La Empresa adopta las siguientes medidas para garantizar la seguridad de la informaci\u00f3n personal.",
    "privacy.article6.item1":
      "Almacenamiento cifrado de informaci\u00f3n sensible como fotos de contratos y direcciones",
    "privacy.article6.item2": "Cifrado de comunicaciones SSL/TLS",
    "privacy.article6.item3":
      "Gesti\u00f3n de permisos de acceso y control de acceso basado en tokens de autenticaci\u00f3n (JWT)",
    "privacy.article6.item4":
      "Almacenamiento seguro de archivos fotogr\u00e1ficos en la nube (AWS S3)",
    "privacy.article6.item5":
      "Prevenci\u00f3n de la manipulaci\u00f3n de marcas de tiempo de fotos mediante marcas de tiempo del servidor",
    "privacy.article6.item6":
      "Inspecciones de seguridad peri\u00f3dicas y diagn\u00f3sticos de vulnerabilidades",

    // Art\u00edculo 7
    "privacy.article7.title":
      "Art\u00edculo 7 (Derechos de los usuarios y c\u00f3mo ejercerlos)",
    "privacy.article7.paragraph1":
      "1. Los usuarios pueden ejercer los siguientes derechos en cualquier momento.",
    "privacy.article7.right1":
      "Solicitar acceso a la informaci\u00f3n personal",
    "privacy.article7.right2": "Solicitar la correcci\u00f3n de errores",
    "privacy.article7.right3": "Solicitar la eliminaci\u00f3n",
    "privacy.article7.right4": "Solicitar la suspensi\u00f3n del tratamiento",
    "privacy.article7.paragraph2":
      "2. Los derechos pueden ejercerse a trav\u00e9s de Mi P\u00e1gina en la aplicaci\u00f3n o del servicio de atenci\u00f3n al cliente (support@interstick.co.kr).",
    "privacy.article7.paragraph3":
      "3. Al darse de baja, la informaci\u00f3n personal se destruye sin demora, salvo cuando exista una obligaci\u00f3n legal de conservaci\u00f3n.",

    // Art\u00edculo 8
    "privacy.article8.title":
      "Art\u00edculo 8 (Recogida de informaci\u00f3n de ubicaci\u00f3n)",
    "privacy.article8.item1":
      "La Empresa recoge informaci\u00f3n de ubicaci\u00f3n GPS durante la captura de fotos para verificar la coincidencia con la direcci\u00f3n del contrato.",
    "privacy.article8.item2":
      "La informaci\u00f3n de ubicaci\u00f3n se recoge \u00fanicamente en el momento de la captura, de forma puntual; no se realiza ning\u00fan seguimiento en tiempo real.",
    "privacy.article8.item3":
      "Los usuarios pueden denegar los permisos de ubicaci\u00f3n a trav\u00e9s de la configuraci\u00f3n del dispositivo, en cuyo caso la funci\u00f3n de verificaci\u00f3n de ubicaci\u00f3n quedar\u00e1 limitada.",

    // Art\u00edculo 9
    "privacy.article9.title":
      "Art\u00edculo 9 (Instalaci\u00f3n, operaci\u00f3n y rechazo de dispositivos de recogida autom\u00e1tica)",
    "privacy.article9.content":
      "La Empresa puede recopilar autom\u00e1ticamente informaci\u00f3n de identificaci\u00f3n del dispositivo, registros de acceso y datos similares durante el uso del servicio. Los usuarios pueden rechazarlo a trav\u00e9s de la configuraci\u00f3n del dispositivo, pero algunos servicios pueden quedar limitados en caso de rechazo.",

    // Art\u00edculo 10
    "privacy.article10.title":
      "Art\u00edculo 10 (Responsable de protecci\u00f3n de informaci\u00f3n personal)",
    "privacy.article10.intro":
      "El responsable de protecci\u00f3n de informaci\u00f3n personal de la Empresa es el siguiente.",
    "privacy.article10.company": "Empresa: interstick Corp",
    "privacy.article10.email":
      "Correo electr\u00f3nico: privacy@interstick.co.kr",
    "privacy.article10.inquiry":
      "Consultas sobre informaci\u00f3n personal: support@interstick.co.kr",

    // Art\u00edculo 11
    "privacy.article11.title":
      "Art\u00edculo 11 (Medios de reparaci\u00f3n por vulneraci\u00f3n de derechos)",
    "privacy.article11.intro":
      "Si desea obtener reparaci\u00f3n por da\u00f1os causados por la vulneraci\u00f3n de informaci\u00f3n personal, puede contactar con las siguientes organizaciones.",
    "privacy.article11.org1":
      "Comit\u00e9 de Mediaci\u00f3n de Disputas de Informaci\u00f3n Personal: 1833-6972 (www.kopico.go.kr)",
    "privacy.article11.org2":
      "Centro de Denuncias de Vulneraci\u00f3n de Informaci\u00f3n Personal: 118 (privacy.kisa.or.kr)",
    "privacy.article11.org3":
      "Divisi\u00f3n de Investigaci\u00f3n Cibern\u00e9tica de la Fiscal\u00eda Suprema: 1301 (www.spo.go.kr)",
    "privacy.article11.org4":
      "Oficina de Investigaci\u00f3n Cibern\u00e9tica de la Polic\u00eda Nacional: 182 (ecrm.cyber.go.kr)",

    // Art\u00edculo 12
    "privacy.article12.title":
      "Art\u00edculo 12 (Cambios en la pol\u00edtica de privacidad)",
    "privacy.article12.content":
      "Esta Pol\u00edtica de Privacidad entra en vigor el 1 de marzo de 2026. Cualquier cambio se notificar\u00e1 con antelaci\u00f3n mediante avisos en la aplicaci\u00f3n.",

    // Empresa
    "privacy.company": "interstick Corp",
  },

  de: {
    "privacy.pageTitle": "Datenschutzrichtlinie - homepic AI",
    "privacy.title": "Datenschutzrichtlinie",
    "privacy.effectiveDate": "G\u00fcltig ab: 1. M\u00e4rz 2026",
    "privacy.intro":
      'Die interstick Corp (nachfolgend "das Unternehmen") erstellt und ver\u00f6ffentlicht diese Datenschutzrichtlinie gem\u00e4\u00df dem Gesetz zum Schutz personenbezogener Daten und anderen geltenden Gesetzen, um die personenbezogenen Daten der Nutzer zu sch\u00fctzen und damit verbundene Beschwerden z\u00fcgig zu bearbeiten.',

    // Artikel 1
    "privacy.article1.title":
      "Artikel 1 (Kategorien und Methoden der Erhebung personenbezogener Daten)",
    "privacy.article1.paragraph1":
      "1. Das Unternehmen erhebt die folgenden personenbezogenen Daten zur Erbringung seiner Dienste.",
    "privacy.article1.category1": "1. Pflichtangaben",
    "privacy.article1.required1":
      "Social-Login-Informationen: Nickname, E-Mail-Adresse und eindeutige Kennung von Kakao-/Google-/Apple-Konten",
    "privacy.article1.required2":
      "E-Mail-Login-Informationen: E-Mail-Adresse, Passwort (verschl\u00fcsselt gespeichert), Name",
    "privacy.article1.required3":
      "Vertragsinformationen: Mietadresse, Kaution, Monatsmiete, Vertragslaufzeit, Name des Vermieters",
    "privacy.article1.category2": "2. Freiwillige Angaben",
    "privacy.article1.optional1": "Kontaktnummer (Telefonnummer)",
    "privacy.article1.optional2": "Fotos des Mietvertrags",
    "privacy.article1.category3": "3. Automatisch erhobene Daten",
    "privacy.article1.auto1":
      "GPS-Standortdaten (zur \u00dcberpr\u00fcfung der \u00dcbereinstimmung mit der Vertragsadresse bei der Fotoaufnahme)",
    "privacy.article1.auto2": "Aufgenommene Fotos und Server-Zeitstempel",
    "privacy.article1.auto3":
      "Ger\u00e4teinformationen (Betriebssystemversion, App-Version, Ger\u00e4temodell)",
    "privacy.article1.auto4":
      "Nutzungsprotokolle des Dienstes, Zugriffsprotokolle",
    "privacy.article1.paragraph2":
      "2. Erhebungsmethoden: Direkte Eingabe in der App, Social-Login-API, E-Mail-Registrierung, Kameraaufnahme, GPS-Sensor",

    // Artikel 2
    "privacy.article2.title":
      "Artikel 2 (Zweck der Nutzung personenbezogener Daten)",
    "privacy.article2.intro":
      "Das Unternehmen nutzt die erhobenen personenbezogenen Daten f\u00fcr die folgenden Zwecke.",
    "privacy.article2.item1":
      "Mitgliedsregistrierung und Identit\u00e4tspr\u00fcfung",
    "privacy.article2.item2":
      "Aufnahme, Speicherung und Verwaltung von Beweisfotos f\u00fcr Mietm\u00e4ngel",
    "privacy.article2.item3":
      "KI-basierte (OpenAI GPT-4o Vision) M\u00e4ngelerkennung und Ein-/Auszugs-Vergleichsanalyse",
    "privacy.article2.item4":
      "Erstellung von PDF-M\u00e4ngelberichten als rechtliche Referenz",
    "privacy.article2.item5":
      "Sicherstellung der Fotozuverl\u00e4ssigkeit durch GPS-Standort\u00fcberpr\u00fcfung",
    "privacy.article2.item6": "Zahlungsabwicklung und Abonnementverwaltung",
    "privacy.article2.item7":
      "Dienstverbesserung, statistische Analyse und Kundensupport",

    // Artikel 3
    "privacy.article3.title":
      "Artikel 3 (Aufbewahrungsdauer personenbezogener Daten)",
    "privacy.article3.item1":
      "Vertragsbezogene Daten (Fotos, Analyseergebnisse, Berichte): Aufbewahrung f\u00fcr 5 Jahre ab dem Vertragsende (basierend auf der Verj\u00e4hrungsfrist f\u00fcr Kautionsr\u00fcckforderungen nach dem Wohnungsmieterschutzgesetz)",
    "privacy.article3.item2":
      "Mitgliedsdaten: Aufbewahrung bis zum Austritt des Mitglieds. Bei Austrittsantrag werden die Daten unverz\u00fcglich vernichtet. Bestehen jedoch gesetzliche Aufbewahrungspflichten, werden die Daten f\u00fcr den entsprechenden Zeitraum aufbewahrt.",
    "privacy.article3.item2.sub1":
      "Vertrags- und Zahlungsunterlagen gem\u00e4\u00df dem E-Commerce-Gesetz: 5 Jahre",
    "privacy.article3.item2.sub2":
      "Zugriffsprotokolle gem\u00e4\u00df dem Fernmeldegeheimnisgesetz: 3 Monate",
    "privacy.article3.item3":
      "Die Daten werden unverz\u00fcglich nach Ablauf der Aufbewahrungsfrist oder Erreichung des Verarbeitungszwecks vernichtet.",

    // Artikel 4
    "privacy.article4.title":
      "Artikel 4 (Weitergabe personenbezogener Daten an Dritte)",
    "privacy.article4.paragraph1":
      "1. Das Unternehmen gibt personenbezogene Daten der Nutzer grunds\u00e4tzlich nicht an Dritte weiter.",
    "privacy.article4.paragraph2":
      "2. Ausnahmen gelten nur in den folgenden F\u00e4llen.",
    "privacy.article4.exception1": "Wenn der Nutzer vorab eingewilligt hat",
    "privacy.article4.exception2":
      "Wenn dies gesetzlich vorgeschrieben ist (Gerichtsbeschluss, Anforderung von Ermittlungsbeh\u00f6rden usw.)",

    // Artikel 5
    "privacy.article5.title":
      "Artikel 5 (Beauftragung der Verarbeitung personenbezogener Daten)",
    "privacy.article5.intro":
      "Das Unternehmen beauftragt die Verarbeitung personenbezogener Daten wie folgt zur Erbringung seiner Dienste.",
    "privacy.article5.item1":
      "Supabase (AWS-Infrastruktur): Datenbank-Hosting und Dateispeicherung",
    "privacy.article5.item2":
      "OpenAI: KI-Bildanalyse (M\u00e4ngelerkennung und Vergleichsanalyse)",
    "privacy.article5.item3":
      "Kakao/Google/Apple: Social-Login-Authentifizierung",
    "privacy.article5.note":
      "* Das Unternehmen \u00fcberwacht und verwaltet die beauftragten Stellen, um eine sichere Verarbeitung personenbezogener Daten zu gew\u00e4hrleisten.",

    // Artikel 6
    "privacy.article6.title":
      "Artikel 6 (Sicherheitsma\u00dfnahmen f\u00fcr personenbezogene Daten)",
    "privacy.article6.intro":
      "Das Unternehmen ergreift die folgenden Ma\u00dfnahmen zur Gew\u00e4hrleistung der Sicherheit personenbezogener Daten.",
    "privacy.article6.item1":
      "Verschl\u00fcsselte Speicherung sensibler Daten wie Vertragsfotos und Adressen",
    "privacy.article6.item2": "SSL/TLS-Kommunikationsverschl\u00fcsselung",
    "privacy.article6.item3":
      "Zugriffsberechtigungsverwaltung und Zugriffskontrolle auf Basis von Authentifizierungs-Token (JWT)",
    "privacy.article6.item4":
      "Sichere Cloud-Speicherung (AWS S3) von Fotodateien",
    "privacy.article6.item5":
      "Verhinderung der Manipulation von Aufnahmezeitstempeln durch Server-Zeitstempel",
    "privacy.article6.item6":
      "Regelm\u00e4\u00dfige Sicherheits\u00fcberpr\u00fcfungen und Schwachstellenanalysen",

    // Artikel 7
    "privacy.article7.title":
      "Artikel 7 (Rechte der Nutzer und deren Aus\u00fcbung)",
    "privacy.article7.paragraph1":
      "1. Nutzer k\u00f6nnen jederzeit die folgenden Rechte aus\u00fcben.",
    "privacy.article7.right1":
      "Auskunft \u00fcber personenbezogene Daten verlangen",
    "privacy.article7.right2": "Berichtigung von Fehlern verlangen",
    "privacy.article7.right3": "L\u00f6schung verlangen",
    "privacy.article7.right4": "Einschr\u00e4nkung der Verarbeitung verlangen",
    "privacy.article7.paragraph2":
      '2. Die Rechte k\u00f6nnen \u00fcber die Seite "Mein Bereich" in der App oder \u00fcber den Kundendienst (support@interstick.co.kr) ausge\u00fcbt werden.',
    "privacy.article7.paragraph3":
      "3. Bei Austritt des Mitglieds werden die personenbezogenen Daten unverz\u00fcglich vernichtet, es sei denn, es besteht eine gesetzliche Aufbewahrungspflicht.",

    // Artikel 8
    "privacy.article8.title": "Artikel 8 (Erhebung von Standortinformationen)",
    "privacy.article8.item1":
      "Das Unternehmen erhebt bei der Fotoaufnahme GPS-Standortdaten, um die \u00dcbereinstimmung mit der Vertragsadresse zu \u00fcberpr\u00fcfen.",
    "privacy.article8.item2":
      "Standortdaten werden nur zum Zeitpunkt der Aufnahme einmalig erhoben; eine Echtzeit-Verfolgung findet nicht statt.",
    "privacy.article8.item3":
      "Nutzer k\u00f6nnen die Standortberechtigung in den Ger\u00e4teeinstellungen verweigern; in diesem Fall wird die Standort\u00fcberpr\u00fcfungsfunktion eingeschr\u00e4nkt.",

    // Artikel 9
    "privacy.article9.title":
      "Artikel 9 (Installation, Betrieb und Ablehnung automatischer Erfassungsger\u00e4te)",
    "privacy.article9.content":
      "Das Unternehmen kann w\u00e4hrend der Nutzung des Dienstes automatisch Ger\u00e4teidentifikationsdaten, Zugriffsprotokolle und \u00e4hnliche Daten erheben. Nutzer k\u00f6nnen dies \u00fcber die Ger\u00e4teeinstellungen ablehnen, jedoch k\u00f6nnen einige Dienste bei Ablehnung eingeschr\u00e4nkt sein.",

    // Artikel 10
    "privacy.article10.title": "Artikel 10 (Datenschutzbeauftragter)",
    "privacy.article10.intro":
      "Der Datenschutzbeauftragte des Unternehmens ist wie folgt.",
    "privacy.article10.company": "Unternehmen: interstick Corp",
    "privacy.article10.email": "E-Mail: privacy@interstick.co.kr",
    "privacy.article10.inquiry":
      "Anfragen zum Datenschutz: support@interstick.co.kr",

    // Artikel 11
    "privacy.article11.title":
      "Artikel 11 (Rechtsmittel bei Rechtsverletzungen)",
    "privacy.article11.intro":
      "Wenn Sie Abhilfe bei Sch\u00e4den durch Verletzungen personenbezogener Daten suchen, k\u00f6nnen Sie sich an die folgenden Organisationen wenden.",
    "privacy.article11.org1":
      "Schlichtungsausschuss f\u00fcr Streitigkeiten \u00fcber personenbezogene Daten: 1833-6972 (www.kopico.go.kr)",
    "privacy.article11.org2":
      "Meldestelle f\u00fcr Verletzungen personenbezogener Daten: 118 (privacy.kisa.or.kr)",
    "privacy.article11.org3":
      "Abteilung f\u00fcr Cyberkriminalit\u00e4t der Obersten Staatsanwaltschaft: 1301 (www.spo.go.kr)",
    "privacy.article11.org4":
      "B\u00fcro f\u00fcr Cyberkriminalit\u00e4t der Nationalen Polizeibeh\u00f6rde: 182 (ecrm.cyber.go.kr)",

    // Artikel 12
    "privacy.article12.title":
      "Artikel 12 (\u00c4nderungen der Datenschutzrichtlinie)",
    "privacy.article12.content":
      "Diese Datenschutzrichtlinie tritt am 1. M\u00e4rz 2026 in Kraft. \u00c4nderungen werden im Voraus \u00fcber In-App-Benachrichtigungen mitgeteilt.",

    // Unternehmen
    "privacy.company": "interstick Corp",
  },
};
