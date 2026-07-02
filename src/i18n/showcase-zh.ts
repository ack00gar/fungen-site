import type { ShowcaseStrings } from './showcase';

export const zh: ShowcaseStrings = {
  editor: {
    eyebrow: '应用程序',
    title: '一切尽在一个窗口',
    body: '视频、多轴时间轴、热图概览、实时统计、AI funscript 生成与 the Doctor，全部整合在同一界面。生成、编辑、检查与播放，无需离开窗口。',
    alt: 'FunGen 编辑器，包含视频区域、多轴时间轴与侧边面板',
  },
  gen: {
    eyebrow: 'FunGenerate',
    title: '看着 funscript 自动生成',
    body: '将 FunGen 指向任意视频，它将自动为您生成动作。免费体验：对任意场景运行 20 秒 FunGenerate 预览，在正式生成前先感受输出质量。',
    chips: ['免费 20 秒预览', '2D 与 VR', '完整视频或选定片段'],
    alt: '正在生成的 funscript，填充整个时间轴',
  },
  doctor: {
    eyebrow: 'Funscript Doctor',
    title: '打理好你的 funscript',
    body: '设备感知质量评分，范围 0 到 100。the Doctor 会检测速度违规、偏帧点、死区与缺失动作，告知您脚本是否已可在您的设备上发布，并一键修复大多数问题。',
    chips: ['0 至 100 评分', '设备感知', '一键修复'],
    alt: 'Funscript Doctor 对话框，显示质量评分与问题列表',
    insetAlt: 'Funscript Doctor 摘要卡片',
  },
  transforms: {
    eyebrow: '变换与插件',
    title: '你的 funscript 工具箱',
    body: '数十款插件与一键快捷修复，涵盖幅度、平滑、速度限制与时序调整。将您常用的功能组合成 Pipelines，一键完成全面优化。',
    chips: ['Autotune', 'Reshape', 'Pipelines'],
    alt: '插件库，按 Autotune、Reshape 与 Limit 分类展示',
    insetAlt: '正在调整时间轴形状的变换弹窗',
  },
  chapters: {
    eyebrow: '章节与书签',
    title: '为长脚本建立结构',
    body: '将场景拆分为带名称、色彩标注的章节，一键添加书签，并通过最后编辑与最后播放头标记从上次离开的位置继续。',
    chips: ['颜色标注', '一键书签', '打开时恢复进度'],
    alt: '章节与书签面板',
  },
  streamer: {
    eyebrow: 'Streamer',
    title: '串流至任意设备',
    body: '将您的视频及其 funscript 发送至网络中的任意设备，同时由 FunGen 同步驱动您的设备。Streamer 已内置，无需安装额外应用。',
    chips: ['任意设备', '驱动您的设备', '无需额外应用'],
    alt: 'Streamer 面板',
  },
  palette: {
    eyebrow: '命令面板',
    title: '一键直达所有功能',
    body: '按下按键，按名称运行任意功能。',
    chips: ['操作', 'Plugins', '主题'],
    alt: '命令面板搜索操作',
  },
  shortcuts: {
    eyebrow: '快捷键',
    title: '按键由您做主',
    body: '重新绑定每一个按键、鼠标与键盘操作。FunGen 能识别您的实体键盘布局，确保绑定在 AZERTY 或 QWERTZ 上均落在正确位置。',
    chips: ['完全可重绑定', '鼠标与键盘', '布局感知'],
    alt: '快捷键编辑器，显示可重绑定的按键',
  },
  devicesAlt: 'FunGen 设备对话框，列出支持的设备',
  community: '加入 {n}+ 用户的 Discord 社区',
  tryCallout: {
    title: '先试后买',
    body: '对任意视频的任意片段运行 FunGenerate，驱动您自己的设备，并使用 the Doctor，所有功能均可在免费下载版中体验。只有在您真正满意后才需付费。',
  },
};
