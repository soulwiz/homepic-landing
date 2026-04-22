import type { Locale } from "./translations";

// 이용약관 페이지 다국어 번역
export const termsTranslations: Record<Locale, Record<string, string>> = {
  ko: {
    "terms.pageTitle": "이용약관 - 홈픽AI",
    "terms.title": "홈픽AI 서비스 이용약관",
    "terms.effectiveDate": "시행일: 2026년 3월 1일",

    // 제1조
    "terms.article1.title": "제1조 (목적)",
    "terms.article1.content":
      '이 약관은 주식회사 인터스틱(이하 "회사")이 제공하는 전월세 하자 증거 수집 서비스 "홈픽AI"(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.',

    // 제2조
    "terms.article2.title": "제2조 (용어의 정의)",
    "terms.article2.item1":
      '"서비스"란 회사가 제공하는 AI 기반 하자 감지, 입퇴실 사진 비교 분석, PDF 하자 증거 리포트 생성 등 일체의 서비스를 말합니다.',
    "terms.article2.item2":
      '"이용자"란 본 약관에 따라 서비스를 이용하는 자를 말합니다.',
    "terms.article2.item3":
      '"콘텐츠"란 이용자가 서비스를 통해 업로드하는 사진, 계약 정보, AI 분석 결과, 리포트 등을 말합니다.',

    // 제3조
    "terms.article3.title": "제3조 (약관의 효력 및 변경)",
    "terms.article3.item1":
      "본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.",
    "terms.article3.item2":
      "회사는 관련 법령에 위배되지 않는 범위에서 약관을 개정할 수 있으며, 개정 시 적용일 7일 전부터 앱 내 공지합니다.",
    "terms.article3.item3":
      "이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.",

    // 제4조
    "terms.article4.title": "제4조 (서비스의 내용)",
    "terms.article4.desc": "회사는 다음과 같은 서비스를 제공합니다.",
    "terms.article4.item1": "입주 시 공간별 사진 촬영 및 저장",
    "terms.article4.item2": "퇴실 시 사진 촬영 및 입주 사진과의 AI 비교 분석",
    "terms.article4.item3": "하자 유형 분류 (과실 의심, 자연마모, 기존하자)",
    "terms.article4.item4": "법적 참고용 PDF 하자 증거 리포트 생성",
    "terms.article4.item5": "계약 관리 및 촬영 가이드 기능",
    "terms.article4.item6": "기타 회사가 추가 개발하여 제공하는 서비스",

    // 제5조
    "terms.article5.title": "제5조 (회원 가입 및 탈퇴)",
    "terms.article5.item1":
      "이용자는 카카오, Google, Apple 소셜 로그인 또는 이메일을 통해 회원가입할 수 있습니다.",
    "terms.article5.item2":
      "회원은 앱 내 마이페이지에서 언제든지 탈퇴를 요청할 수 있습니다.",
    "terms.article5.item3":
      "탈퇴 시 개인정보는 개인정보 처리방침에 따라 처리되며, 법령상 보관 의무가 있는 데이터는 해당 기간까지 보관 후 파기합니다.",

    // 제6조
    "terms.article6.title": "제6조 (서비스 이용료 및 결제)",
    "terms.article6.item1":
      "무료 플랜은 프로퍼티 1개, 사진 월 30장, AI 분석 월 3회로 제공됩니다.",
    "terms.article6.item2":
      "Pro 플랜은 월 $4.99 또는 연 $49.99이며, 무제한 프로퍼티 및 사진 촬영, AI 분석(공정이용 월 500회 이내)을 제공합니다. 월 500회를 초과하는 AI 요청은 남용 방지를 위해 일시 제한될 수 있습니다.",
    "terms.article6.item3":
      "유료 구독은 인앱 결제(Apple App Store, Google Play Store)를 통해 결제하며, 결제 주기 및 요금은 앱 내 구독 관리 화면에서 확인할 수 있습니다.",
    "terms.article6.item4":
      "결제 취소 및 환불은 각 앱스토어의 환불 정책에 따릅니다.",

    // 제7조
    "terms.article7.title": "제7조 (AI 분석 결과의 면책)",
    "terms.article7.item1":
      "본 서비스의 AI 분석 결과는 참고 자료로만 제공되며, 법적 효력을 보장하지 않습니다.",
    "terms.article7.item2":
      "AI 분석은 사진 이미지를 기반으로 하므로, 촬영 조건(조명, 각도, 해상도 등)에 따라 결과가 달라질 수 있습니다.",
    "terms.article7.item3":
      "보증금 분쟁 등 법적 절차에서는 전문가의 현장 실사를 병행하시기를 권장합니다.",
    "terms.article7.item4":
      "회사는 AI 분석 결과의 정확성, 완전성을 보장하지 않으며, 분석 결과에 기반한 이용자의 판단이나 행위에 대해 책임을 지지 않습니다.",

    // 제8조
    "terms.article8.title": "제8조 (이용자의 의무)",
    "terms.article8.item1": "이용자는 다음 행위를 하여서는 안 됩니다.",
    "terms.article8.item1.sub1":
      "타인의 개인정보를 도용하거나 허위 정보를 등록하는 행위",
    "terms.article8.item1.sub2":
      "서비스를 이용하여 법령 또는 공공질서에 반하는 행위",
    "terms.article8.item1.sub3":
      "서비스의 운영을 방해하거나 안정성을 해치는 행위",
    "terms.article8.item1.sub4":
      "타인의 재산권, 초상권, 사생활 등을 침해하는 행위",
    "terms.article8.item1.sub5": "서비스를 역설계, 무단 복제, 변조하는 행위",
    "terms.article8.item2":
      "이용자는 촬영한 사진 및 등록한 계약 정보의 정확성에 대해 책임을 집니다.",

    // 제9조
    "terms.article9.title": "제9조 (회사의 의무)",
    "terms.article9.item1":
      "회사는 관련 법령과 본 약관에 따라 지속적이고 안정적인 서비스를 제공하기 위해 노력합니다.",
    "terms.article9.item2":
      "회사는 이용자의 개인정보를 보호하기 위해 개인정보 처리방침을 수립하고 이를 준수합니다.",
    "terms.article9.item3":
      "회사는 서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만을 적절한 절차를 통해 처리합니다.",

    // 제10조
    "terms.article10.title": "제10조 (서비스의 중단 및 변경)",
    "terms.article10.item1":
      "회사는 천재지변, 시스템 장애, 정기 점검 등 불가피한 사유가 있는 경우 서비스의 전부 또는 일부를 일시적으로 중단할 수 있습니다.",
    "terms.article10.item2":
      "회사는 서비스의 내용, 운영 방식 등을 변경할 수 있으며, 중요한 변경 사항은 사전에 공지합니다.",

    // 제11조
    "terms.article11.title": "제11조 (콘텐츠의 관리)",
    "terms.article11.item1":
      "이용자가 업로드한 사진 및 계약 정보의 저작권은 이용자에게 귀속됩니다.",
    "terms.article11.item2":
      "회사는 서비스 제공 목적(AI 분석, 리포트 생성)에 한하여 이용자의 콘텐츠를 이용할 수 있습니다.",
    "terms.article11.item3":
      "계약 관련 데이터는 계약 종료 후 5년간 안전하게 보관됩니다 (주택임대차보호법 소멸시효 기준).",

    // 제12조
    "terms.article12.title": "제12조 (손해배상)",
    "terms.article12.item1":
      "회사의 고의 또는 중과실로 인하여 이용자에게 손해가 발생한 경우, 회사는 관련 법령에 따라 손해를 배상합니다.",
    "terms.article12.item2":
      "AI 분석 결과의 부정확성으로 인한 손해에 대해서는 제7조의 면책 조항이 적용됩니다.",

    // 제13조
    "terms.article13.title": "제13조 (분쟁 해결)",
    "terms.article13.item1":
      "서비스 이용과 관련하여 회사와 이용자 간에 분쟁이 발생한 경우 양 당사자는 원만한 해결을 위해 성실히 협의합니다.",
    "terms.article13.item2":
      "협의가 이루어지지 않을 경우, 관할 법원은 민사소송법에 따른 법원으로 합니다.",

    // 제14조
    "terms.article14.title": "제14조 (기타)",
    "terms.article14.content":
      "본 약관에서 정하지 아니한 사항은 관련 법령 및 상관례에 따릅니다.",

    // 부칙
    "terms.supplement.title": "부칙",
    "terms.supplement.content": "본 약관은 2026년 3월 1일부터 시행합니다.",

    // 회사 정보
    "terms.company": "주식회사 인터스틱 (interstick Corp)",
  },

  en: {
    "terms.pageTitle": "Terms of Service - homepic AI",
    "terms.title": "homepic AI Terms of Service",
    "terms.effectiveDate": "Effective: March 1, 2026",

    "terms.article1.title": "Article 1 (Purpose)",
    "terms.article1.content":
      'These Terms govern the conditions, procedures, and the rights, obligations, and responsibilities of the Company and Users regarding the use of the rental defect evidence collection service "homepic AI" (hereinafter "Service") provided by interstick Corp (hereinafter "Company").',

    "terms.article2.title": "Article 2 (Definitions)",
    "terms.article2.item1":
      '"Service" refers to all services provided by the Company, including AI-based defect detection, move-in/move-out photo comparison analysis, and PDF defect evidence report generation.',
    "terms.article2.item2":
      '"User" refers to any person who uses the Service in accordance with these Terms.',
    "terms.article2.item3":
      '"Content" refers to photos, contract information, AI analysis results, reports, and other materials uploaded by the User through the Service.',

    "terms.article3.title": "Article 3 (Effectiveness and Amendment of Terms)",
    "terms.article3.item1":
      "These Terms apply to all Users who wish to use the Service.",
    "terms.article3.item2":
      "The Company may amend these Terms to the extent not in violation of applicable laws and shall notify Users through the app at least 7 days prior to the effective date of such amendment.",
    "terms.article3.item3":
      "If a User does not agree with the amended Terms, the User may discontinue use of the Service and withdraw from membership.",

    "terms.article4.title": "Article 4 (Description of Service)",
    "terms.article4.desc": "The Company provides the following services:",
    "terms.article4.item1":
      "Room-by-room photo capture and storage upon move-in",
    "terms.article4.item2":
      "Photo capture upon move-out and AI comparison analysis with move-in photos",
    "terms.article4.item3":
      "Defect type classification (suspected negligence, natural wear, pre-existing defects)",
    "terms.article4.item4":
      "PDF defect evidence report generation for legal reference",
    "terms.article4.item5": "Contract management and photo guide features",
    "terms.article4.item6":
      "Other services additionally developed and provided by the Company",

    "terms.article5.title": "Article 5 (Registration and Withdrawal)",
    "terms.article5.item1":
      "Users may register through Kakao, Google, or Apple social login, or via email.",
    "terms.article5.item2":
      "Members may request withdrawal at any time through the My Page section within the app.",
    "terms.article5.item3":
      "Upon withdrawal, personal information shall be processed in accordance with the Privacy Policy, and data subject to legally mandated retention shall be retained for the required period before destruction.",

    "terms.article6.title": "Article 6 (Service Fees and Payment)",
    "terms.article6.item1":
      "The Free Plan includes 1 property, 30 photos per month, and 3 AI analyses per month.",
    "terms.article6.item2":
      "The Pro Plan costs $4.99/month or $49.99/year and provides unlimited properties, photo capture, and AI analysis (fair use within 500 per month). AI requests exceeding 500 per month may be temporarily throttled to prevent abuse.",
    "terms.article6.item3":
      "Paid subscriptions are processed via in-app purchase (Apple App Store, Google Play Store). Billing cycles and fees can be viewed on the subscription management screen within the app.",
    "terms.article6.item4":
      "Payment cancellations and refunds are subject to the refund policies of the respective app stores.",

    "terms.article7.title":
      "Article 7 (Disclaimer Regarding AI Analysis Results)",
    "terms.article7.item1":
      "AI analysis results provided by the Service are for reference purposes only and do not guarantee legal validity.",
    "terms.article7.item2":
      "As AI analysis is based on photographic images, results may vary depending on photographic conditions (lighting, angle, resolution, etc.).",
    "terms.article7.item3":
      "For legal proceedings such as security deposit disputes, we recommend supplementing with professional on-site inspections.",
    "terms.article7.item4":
      "The Company does not guarantee the accuracy or completeness of AI analysis results and shall not be liable for any judgments or actions taken by Users based on such results.",

    "terms.article8.title": "Article 8 (User Obligations)",
    "terms.article8.item1":
      "Users shall not engage in the following activities:",
    "terms.article8.item1.sub1":
      "Misappropriating others' personal information or registering false information",
    "terms.article8.item1.sub2":
      "Using the Service in violation of laws or public order",
    "terms.article8.item1.sub3":
      "Interfering with or undermining the stability of the Service's operations",
    "terms.article8.item1.sub4":
      "Infringing upon others' property rights, portrait rights, or privacy",
    "terms.article8.item1.sub5":
      "Reverse-engineering, unauthorized copying, or tampering with the Service",
    "terms.article8.item2":
      "Users are responsible for the accuracy of photos taken and contract information registered.",

    "terms.article9.title": "Article 9 (Company Obligations)",
    "terms.article9.item1":
      "The Company shall endeavor to provide continuous and stable Service in accordance with applicable laws and these Terms.",
    "terms.article9.item2":
      "The Company shall establish and comply with a Privacy Policy to protect Users' personal information.",
    "terms.article9.item3":
      "The Company shall process opinions or complaints raised by Users regarding Service use through appropriate procedures.",

    "terms.article10.title": "Article 10 (Service Suspension and Modification)",
    "terms.article10.item1":
      "The Company may temporarily suspend all or part of the Service due to unavoidable circumstances such as force majeure, system failures, or scheduled maintenance.",
    "terms.article10.item2":
      "The Company may modify the content or operation of the Service, and shall provide prior notice of significant changes.",

    "terms.article11.title": "Article 11 (Content Management)",
    "terms.article11.item1":
      "Copyright of photos and contract information uploaded by Users belongs to the Users.",
    "terms.article11.item2":
      "The Company may use User Content solely for the purpose of providing the Service (AI analysis, report generation).",
    "terms.article11.item3":
      "Contract-related data shall be securely retained for 5 years after contract termination (based on the statute of limitations under the Housing Lease Protection Act).",

    "terms.article12.title": "Article 12 (Liability for Damages)",
    "terms.article12.item1":
      "If the User suffers damages due to the Company's intentional misconduct or gross negligence, the Company shall compensate for such damages in accordance with applicable laws.",
    "terms.article12.item2":
      "The disclaimer provisions of Article 7 shall apply to damages arising from inaccuracies in AI analysis results.",

    "terms.article13.title": "Article 13 (Dispute Resolution)",
    "terms.article13.item1":
      "In the event of a dispute between the Company and a User regarding Service use, both parties shall negotiate in good faith for an amicable resolution.",
    "terms.article13.item2":
      "If no agreement is reached, the competent court shall be determined in accordance with the Civil Procedure Act.",

    "terms.article14.title": "Article 14 (Miscellaneous)",
    "terms.article14.content":
      "Matters not stipulated in these Terms shall be governed by applicable laws and customary practices.",

    "terms.supplement.title": "Supplementary Provisions",
    "terms.supplement.content": "These Terms are effective from March 1, 2026.",

    "terms.company": "interstick Corp",
  },

  ja: {
    "terms.pageTitle": "利用規約 - homepic AI",
    "terms.title": "homepic AI サービス利用規約",
    "terms.effectiveDate": "施行日：2026年3月1日",

    "terms.article1.title": "第1条（目的）",
    "terms.article1.content":
      "本規約は、株式会社interstick（以下「当社」）が提供する賃貸物件の瑕疵証拠収集サービス「homepic AI」（以下「本サービス」）の利用条件および手続き、当社と利用者の権利・義務および責任事項を規定することを目的とします。",

    "terms.article2.title": "第2条（用語の定義）",
    "terms.article2.item1":
      "「本サービス」とは、当社が提供するAIベースの瑕疵検出、入退去時写真比較分析、PDF瑕疵証拠レポート生成等の一切のサービスをいいます。",
    "terms.article2.item2":
      "「利用者」とは、本規約に従い本サービスを利用する者をいいます。",
    "terms.article2.item3":
      "「コンテンツ」とは、利用者が本サービスを通じてアップロードする写真、契約情報、AI分析結果、レポート等をいいます。",

    "terms.article3.title": "第3条（規約の効力および変更）",
    "terms.article3.item1":
      "本規約は、本サービスの利用を希望するすべての利用者に適用されます。",
    "terms.article3.item2":
      "当社は、関連法令に違反しない範囲で規約を改定することができ、改定時は適用日の7日前からアプリ内で告知します。",
    "terms.article3.item3":
      "利用者が変更された規約に同意しない場合、サービスの利用を中止し退会することができます。",

    "terms.article4.title": "第4条（サービスの内容）",
    "terms.article4.desc": "当社は以下のサービスを提供します。",
    "terms.article4.item1": "入居時の部屋ごとの写真撮影および保存",
    "terms.article4.item2": "退去時の写真撮影および入居時写真とのAI比較分析",
    "terms.article4.item3": "瑕疵類型分類（過失疑い、自然摩耗、既存瑕疵）",
    "terms.article4.item4": "法的参考用PDF瑕疵証拠レポートの生成",
    "terms.article4.item5": "契約管理および撮影ガイド機能",
    "terms.article4.item6": "その他当社が追加開発して提供するサービス",

    "terms.article5.title": "第5条（会員登録および退会）",
    "terms.article5.item1":
      "利用者は、Kakao、Google、Appleソーシャルログインまたはメールを通じて会員登録できます。",
    "terms.article5.item2":
      "会員はアプリ内のマイページからいつでも退会を申請できます。",
    "terms.article5.item3":
      "退会時、個人情報はプライバシーポリシーに従い処理され、法令上保管義務のあるデータは該当期間まで保管後に破棄します。",

    "terms.article6.title": "第6条（サービス利用料および決済）",
    "terms.article6.item1":
      "無料プランは物件1件、写真月30枚、AI分析月3回で提供されます。",
    "terms.article6.item2":
      "Proプランは月$4.99または年$49.99で、無制限の物件・写真撮影・AI分析（公正利用として月500回以内）をご利用いただけます。月500回を超えるAIリクエストは、不正利用防止のため一時的に制限される場合があります。",
    "terms.article6.item3":
      "有料サブスクリプションはアプリ内課金（Apple App Store、Google Play Store）で決済します。決済周期および料金はアプリ内のサブスクリプション管理画面で確認できます。",
    "terms.article6.item4":
      "決済のキャンセルおよび払い戻しは各アプリストアの返金ポリシーに従います。",

    "terms.article7.title": "第7条（AI分析結果の免責）",
    "terms.article7.item1":
      "本サービスのAI分析結果は参考資料としてのみ提供され、法的効力を保証するものではありません。",
    "terms.article7.item2":
      "AI分析は写真画像に基づくため、撮影条件（照明、角度、解像度等）により結果が異なる場合があります。",
    "terms.article7.item3":
      "敷金紛争等の法的手続きにおいては、専門家による現場実査を併用されることを推奨します。",
    "terms.article7.item4":
      "当社はAI分析結果の正確性、完全性を保証せず、分析結果に基づく利用者の判断や行為について責任を負いません。",

    "terms.article8.title": "第8条（利用者の義務）",
    "terms.article8.item1": "利用者は以下の行為をしてはなりません。",
    "terms.article8.item1.sub1":
      "他人の個人情報を盗用または虚偽の情報を登録する行為",
    "terms.article8.item1.sub2":
      "本サービスを利用して法令または公序良俗に反する行為",
    "terms.article8.item1.sub3":
      "サービスの運営を妨害し、または安定性を損なう行為",
    "terms.article8.item1.sub4":
      "他人の財産権、肖像権、プライバシー等を侵害する行為",
    "terms.article8.item1.sub5":
      "サービスのリバースエンジニアリング、無断複製、改ざんを行う行為",
    "terms.article8.item2":
      "利用者は撮影した写真および登録した契約情報の正確性について責任を負います。",

    "terms.article9.title": "第9条（当社の義務）",
    "terms.article9.item1":
      "当社は関連法令および本規約に従い、継続的かつ安定的なサービスの提供に努めます。",
    "terms.article9.item2":
      "当社は利用者の個人情報を保護するためにプライバシーポリシーを策定し、これを遵守します。",
    "terms.article9.item3":
      "当社はサービスの利用に関して利用者から寄せられた意見や苦情を適切な手続きを通じて処理します。",

    "terms.article10.title": "第10条（サービスの中断および変更）",
    "terms.article10.item1":
      "当社は、天災地変、システム障害、定期点検等やむを得ない事由がある場合、サービスの全部または一部を一時的に中断できます。",
    "terms.article10.item2":
      "当社はサービスの内容、運営方式等を変更でき、重要な変更事項は事前に告知します。",

    "terms.article11.title": "第11条（コンテンツの管理）",
    "terms.article11.item1":
      "利用者がアップロードした写真および契約情報の著作権は利用者に帰属します。",
    "terms.article11.item2":
      "当社はサービス提供の目的（AI分析、レポート生成）に限り、利用者のコンテンツを利用できます。",
    "terms.article11.item3":
      "契約関連データは契約終了後5年間安全に保管されます（住宅賃貸借保護法の消滅時効基準）。",

    "terms.article12.title": "第12条（損害賠償）",
    "terms.article12.item1":
      "当社の故意または重過失により利用者に損害が発生した場合、当社は関連法令に従い損害を賠償します。",
    "terms.article12.item2":
      "AI分析結果の不正確性による損害については、第7条の免責条項が適用されます。",

    "terms.article13.title": "第13条（紛争解決）",
    "terms.article13.item1":
      "サービスの利用に関して当社と利用者間に紛争が生じた場合、双方は円満な解決のために誠実に協議します。",
    "terms.article13.item2":
      "協議が成立しない場合、管轄裁判所は民事訴訟法に基づく裁判所とします。",

    "terms.article14.title": "第14条（その他）",
    "terms.article14.content":
      "本規約に定めのない事項は、関連法令および商慣習に従います。",

    "terms.supplement.title": "附則",
    "terms.supplement.content": "本規約は2026年3月1日から施行します。",

    "terms.company": "株式会社interstick（interstick Corp）",
  },

  zh: {
    "terms.pageTitle": "服务条款 - homepic AI",
    "terms.title": "homepic AI 服务使用条款",
    "terms.effectiveDate": "生效日期：2026年3月1日",

    "terms.article1.title": "第一条（目的）",
    "terms.article1.content":
      "本条款旨在规定interstick株式会社（以下简称\u201C公司\u201D）提供的租房缺陷证据收集服务\u201Chomepic AI\u201D（以下简称\u201C服务\u201D）的使用条件及程序、公司与用户的权利义务及责任事项。",

    "terms.article2.title": "第二条（术语定义）",
    "terms.article2.item1":
      "\u201C服务\u201D是指公司提供的基于AI的缺陷检测、入住/退房照片对比分析、PDF缺陷证据报告生成等一切服务。",
    "terms.article2.item2": "\u201C用户\u201D是指依照本条款使用服务的人员。",
    "terms.article2.item3":
      "\u201C内容\u201D是指用户通过服务上传的照片、合同信息、AI分析结果、报告等。",

    "terms.article3.title": "第三条（条款的效力及变更）",
    "terms.article3.item1": "本条款适用于所有希望使用本服务的用户。",
    "terms.article3.item2":
      "公司可在不违反相关法律法规的范围内修订本条款，修订时将在生效日7天前通过应用内通知。",
    "terms.article3.item3":
      "用户不同意变更后的条款时，可以停止使用服务并注销账户。",

    "terms.article4.title": "第四条（服务内容）",
    "terms.article4.desc": "公司提供以下服务：",
    "terms.article4.item1": "入住时按空间拍摄并保存照片",
    "terms.article4.item2": "退房时拍摄照片并与入住照片进行AI对比分析",
    "terms.article4.item3": "缺陷类型分类（疑似过失、自然磨损、原有缺陷）",
    "terms.article4.item4": "生成法律参考用PDF缺陷证据报告",
    "terms.article4.item5": "合同管理及拍摄指南功能",
    "terms.article4.item6": "公司另行开发并提供的其他服务",

    "terms.article5.title": "第五条（注册与注销）",
    "terms.article5.item1":
      "用户可通过Kakao、Google、Apple社交登录或电子邮件注册账户。",
    "terms.article5.item2": "会员可随时通过应用内的个人页面申请注销。",
    "terms.article5.item3":
      "注销时，个人信息将按照隐私政策处理，法律规定有保管义务的数据将在保管期限届满后销毁。",

    "terms.article6.title": "第六条（服务费用与支付）",
    "terms.article6.item1":
      "免费套餐包括1个房产、每月30张照片和每月3次AI分析。",
    "terms.article6.item2":
      "Pro套餐每月$4.99或每年$49.99，提供无限房产、无限照片拍摄和AI分析（公平使用：每月最多500次）。超过每月500次的AI请求可能会临时限制以防止滥用。",
    "terms.article6.item3":
      "付费订阅通过应用内购买（Apple App Store、Google Play Store）结算。付款周期和费用可在应用内的订阅管理页面查看。",
    "terms.article6.item4": "付款取消及退款按各应用商店的退款政策执行。",

    "terms.article7.title": "第七条（AI分析结果免责）",
    "terms.article7.item1": "本服务的AI分析结果仅供参考，不保证其法律效力。",
    "terms.article7.item2":
      "AI分析基于照片图像，因此结果可能因拍摄条件（光线、角度、分辨率等）而有所不同。",
    "terms.article7.item3":
      "在押金纠纷等法律程序中，建议配合专业人员的现场勘察。",
    "terms.article7.item4":
      "公司不保证AI分析结果的准确性和完整性，对基于分析结果的用户判断或行为不承担责任。",

    "terms.article8.title": "第八条（用户义务）",
    "terms.article8.item1": "用户不得从事以下行为：",
    "terms.article8.item1.sub1": "盗用他人个人信息或登记虚假信息的行为",
    "terms.article8.item1.sub2": "利用服务进行违反法律法规或公共秩序的行为",
    "terms.article8.item1.sub3": "妨碍服务运营或损害其稳定性的行为",
    "terms.article8.item1.sub4": "侵犯他人财产权、肖像权、隐私等的行为",
    "terms.article8.item1.sub5": "对服务进行反向工程、未经授权复制或篡改的行为",
    "terms.article8.item2":
      "用户对所拍摄照片及登记的合同信息的准确性承担责任。",

    "terms.article9.title": "第九条（公司义务）",
    "terms.article9.item1":
      "公司应依照相关法律法规及本条款，努力提供持续稳定的服务。",
    "terms.article9.item2": "公司应制定并遵守隐私政策，保护用户的个人信息。",
    "terms.article9.item3":
      "公司应通过适当程序处理用户就服务使用提出的意见或投诉。",

    "terms.article10.title": "第十条（服务中断与变更）",
    "terms.article10.item1":
      "因不可抗力、系统故障、定期维护等不可避免的原因，公司可暂时中断全部或部分服务。",
    "terms.article10.item2":
      "公司可变更服务内容、运营方式等，重大变更事项将提前通知。",

    "terms.article11.title": "第十一条（内容管理）",
    "terms.article11.item1": "用户上传的照片及合同信息的著作权归用户所有。",
    "terms.article11.item2":
      "公司仅在服务提供目的（AI分析、报告生成）范围内使用用户内容。",
    "terms.article11.item3":
      "合同相关数据在合同终止后安全保管5年（依据《住房租赁保护法》诉讼时效标准）。",

    "terms.article12.title": "第十二条（损害赔偿）",
    "terms.article12.item1":
      "因公司故意或重大过失导致用户遭受损害的，公司应依据相关法律法规进行赔偿。",
    "terms.article12.item2": "因AI分析结果不准确导致的损害适用第七条免责条款。",

    "terms.article13.title": "第十三条（争议解决）",
    "terms.article13.item1":
      "因服务使用引发公司与用户之间的争议时，双方应诚实协商以求妥善解决。",
    "terms.article13.item2": "协商未达成一致时，管辖法院依据民事诉讼法确定。",

    "terms.article14.title": "第十四条（其他）",
    "terms.article14.content":
      "本条款未规定的事项，依照相关法律法规及商业惯例处理。",

    "terms.supplement.title": "附则",
    "terms.supplement.content": "本条款自2026年3月1日起施行。",

    "terms.company": "interstick株式会社（interstick Corp）",
  },

  es: {
    "terms.pageTitle": "Términos de Servicio - homepic AI",
    "terms.title": "Términos de Servicio de homepic AI",
    "terms.effectiveDate": "Vigente desde: 1 de marzo de 2026",

    "terms.article1.title": "Artículo 1 (Propósito)",
    "terms.article1.content":
      'Estos Términos regulan las condiciones, procedimientos y los derechos, obligaciones y responsabilidades de la Empresa y los Usuarios en relación con el uso del servicio de recopilación de evidencia de defectos en propiedades de alquiler "homepic AI" (en adelante, el "Servicio") proporcionado por interstick Corp (en adelante, la "Empresa").',

    "terms.article2.title": "Artículo 2 (Definiciones)",
    "terms.article2.item1":
      '"Servicio" se refiere a todos los servicios proporcionados por la Empresa, incluidos la detección de defectos basada en IA, el análisis comparativo de fotos de entrada y salida, y la generación de informes de evidencia de defectos en PDF.',
    "terms.article2.item2":
      '"Usuario" se refiere a cualquier persona que utilice el Servicio de acuerdo con estos Términos.',
    "terms.article2.item3":
      '"Contenido" se refiere a fotos, información contractual, resultados de análisis de IA, informes y otros materiales cargados por el Usuario a través del Servicio.',

    "terms.article3.title":
      "Artículo 3 (Vigencia y Modificación de los Términos)",
    "terms.article3.item1":
      "Estos Términos se aplican a todos los Usuarios que deseen utilizar el Servicio.",
    "terms.article3.item2":
      "La Empresa podrá modificar estos Términos en la medida en que no infrinjan la legislación aplicable y notificará a los Usuarios a través de la aplicación al menos 7 días antes de la fecha de entrada en vigor de dicha modificación.",
    "terms.article3.item3":
      "Si un Usuario no está de acuerdo con los Términos modificados, podrá dejar de utilizar el Servicio y darse de baja.",

    "terms.article4.title": "Artículo 4 (Descripción del Servicio)",
    "terms.article4.desc": "La Empresa proporciona los siguientes servicios:",
    "terms.article4.item1":
      "Captura y almacenamiento de fotos por habitación al momento de la mudanza",
    "terms.article4.item2":
      "Captura de fotos al momento de la salida y análisis comparativo con IA respecto a las fotos de entrada",
    "terms.article4.item3":
      "Clasificación de tipos de defectos (sospecha de negligencia, desgaste natural, defectos preexistentes)",
    "terms.article4.item4":
      "Generación de informes de evidencia de defectos en PDF para referencia legal",
    "terms.article4.item5":
      "Funciones de gestión de contratos y guía fotográfica",
    "terms.article4.item6":
      "Otros servicios desarrollados y proporcionados adicionalmente por la Empresa",

    "terms.article5.title": "Artículo 5 (Registro y Cancelación de Cuenta)",
    "terms.article5.item1":
      "Los Usuarios pueden registrarse a través del inicio de sesión social de Kakao, Google o Apple, o por correo electrónico.",
    "terms.article5.item2":
      "Los miembros pueden solicitar la cancelación de su cuenta en cualquier momento a través de la sección Mi Página dentro de la aplicación.",
    "terms.article5.item3":
      "Tras la cancelación, la información personal se procesará de acuerdo con la Política de Privacidad, y los datos sujetos a retención obligatoria por ley se conservarán durante el período requerido antes de su destrucción.",

    "terms.article6.title": "Artículo 6 (Tarifas del Servicio y Pago)",
    "terms.article6.item1":
      "El Plan Gratuito incluye 1 propiedad, 30 fotos al mes y 3 análisis IA al mes.",
    "terms.article6.item2":
      "El Plan Pro cuesta $4.99/mes o $49.99/año y ofrece propiedades ilimitadas, captura de fotos y análisis IA (uso justo dentro de 500 al mes). Las solicitudes de IA que excedan 500 al mes pueden limitarse temporalmente para prevenir abuso.",
    "terms.article6.item3":
      "Las suscripciones de pago se procesan mediante compra dentro de la aplicación (Apple App Store, Google Play Store). Los ciclos y tarifas pueden consultarse en la pantalla de gestión de suscripciones.",
    "terms.article6.item4":
      "Las cancelaciones de pago y los reembolsos están sujetos a las políticas de reembolso de las respectivas tiendas de aplicaciones.",

    "terms.article7.title":
      "Artículo 7 (Exención de Responsabilidad por Resultados de Análisis de IA)",
    "terms.article7.item1":
      "Los resultados del análisis de IA proporcionados por el Servicio son solo para fines de referencia y no garantizan validez legal.",
    "terms.article7.item2":
      "Dado que el análisis de IA se basa en imágenes fotográficas, los resultados pueden variar según las condiciones de captura (iluminación, ángulo, resolución, etc.).",
    "terms.article7.item3":
      "Para procedimientos legales como disputas sobre depósitos de garantía, se recomienda complementar con inspecciones presenciales realizadas por profesionales.",
    "terms.article7.item4":
      "La Empresa no garantiza la exactitud ni la integridad de los resultados del análisis de IA y no será responsable de las decisiones o acciones tomadas por los Usuarios basándose en dichos resultados.",

    "terms.article8.title": "Artículo 8 (Obligaciones del Usuario)",
    "terms.article8.item1":
      "Los Usuarios no deberán realizar las siguientes actividades:",
    "terms.article8.item1.sub1":
      "Apropiación indebida de información personal de terceros o registro de información falsa",
    "terms.article8.item1.sub2":
      "Uso del Servicio en violación de leyes u orden público",
    "terms.article8.item1.sub3":
      "Interferencia o menoscabo de la estabilidad de las operaciones del Servicio",
    "terms.article8.item1.sub4":
      "Vulneración de derechos de propiedad, derechos de imagen o privacidad de terceros",
    "terms.article8.item1.sub5":
      "Ingeniería inversa, copia no autorizada o manipulación del Servicio",
    "terms.article8.item2":
      "Los Usuarios son responsables de la exactitud de las fotos tomadas y la información contractual registrada.",

    "terms.article9.title": "Artículo 9 (Obligaciones de la Empresa)",
    "terms.article9.item1":
      "La Empresa se esforzará por proporcionar un Servicio continuo y estable de conformidad con las leyes aplicables y estos Términos.",
    "terms.article9.item2":
      "La Empresa establecerá y cumplirá una Política de Privacidad para proteger la información personal de los Usuarios.",
    "terms.article9.item3":
      "La Empresa procesará las opiniones o quejas planteadas por los Usuarios respecto al uso del Servicio mediante procedimientos adecuados.",

    "terms.article10.title":
      "Artículo 10 (Suspensión y Modificación del Servicio)",
    "terms.article10.item1":
      "La Empresa podrá suspender temporalmente la totalidad o parte del Servicio por circunstancias inevitables como fuerza mayor, fallos del sistema o mantenimiento programado.",
    "terms.article10.item2":
      "La Empresa podrá modificar el contenido u operación del Servicio y notificará previamente los cambios significativos.",

    "terms.article11.title": "Artículo 11 (Gestión de Contenido)",
    "terms.article11.item1":
      "Los derechos de autor de las fotos e información contractual cargadas por los Usuarios pertenecen a los Usuarios.",
    "terms.article11.item2":
      "La Empresa podrá utilizar el Contenido del Usuario únicamente con el propósito de prestar el Servicio (análisis de IA, generación de informes).",
    "terms.article11.item3":
      "Los datos relacionados con contratos se conservarán de forma segura durante 5 años después de la terminación del contrato (según el plazo de prescripción de la Ley de Protección del Arrendamiento de Viviendas).",

    "terms.article12.title": "Artículo 12 (Responsabilidad por Daños)",
    "terms.article12.item1":
      "Si el Usuario sufre daños debido a conducta dolosa o negligencia grave de la Empresa, esta compensará dichos daños de conformidad con las leyes aplicables.",
    "terms.article12.item2":
      "Las disposiciones de exención de responsabilidad del Artículo 7 se aplicarán a los daños derivados de inexactitudes en los resultados del análisis de IA.",

    "terms.article13.title": "Artículo 13 (Resolución de Disputas)",
    "terms.article13.item1":
      "En caso de disputa entre la Empresa y un Usuario respecto al uso del Servicio, ambas partes negociarán de buena fe para alcanzar una resolución amistosa.",
    "terms.article13.item2":
      "Si no se alcanza un acuerdo, el tribunal competente se determinará de conformidad con la Ley de Enjuiciamiento Civil.",

    "terms.article14.title": "Artículo 14 (Disposiciones Varias)",
    "terms.article14.content":
      "Las materias no estipuladas en estos Términos se regirán por las leyes aplicables y las prácticas comerciales habituales.",

    "terms.supplement.title": "Disposiciones Complementarias",
    "terms.supplement.content":
      "Estos Términos entran en vigor el 1 de marzo de 2026.",

    "terms.company": "interstick Corp",
  },

  de: {
    "terms.pageTitle": "Nutzungsbedingungen - homepic AI",
    "terms.title": "homepic AI Nutzungsbedingungen",
    "terms.effectiveDate": "Gültig ab: 1. März 2026",

    "terms.article1.title": "Artikel 1 (Zweck)",
    "terms.article1.content":
      "Diese Bedingungen regeln die Nutzungsvoraussetzungen und -verfahren sowie die Rechte, Pflichten und Verantwortlichkeiten des Unternehmens und der Nutzer in Bezug auf den von interstick Corp (nachfolgend „Unternehmen“) bereitgestellten Mietmängel-Beweissicherungsdienst „homepic AI“ (nachfolgend „Dienst“).",

    "terms.article2.title": "Artikel 2 (Begriffsbestimmungen)",
    "terms.article2.item1":
      "„Dienst“ bezeichnet alle vom Unternehmen bereitgestellten Leistungen, einschließlich KI-basierter Mängelerkennung, Ein-/Auszugsfotovergleichsanalyse und Erstellung von PDF-Mängelbeweisberichten.",
    "terms.article2.item2":
      "„Nutzer“ bezeichnet jede Person, die den Dienst gemäß diesen Bedingungen nutzt.",
    "terms.article2.item3":
      "„Inhalte“ bezeichnet Fotos, Vertragsinformationen, KI-Analyseergebnisse, Berichte und andere Materialien, die vom Nutzer über den Dienst hochgeladen werden.",

    "terms.article3.title":
      "Artikel 3 (Gültigkeit und Änderung der Bedingungen)",
    "terms.article3.item1":
      "Diese Bedingungen gelten für alle Nutzer, die den Dienst nutzen möchten.",
    "terms.article3.item2":
      "Das Unternehmen kann diese Bedingungen ändern, sofern dies nicht gegen geltendes Recht verstößt, und wird die Nutzer mindestens 7 Tage vor dem Inkrafttreten der Änderung über die App benachrichtigen.",
    "terms.article3.item3":
      "Stimmt ein Nutzer den geänderten Bedingungen nicht zu, kann er die Nutzung des Dienstes einstellen und sein Konto kündigen.",

    "terms.article4.title": "Artikel 4 (Leistungsbeschreibung)",
    "terms.article4.desc": "Das Unternehmen erbringt folgende Leistungen:",
    "terms.article4.item1":
      "Raumweise Fotoerfassung und -speicherung beim Einzug",
    "terms.article4.item2":
      "Fotoerfassung beim Auszug und KI-Vergleichsanalyse mit Einzugsfotos",
    "terms.article4.item3":
      "Mängeltyp-Klassifizierung (Verdacht auf Fahrlässigkeit, natürliche Abnutzung, vorbestehende Mängel)",
    "terms.article4.item4":
      "Erstellung von PDF-Mängelbeweisberichten zur rechtlichen Referenz",
    "terms.article4.item5": "Vertragsverwaltung und Foto-Anleitungsfunktionen",
    "terms.article4.item6":
      "Weitere vom Unternehmen zusätzlich entwickelte und bereitgestellte Dienste",

    "terms.article5.title": "Artikel 5 (Registrierung und Kontolöschung)",
    "terms.article5.item1":
      "Nutzer können sich über Kakao-, Google- oder Apple-Social-Login oder per E-Mail registrieren.",
    "terms.article5.item2":
      "Mitglieder können jederzeit über den Bereich „Meine Seite“ in der App die Kontolöschung beantragen.",
    "terms.article5.item3":
      "Bei Kontolöschung werden personenbezogene Daten gemäß der Datenschutzrichtlinie verarbeitet; Daten, die einer gesetzlichen Aufbewahrungspflicht unterliegen, werden für den vorgeschriebenen Zeitraum aufbewahrt und anschließend vernichtet.",

    "terms.article6.title": "Artikel 6 (Servicegebühren und Zahlung)",
    "terms.article6.item1":
      "Der Kostenlos-Plan enthält 1 Immobilie, 30 Fotos pro Monat und 3 KI-Analysen pro Monat.",
    "terms.article6.item2":
      "Das Pro-Abonnement kostet $4.99/Monat oder $49.99/Jahr und bietet unbegrenzte Immobilien, Fotoaufnahmen und KI-Analysen (faire Nutzung bis zu 500 pro Monat). KI-Anfragen, die 500 pro Monat überschreiten, können zur Missbrauchsprävention vorübergehend gedrosselt werden.",
    "terms.article6.item3":
      "Kostenpflichtige Abonnements werden per In-App-Kauf (Apple App Store, Google Play Store) abgewickelt. Abrechnungszyklen und Gebühren können auf dem Abonnementverwaltungsbildschirm in der App eingesehen werden.",
    "terms.article6.item4":
      "Zahlungsstornierungen und Erstattungen unterliegen den Erstattungsrichtlinien der jeweiligen App Stores.",

    "terms.article7.title":
      "Artikel 7 (Haftungsausschluss für KI-Analyseergebnisse)",
    "terms.article7.item1":
      "Die vom Dienst bereitgestellten KI-Analyseergebnisse dienen ausschließlich zu Referenzzwecken und garantieren keine rechtliche Gültigkeit.",
    "terms.article7.item2":
      "Da die KI-Analyse auf fotografischen Bildern basiert, können die Ergebnisse je nach Aufnahmebedingungen (Beleuchtung, Winkel, Auflösung usw.) variieren.",
    "terms.article7.item3":
      "Bei Rechtsverfahren wie Kautionsstreitigkeiten wird empfohlen, diese durch professionelle Vor-Ort-Inspektionen zu ergänzen.",
    "terms.article7.item4":
      "Das Unternehmen garantiert weder die Genauigkeit noch die Vollständigkeit der KI-Analyseergebnisse und haftet nicht für Entscheidungen oder Handlungen, die Nutzer auf Grundlage dieser Ergebnisse treffen.",

    "terms.article8.title": "Artikel 8 (Pflichten der Nutzer)",
    "terms.article8.item1":
      "Nutzer dürfen folgende Handlungen nicht vornehmen:",
    "terms.article8.item1.sub1":
      "Missbrauch personenbezogener Daten Dritter oder Registrierung falscher Informationen",
    "terms.article8.item1.sub2":
      "Nutzung des Dienstes unter Verstoß gegen Gesetze oder die öffentliche Ordnung",
    "terms.article8.item1.sub3":
      "Beeinträchtigung oder Gefährdung der Stabilität des Dienstbetriebs",
    "terms.article8.item1.sub4":
      "Verletzung von Eigentumsrechten, Persönlichkeitsrechten oder der Privatsphäre Dritter",
    "terms.article8.item1.sub5":
      "Reverse Engineering, unbefugtes Kopieren oder Manipulation des Dienstes",
    "terms.article8.item2":
      "Nutzer sind für die Richtigkeit der aufgenommenen Fotos und der registrierten Vertragsinformationen verantwortlich.",

    "terms.article9.title": "Artikel 9 (Pflichten des Unternehmens)",
    "terms.article9.item1":
      "Das Unternehmen ist bestrebt, einen kontinuierlichen und stabilen Dienst gemäß geltendem Recht und diesen Bedingungen bereitzustellen.",
    "terms.article9.item2":
      "Das Unternehmen erstellt eine Datenschutzrichtlinie zum Schutz der personenbezogenen Daten der Nutzer und hält diese ein.",
    "terms.article9.item3":
      "Das Unternehmen bearbeitet von Nutzern im Zusammenhang mit der Dienstnutzung vorgebrachte Meinungen oder Beschwerden über geeignete Verfahren.",

    "terms.article10.title": "Artikel 10 (Dienstunterbrechung und -änderung)",
    "terms.article10.item1":
      "Das Unternehmen kann den Dienst ganz oder teilweise vorübergehend unterbrechen, wenn unvermeidbare Umstände wie höhere Gewalt, Systemausfälle oder planmäßige Wartungsarbeiten vorliegen.",
    "terms.article10.item2":
      "Das Unternehmen kann den Inhalt oder Betrieb des Dienstes ändern und wird über wesentliche Änderungen vorab informieren.",

    "terms.article11.title": "Artikel 11 (Inhaltsverwaltung)",
    "terms.article11.item1":
      "Das Urheberrecht an von Nutzern hochgeladenen Fotos und Vertragsinformationen verbleibt bei den Nutzern.",
    "terms.article11.item2":
      "Das Unternehmen darf Nutzerinhalte ausschließlich zum Zweck der Diensterbringung (KI-Analyse, Berichtserstellung) verwenden.",
    "terms.article11.item3":
      "Vertragsbezogene Daten werden nach Vertragsende 5 Jahre lang sicher aufbewahrt (basierend auf der Verjährungsfrist des Wohnraummieterschutzgesetzes).",

    "terms.article12.title": "Artikel 12 (Schadensersatz)",
    "terms.article12.item1":
      "Erleidet der Nutzer Schäden aufgrund vorsätzlichen oder grob fahrlässigen Verhaltens des Unternehmens, leistet das Unternehmen gemäß geltendem Recht Schadensersatz.",
    "terms.article12.item2":
      "Die Haftungsausschlussbestimmungen des Artikels 7 gelten für Schäden, die aus Ungenauigkeiten der KI-Analyseergebnisse entstehen.",

    "terms.article13.title": "Artikel 13 (Streitbeilegung)",
    "terms.article13.item1":
      "Im Falle einer Streitigkeit zwischen dem Unternehmen und einem Nutzer bezüglich der Dienstnutzung verhandeln beide Parteien in gutem Glauben über eine gütliche Einigung.",
    "terms.article13.item2":
      "Kommt keine Einigung zustande, wird das zuständige Gericht gemäß der Zivilprozessordnung bestimmt.",

    "terms.article14.title": "Artikel 14 (Sonstiges)",
    "terms.article14.content":
      "Angelegenheiten, die in diesen Bedingungen nicht geregelt sind, unterliegen dem geltenden Recht und den üblichen Geschäftspraktiken.",

    "terms.supplement.title": "Ergänzende Bestimmungen",
    "terms.supplement.content":
      "Diese Bedingungen treten am 1. März 2026 in Kraft.",

    "terms.company": "interstick Corp",
  },
};
