import type { ShowcaseStrings } from './showcase';

// Traditional Chinese (Taiwan vocabulary) - see the header note in
// `zh-hant.ts` for why this is a real localisation and not a 简->繁 pass.
export const zhHant: ShowcaseStrings = {
  editor: {
    eyebrow: '應用程式',
    title: '一切都在同一個視窗',
    body: '影片、多軸時間軸、熱度圖總覽、即時統計、AI funscript 生成與 the Doctor，全部整合在同一個介面。生成、編輯、檢查與播放，都不必離開視窗。',
    alt: 'FunGen 編輯器，包含影片區域、多軸時間軸與側邊面板',
  },
  gen: {
    eyebrow: 'FunGenerate',
    title: '看著 funscript 自動生成',
    body: '把 FunGen 指向任何一部影片，它就會自動幫你生成動作。免費體驗：對任何場景執行 20 秒的 FunGenerate 預覽，在正式生成前先感受輸出品質。',
    chips: ['免費 20 秒預覽', '2D 與 VR', '完整影片或選取片段'],
    alt: '正在生成中的 funscript，逐漸填滿整個時間軸',
  },
  doctor: {
    eyebrow: 'Funscript Doctor',
    title: '把你的 funscript 照顧好',
    body: '會考量裝置特性的品質評分，範圍 0 到 100。the Doctor 會找出超速、偏離影格的點、死區與遺漏的動作，告訴你這份腳本是否已經可以在你的裝置上發布，多數問題還能一鍵修正。',
    chips: ['0 到 100 評分', '因應裝置', '一鍵修正'],
    alt: 'Funscript Doctor 對話框，顯示品質評分與問題清單',
    insetAlt: 'Funscript Doctor 摘要卡片',
  },
  transforms: {
    eyebrow: '轉換與外掛',
    title: '你的 funscript 工具箱',
    body: '數十種外掛與一鍵快速修正，涵蓋幅度、平滑、速度限制與時間調整。把你常用的組合成 Pipelines，一鍵完成整套調校。',
    chips: ['Autotune', 'Reshape', 'Pipelines'],
    alt: '外掛庫，依 Autotune、Reshape 與 Limit 分類顯示',
    insetAlt: '正在調整時間軸形狀的轉換視窗',
  },
  chapters: {
    eyebrow: '章節與書籤',
    title: '為長腳本建立結構',
    body: '把場景拆成有名稱、有顏色的章節，一鍵加入書籤，並透過「上次編輯」與「上次播放位置」標記，從你離開的地方接著做。',
    chips: ['顏色標示', '一鍵書籤', '開啟時回到原處'],
    alt: '章節與書籤面板',
  },
  streamer: {
    eyebrow: 'Streamer',
    title: '串流到任何裝置',
    body: '把你的影片和它的 funscript 傳送到網路上的任何裝置，同時由 FunGen 同步驅動你的裝置。Streamer 已經內建，不需要另外安裝應用程式。',
    chips: ['任何裝置', '驅動你的裝置', '不需另裝程式'],
    alt: 'Streamer 面板',
  },
  palette: {
    eyebrow: '命令選擇區',
    title: '一鍵直達所有功能',
    body: '按一個鍵，用名稱執行任何功能。',
    chips: ['操作', 'Plugins', '佈景主題'],
    alt: '命令選擇區搜尋操作中',
  },
  shortcuts: {
    eyebrow: '快速鍵',
    title: '按鍵由你決定',
    body: '每一個按鍵、滑鼠與鍵盤操作都能重新設定。FunGen 會辨識你實際的鍵盤配置，確保在 AZERTY 或 QWERTZ 上也都落在正確的位置。',
    chips: ['完全可重新設定', '滑鼠與鍵盤', '辨識鍵盤配置'],
    alt: '快速鍵編輯器，顯示可重新設定的按鍵',
  },
  devicesAlt: 'FunGen 裝置對話框，列出支援的裝置',
  community: '加入 Discord，已有 {n}+ 人',
  tryCallout: {
    title: '先試再買',
    body: '對任何影片的任何片段執行 FunGenerate、驅動你自己的裝置、使用 the Doctor，這些在免費版裡都能完整體驗。真的滿意了再付費。',
  },
};
