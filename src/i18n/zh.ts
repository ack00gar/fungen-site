import type { Strings } from './en';

export const zh = {
  langName: '简体中文',
  seoTitle: 'FunGen · AI funscript 生成器，支持 2D 与 VR 视频',
  description:
    '用 AI 从 2D 与 VR 视频生成 funscript，或在多轴时间轴上手动编辑。可播放至你的设备，全程离线运行在你自己的电脑上。免费下载。',
  keywords: [
    'funscript',
    'funscript 生成器',
    'AI funscript 生成器',
    'AI funscript',
    '制作 funscript',
    '免费 funscript',
    'VR funscript',
    '2D funscript',
    '视频生成 funscript',
    'funscript 编辑器',
    '自动生成 funscript',
    'VR funscript 生成器',
    'funscript 软件',
    '多轴 funscript',
    'funscript 制作工具',
    'funscript 播放器',
    'funscript maker',
    'funscript generator',
    'AI funscript generation',
    'FunGen',
    '体感脚本',
    '互动视频',
    '互动脚本',
    '脚本生成器',
    'AI 生成 funscript',
    'VR 视频 funscript',
    'funscript 下载',
    'funscript 教程',
    'funscript 怎么做',
    'funscript 制作教程',
    '多轴脚本',
    '视频转 funscript',
  ],
  nav: {
    ai: 'AI 模型',
    features: '功能',
    devices: '设备',
    pricing: '价格',
    faq: '常见问题',
    download: '下载',
  },
  hero: {
    head: '将视频转化为 {funscript}，就在你的电脑上。',
    sub: 'FunGen 是一款桌面应用，专为 AI funscript 生成与编辑而设计。利用专属 Pro AI 模型从 2D 及 VR 视频中生成 funscript，在多轴时间轴上精细调整，并直接播放至您的设备。单一原生可执行文件，无需额外安装。',
    ctaDownload: '下载 Windows、macOS、Linux 版本',
    ctaPricing: '查看价格',
    meta: '免费下载，供个人使用',
    osCta: '下载 {os} 版本',
    osAlso: '同样支持 {platforms}',
    trust: ['无需注册', '无需信用卡', '本地 AI'],
  },
  shot: {
    eyebrow: '实际效果展示',
    title: '全套创作工具，尽在一窗',
    body: '视频播放器、逐帧精确时间轴、多轴轨道与 Doctor 质检面板并排呈现。生成、编辑、播放，无需切换任何工具。',
    alt: 'FunGen 编辑器界面，展示视频播放器、多轴 funscript 时间轴及侧边面板',
  },
  ai: {
    eyebrow: '专属 Pro AI 模型',
    title: '两款 AI 模型，专为 funscript 打造',
    body: '一款模型用于 2D / 平面视频，一款用于 VR。它们读取画面动作并生成完整的 funscript，在您自己的机器上本地运行，支持整文件夹批量处理。',
    models: [
      {
        title: '2D / 平面模型',
        body: '专为 2D/平面（非 VR）视频设计的 AI 模型。逐帧追踪画面动作，生成流畅、完整行程的 funscript，可直接播放或按需精细调整。支持单片生成或整文件夹批量处理。',
      },
      {
        title: 'VR 模型',
        body: '专为 VR 打造的独立模型。FunGen 自动识别鱼眼、等距柱状、左右并列及上下分屏格式，在 GPU 上完成展平处理，并支持 POV 与非 POV 场景追踪，确保 funscript 与头显中所见完全匹配。',
      },
    ],
  },
  features: {
    eyebrow: '一站式完整应用',
    title: '从原始素材到完成脚本',
    body: 'AI 生成、手动精修、质量检测、直接播放至设备，全流程无需第二款工具。',
    items: [
      {
        title: 'AI 脚本生成',
        body: '将视频指向 FunGen，即可自动生成 funscript。专属 AI funscript 生成器支持 VR 与 2D/平面视频，并针对复杂场景提供独立模式。全质量输出，支持整文件夹批量处理。',
      },
      {
        title: '逐帧精确编辑器',
        body: '精确的多轴时间轴，配备章节功能与范围、偏移、缩放等变换工具。撤销与重做次数无限，重新打开后依然保留。可从头手动构建脚本，也可在 AI 生成结果上精细修改。',
      },
      {
        title: '专业 VR 支持',
        body: '自动识别鱼眼、等距柱状、左右并列及上下分屏布局，在 GPU 上完成展平，并支持 POV 与非 POV 两种追踪模式。',
      },
      {
        title: '实时设备控制',
        body: '将脚本直接播放至您的硬件，支持每设备插值与延迟补偿。可同时路由多个轴，或通过命令行在渲染机上无界面运行。',
      },
      {
        title: '流媒体与远程播放',
        body: '内置支持 WebXR 的 HTTP 流媒体服务，以及 HereSphere 和 DeoVR 桥接与 XBVR 集成。设备通过 mDNS 自动发现，可从头显或手机驱动播放会话。',
      },
      {
        title: 'Doctor 质检',
        body: '质量检测功能可捕捉难以察觉的空白、缺失行程、死区与抖动。大多数问题提供一键修复，逐帧评分直观呈现脚本的实际体验效果。',
      },
    ],
  },
  devices: {
    eyebrow: '驱动您的情趣玩具',
    title: '将 funscripts 播放至您已有的情趣玩具',
    body: '实时播放支持每设备插值与延迟补偿，按需提供多轴路由功能。',
  },
  pricing: {
    eyebrow: '先试后买',
    title: '免费试用，解锁全部潜能。',
    body: '免费体验 AI 并驱动你的设备。准备就绪后，解锁全品质 Pro AI 模型，没有限制，无需等待。你自己制作或编辑的 funscript 归你所有，可自由分享或出售。\n如需商业许可，请联系 fungen_ai@proton.me。',
    note: '付费层级均为通过 PayPal 一次性付款，通行证将通过电子邮件发送。\n您也可以通过 Patreon 上的 FunGen 层级获得 Pro，在订阅有效期内持续有效。',
    plans: [
      {
        name: 'Free',
        cadence: '免费・永久',
        blurb: '完整编辑器与视频库，附带 AI 预览及设备控制体验。完整 AI 功能需额外一次性付款解锁。',
        perks: [
          '逐帧精确多轴编辑器',
          '变换工具、章节功能、Doctor 分析',
          '视频库、批量处理、播放器',
          '每日数次免费 AI 预览（完整 AI 为 Pro 专属）',
          '设备控制与流媒体服务（有限额）',
        ],
        cta: '免费下载',
      },
      {
        name: 'Pro',
        cadence: '一次性付款・1 年',
        blurb: '一年完整质量 AI funscript 生成，含该年发布的所有 Pro 模型。',
        perks: [
          '包含 Free 全部功能',
          '完整质量 AI funscript 生成使用 1 年',
          '该年发布的所有全新 Pro AI 模型',
          '1 年后：Pro AI 停止，免费功能永久保留',
        ],
        cta: '获取 Pro',
        badge: '最受欢迎',
      },
      {
        name: 'Pro Perpetual',
        cadence: '一次性付款・永久',
        blurb: '一次性付款，永久保留完整质量 AI funscript 生成及所有未来 Pro 模型。长期最优选择。',
        perks: [
          '包含 Pro 全部功能',
          'Pro AI funscript 生成永不过期',
          '所有未来 Pro AI 模型一并包含',
          '永无订阅费',
        ],
        cta: '获取 Pro Perpetual',
      },
    ],
  },
  faq: {
    eyebrow: '实用须知',
    title: '常见问题解答',
    items: [
      {
        q: '什么是 funscript？',
        a: 'funscript 是一种记录随时间变化动作数据的小型文件。与视频同步播放时，它可逐位置驱动兼容设备。FunGen 使用 AI 从视频中生成 funscript，允许您在精确时间轴上进行编辑，并直接播放至您的硬件。',
      },
      {
        q: 'FunGen 中的 AI funscript 生成是如何工作的？',
        a: '将 2D 或 VR 视频指向 FunGen，专属 Pro AI 模型即可读取画面动作并自动生成完整的多轴 funscript。针对 2D/平面视频和 VR 各有一个专属模型。您可以生成单个片段或批量处理整个文件夹，之后还可手动精细调整。',
      },
      {
        q: 'FunGen 支持哪些平台？',
        a: 'Windows、macOS（Apple Silicon 原生）和 Linux。每个平台均为单一原生可执行文件，无需安装 Python 运行时或大量依赖库。AI 生成在本地 GPU 上运行（Windows 使用 DirectML，macOS 使用 CoreML，Linux 使用 CUDA）。',
      },
      {
        q: 'FunGen 是否免费？',
        a: 'FunGen 是先试后买。免费下载供个人使用，提供完整的编辑器、播放器、媒体库、批处理和 Doctor，另有每天数次的 AI 生成预览和受限的设备控制，让你先测试 AI 和自己的硬件。准备就绪后，通过 PayPal 一次性付款，或订阅 Patreon 的 FunGen 等级（订阅期间享有 Pro），即可解锁全品质 Pro AI 模型，没有限制，无需等待。你自己制作或编辑的 funscript 归你所有，可自由分享或出售。出售使用 Pro AI 生成的 funscript 需要商业许可；FunGen 本身不得转售或再分发。请联系 fungen_ai@proton.me。',
      },
      {
        q: '支持哪些设备？',
        a: '支持 The Handy（HTTPS 及 Bluetooth LE）、Autoblow Ultra、Vacuglide、OSR 系列（OSR2、SR6、SSR1，通过 T-Code 连接），以及任何可通过 Buttplug.io 或 Intiface 访问的设备。',
      },
      {
        q: 'Pro 年度计划具体涵盖哪些内容？',
        a: 'Pro 为一次性付款，解锁完整质量 AI funscript 生成及该年发布的所有全新 Pro AI 模型，有效期一年。这不仅是一年的应用更新权限，更是一年对 Pro AI 模型本身的使用权。年限到期后，Pro AI funscript 生成停止，免费功能（编辑器、播放器、视频库、批量处理、Doctor）永久保留。如需永久使用 Pro AI 模型，请选择 Pro Perpetual。',
      },
      {
        q: '如何付款和解锁？',
        a: '一次性付费层级（Pro、Pro Perpetual）均通过 PayPal 付款；付款后，通行证将发送至您的电子邮件，在应用中激活即可使用。您也可以订阅 Patreon 上的 FunGen 层级，在会员有效期内持续享有 FunGen Pro 权益。 也可以用 USDT（TRC-20）付款：见价格区的加密货币选项与图文教程。',
      },
      {
        q: '源代码是否公开？',
        a: '目前代码并非开源。你可以下载各平台的现成构建版本；源代码本身暂不公开。如有疑问或需要商业许可，请联系 fungen_ai@proton.me。',
      },
    ],
  },
  finalCta: {
    title: '准备好生成你的 funscript 了吗？',
    body: '立即下载 FunGen，几分钟内即可生成您的第一个 funscript。',
    cta: '下载 FunGen',
  },
  footer: {
    download: '下载',
    patreon: 'Patreon',
    discord: 'Discord',
    contact: '联系我们',
    fine: '© FunGen · 个人使用免费 · 问题与商业许可：fungen_ai@proton.me',
  },
} satisfies Strings;
