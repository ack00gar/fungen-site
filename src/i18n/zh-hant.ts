import type { Strings } from './en';

// Traditional Chinese, TAIWAN vocabulary - not a character conversion of `zh`.
// A naive 简->繁 pass yields mainland terms in Traditional glyphs, which reads
// as visibly foreign to a TW/HK reader and defeats the point. The substantive
// swaps applied here: 视频->影片, 设备->裝置, 软件->軟體, 文件->檔案,
// 流媒体->串流, 兼容->相容, 教程->教學, 命令行->命令列, 本地->本機,
// 激活->啟用, 批量->批次, 帧->影格, 支持->支援, 通过->透過, 运行->執行.
// Serves TW, HK and MO (hreflang zh-Hant, script-based rather than zh-TW, so
// Hong Kong is covered by the same page).
export const zhHant = {
  langName: '繁體中文',
  seoTitle: 'FunGen · AI funscript 生成器｜2D 與 VR，全程離線',
  description:
    '用 AI 從 2D 與 VR 影片生成 funscript，全程在你自己的電腦上執行，不上傳任何檔案。內建影格級多軸編輯器。免費。',
  keywords: [
    'funscript',
    'funscript 生成器',
    'funscript 產生器',
    'AI funscript 生成器',
    'AI funscript',
    '製作 funscript',
    '免費 funscript',
    'VR funscript',
    '2D funscript',
    '影片生成 funscript',
    'funscript 編輯器',
    '自動生成 funscript',
    'VR funscript 生成器',
    'funscript 軟體',
    '多軸 funscript',
    'funscript 製作工具',
    'funscript 播放器',
    'funscript maker',
    'funscript generator',
    'AI funscript generation',
    'FunGen',
    '體感腳本',
    '互動影片',
    '互動腳本',
    '腳本生成器',
    'AI 生成 funscript',
    'VR 影片 funscript',
    'funscript 下載',
    'funscript 教學',
    'funscript 怎麼做',
    'funscript 製作教學',
    '多軸腳本',
    '影片轉 funscript',
    'Handy funscript',
    'OSR2 funscript',
  ],
  nav: {
    ai: 'AI 模型',
    features: '功能',
    devices: '裝置',
    pricing: '價格',
    faq: '常見問題',
    download: '下載',
  },
  hero: {
    head: '把影片變成 {funscript}，就在你的電腦上。',
    sub: 'FunGen 是一款桌面應用程式，專為 AI funscript 生成與編輯而打造。使用專屬 Pro AI 模型從 2D 與 VR 影片生成 funscript，在多軸時間軸上微調，並直接播放到你的裝置。單一原生執行檔，不需另外安裝任何東西。',
    ctaDownload: '下載 Windows、macOS、Linux 版本',
    ctaPricing: '查看價格',
    meta: '免費下載，供個人使用',
    osCta: '下載 {os} 版本',
    osAlso: '同樣支援 {platforms}',
    trust: ['免註冊', '免信用卡', '本機 AI'],
  },
  shot: {
    eyebrow: '實際畫面',
    title: '整套工作室，就在同一個視窗',
    body: '影片播放器、影格級時間軸、多軸軌道與 Doctor 品質面板並排呈現。生成、編輯、播放，不必切換任何工具。',
    alt: 'FunGen 編輯器介面，顯示影片播放器、多軸 funscript 時間軸與側邊面板',
  },
  ai: {
    eyebrow: '專屬 Pro AI 模型',
    title: '兩套 AI 模型，專為 funscript 打造',
    body: '一套用於 2D／平面影片，一套用於 VR。它們讀取畫面中的動作並生成完整的 funscript，全部在你自己的電腦上執行，也支援整個資料夾批次處理。',
    models: [
      {
        title: '2D／平面模型',
        body: '專為 2D／平面（非 VR）影片設計的 AI 模型。逐格追蹤畫面動作，生成流暢、完整行程的 funscript，可直接播放或再行微調。支援單片生成，也支援整個資料夾批次處理。',
      },
      {
        title: 'VR 模型',
        body: '專為 VR 打造的獨立模型。FunGen 會自動辨識魚眼、等距柱狀投影、左右並排與上下分割格式，在 GPU 上完成校正，並支援 POV 與非 POV 場景追蹤，讓 funscript 與你在頭戴裝置中看到的完全一致。',
      },
    ],
  },
  features: {
    eyebrow: '一站式完整應用程式',
    title: '從原始素材到完成的腳本',
    body: 'AI 生成、手動修飾、品質檢測、直接播放到裝置，全程不需要第二套工具。',
    items: [
      {
        title: 'AI 腳本生成',
        body: '把影片交給 FunGen，就能自動生成 funscript。專屬 AI funscript 生成器支援 VR 與 2D／平面影片，並為複雜場景提供獨立模式。全品質輸出，支援整個資料夾批次處理。',
      },
      {
        title: '影格級編輯器',
        body: '精準的多軸時間軸，內含章節功能與範圍、位移、縮放等轉換工具。無限次還原與重做，關閉後重新開啟依然保留。你可以從零手動建立腳本，也可以在 AI 生成的結果上微調。',
      },
      {
        title: '認真對待 VR',
        body: '自動辨識魚眼、等距柱狀投影、左右並排與上下分割配置，在 GPU 上完成校正，並支援 POV 與非 POV 兩種追蹤模式。',
      },
      {
        title: '即時裝置控制',
        body: '把腳本直接播放到你的硬體，支援各裝置的內插與延遲補償。可同時路由多個軸，或透過命令列在算圖主機上以無介面模式執行。',
      },
      {
        title: '串流與遠端播放',
        body: '內建支援 WebXR 的 HTTP 串流伺服器，以及 HereSphere 與 DeoVR 橋接和 XBVR 整合。裝置透過 mDNS 自動探索，可以從頭戴裝置或手機驅動播放。',
      },
      {
        title: 'Doctor 品質檢測',
        body: '品質檢測會找出不易察覺的空隙、遺漏的行程、死區與抖動。多數問題提供一鍵修正，並以評分直觀呈現腳本實際播起來的感覺。',
      },
    ],
  },
  devices: {
    eyebrow: '驅動你手上的玩具',
    title: '把 funscript 播放到你已經有的玩具上',
    body: '即時播放支援各裝置的內插與延遲補償，需要時也可做多軸路由。',
  },
  pricing: {
    eyebrow: '先試再買',
    title: '免費試用，解鎖完整實力。',
    body: '免費體驗 AI 並驅動你的裝置。準備好之後，解鎖全品質 Pro AI 模型，沒有限制，不必等待。你自己製作或編輯的 funscript 歸你所有，可以自由分享或販售。\n如需商業授權，請聯絡 fungen_ai@proton.me。',
    note: '付費方案皆為透過 PayPal 單次付款，通行證會以電子郵件寄送。\n你也可以透過 Patreon 上的 FunGen 方案取得 Pro，在訂閱有效期間持續有效。',
    plans: [
      {
        name: 'Free',
        cadence: '免費・永久',
        blurb: '完整編輯器與影片庫，附帶 AI 預覽與裝置控制體驗。完整 AI 功能需另外單次付款解鎖。',
        perks: [
          '影格級多軸編輯器',
          '轉換工具、章節功能、Doctor 分析',
          '影片庫、批次處理、播放器',
          '每日數次免費 AI 預覽（完整 AI 為 Pro 專屬）',
          '裝置控制與串流伺服器（有額度限制）',
        ],
        cta: '免費下載',
      },
      {
        name: 'Pro',
        cadence: '單次付款・1 年',
        blurb: '一年份的全品質 AI funscript 生成，包含該年度發布的所有 Pro 模型。',
        perks: [
          '包含 Free 的全部功能',
          '全品質 AI funscript 生成，使用 1 年',
          '該年度發布的所有全新 Pro AI 模型',
          '1 年後：Pro AI 停止，免費功能永久保留',
        ],
        cta: '取得 Pro',
        badge: '最多人選',
      },
      {
        name: 'Pro Perpetual',
        cadence: '單次付款・永久',
        blurb: '付一次，永久保有全品質 AI funscript 生成與所有未來的 Pro 模型。長期而言最划算。',
        perks: [
          '包含 Pro 的全部功能',
          'Pro AI funscript 生成永不過期',
          '所有未來的 Pro AI 模型一併包含',
          '永遠不需訂閱費',
        ],
        cta: '取得 Pro Perpetual',
      },
    ],
  },
  faq: {
    eyebrow: '實用須知',
    title: '常見問題',
    items: [
      {
        q: '什麼是 funscript？',
        a: 'funscript 是一種記錄動作隨時間變化的小型檔案。與影片同步播放時，它會逐一位置驅動相容的裝置。FunGen 使用 AI 從影片生成 funscript，讓你在精準的時間軸上編輯，並直接播放到你的硬體。',
      },
      {
        q: 'FunGen 的 AI funscript 生成是怎麼運作的？',
        a: '把 2D 或 VR 影片交給 FunGen，專屬 Pro AI 模型就會讀取畫面中的動作並自動生成完整的多軸 funscript。2D／平面影片與 VR 各有一套專屬模型。你可以生成單一片段，也可以整個資料夾批次處理，之後再手動微調。',
      },
      {
        q: 'FunGen 支援哪些平台？',
        a: 'Windows、macOS（Apple Silicon 原生）與 Linux。每個平台都是單一原生執行檔，不需要安裝 Python 執行環境，也不必處理一堆相依套件。AI 生成在本機 GPU 上執行（Windows 使用 DirectML，macOS 使用 CoreML，Linux 使用 CUDA）。',
      },
      {
        q: 'FunGen 是免費的嗎？',
        a: 'FunGen 是先試再買。免費下載供個人使用，提供完整的編輯器、播放器、影片庫、批次處理與 Doctor，另有每天數次的 AI 生成預覽以及有額度限制的裝置控制，讓你先測試 AI 和自己的硬體。準備好之後，透過 PayPal 單次付款，或訂閱 Patreon 的 FunGen 方案（訂閱期間享有 Pro），即可解鎖全品質 Pro AI 模型，沒有限制，不必等待。你自己製作或編輯的 funscript 歸你所有，可以自由分享或販售。販售使用 Pro AI 生成的 funscript 需要商業授權；FunGen 本身不得轉售或再散布。請聯絡 fungen_ai@proton.me。',
      },
      {
        q: '支援哪些裝置？',
        a: '支援 The Handy（HTTPS 與 Bluetooth LE）、Autoblow Ultra、Vacuglide、OSR 系列（OSR2、SR6、SSR1，透過 T-Code 連接），以及任何可透過 Buttplug.io 或 Intiface 存取的裝置。',
      },
      {
        q: 'Pro 的一年方案到底包含什麼？',
        a: 'Pro 是單次付款，解鎖全品質 AI funscript 生成，以及該年度發布的所有全新 Pro AI 模型，有效期一年。這不只是一年份的應用程式更新，而是一年份對 Pro AI 模型本身的使用權。期限到了之後，Pro AI funscript 生成會停止，免費功能（編輯器、播放器、影片庫、批次處理、Doctor）則永久保留。如果想永久使用 Pro AI 模型，請選擇 Pro Perpetual。',
      },
      {
        q: '要怎麼付款與解鎖？',
        a: '單次付費方案（Pro、Pro Perpetual）皆透過 PayPal 付款；付款後通行證會寄到你的電子郵件，在應用程式中啟用即可使用。你也可以訂閱 Patreon 上的 FunGen 方案，在會員有效期間持續享有 FunGen Pro。也可以用 USDT（TRC-20）付款：請見價格區的加密貨幣選項與圖文教學。',
      },
      {
        q: '有公開原始碼嗎？',
        a: '目前並非開源。你可以下載各平台的現成版本；原始碼本身暫不公開。如有疑問或需要商業授權，請聯絡 fungen_ai@proton.me。',
      },
    ],
  },
  finalCta: {
    title: '準備好生成你的第一個 funscript 了嗎？',
    body: '立即下載 FunGen，幾分鐘內就能生成你的第一個 funscript。',
    cta: '下載 FunGen',
  },
  footer: {
    download: '下載',
    patreon: 'Patreon',
    discord: 'Discord',
    contact: '聯絡我們',
    fine: '© FunGen · 個人使用免費 · 問題與商業授權：fungen_ai@proton.me',
  },
} satisfies Strings;
