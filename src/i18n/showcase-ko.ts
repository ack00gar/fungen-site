import type { ShowcaseStrings } from './showcase';

export const ko: ShowcaseStrings = {
  editor: {
    eyebrow: '앱 소개',
    title: '하나의 창에 모든 것을',
    body: '영상, 다중 축 타임라인, 히트맵 개요, 실시간 통계, AI 트래킹, 그리고 Doctor가 모두 한 화면에 도킹되어 있습니다. 창을 벗어나지 않고 생성, 편집, 검토, 재생을 모두 할 수 있습니다.',
    alt: '영상 영역, 다중 축 타임라인, 사이드 패널이 있는 FunGen 에디터',
  },
  gen: {
    eyebrow: 'FunGenerate',
    title: 'funscript가 만들어지는 것을 지켜보세요',
    body: 'FunGen이 영상을 분석하여 모션을 자동으로 생성합니다. 무료로 체험해보세요: 어떤 장면이든 20초 FunGenerate 미리보기를 실행하여 결과물의 품질을 먼저 확인할 수 있습니다.',
    chips: ['무료 20초 미리보기', '2D 및 VR', '전체 영상 또는 선택 구간'],
    alt: '타임라인을 채워가며 생성되는 funscript',
  },
  doctor: {
    eyebrow: 'Funscript Doctor',
    title: '펀스크립트를 관리하세요',
    body: '기기를 고려한 0~100점의 품질 점수를 제공합니다. Doctor는 속도 위반, 프레임 이탈 포인트, 데드존, 누락된 스트로크를 감지하고, 사용 중인 기기에서 스크립트를 배포할 수 있는지 알려주며, 대부분의 문제를 클릭 한 번으로 수정합니다.',
    chips: ['0~100점 점수', '기기 맞춤 분석', '원클릭 수정'],
    alt: '품질 점수와 문제 목록이 표시된 Funscript Doctor 다이얼로그',
    insetAlt: 'Funscript Doctor 요약 카드',
  },
  transforms: {
    eyebrow: '트랜스폼 및 플러그인',
    title: 'funscript 도구 상자',
    body: '진폭, 스무딩, 속도 제한, 타이밍을 위한 수십 가지 플러그인과 원클릭 빠른 수정 기능을 제공합니다. 자주 쓰는 기능을 파이프라인으로 연결하여 전체 정리 작업을 한 번에 실행하세요.',
    chips: ['Autotune', 'Reshape', 'Pipelines'],
    alt: 'Autotune, Reshape, Limit 카테고리로 구분된 플러그인 라이브러리',
    insetAlt: '타임라인을 재형성하는 트랜스폼 팝업',
  },
  chapters: {
    eyebrow: '챕터 및 북마크',
    title: '긴 스크립트를 체계적으로 구성',
    body: '장면을 이름과 색상으로 구분된 챕터로 나누고, 키 하나로 북마크를 추가하세요. 마지막 편집 위치와 마지막 재생 위치 마커 덕분에 작업을 중단한 곳에서 바로 이어서 작업할 수 있습니다.',
    chips: ['색상 구분', '원키 북마크', '열 때 이어서'],
    alt: '챕터 및 북마크 패널',
  },
  streamer: {
    eyebrow: 'Streamer',
    title: '모든 기기로 스트리밍',
    body: 'FunGen이 장난감을 동기화된 상태로 제어하는 동안, 영상과 funscript를 네트워크의 모든 기기로 전송하세요. Streamer는 앱에 내장되어 있어 별도 설치가 필요 없습니다.',
    chips: ['모든 기기', '장난감 구동', '별도 앱 불필요'],
    alt: 'Streamer 패널',
  },
  palette: {
    eyebrow: '커맨드 팔레트',
    title: '모든 기능을 키 하나로',
    body: '키를 누르고 이름으로 원하는 것을 바로 실행하세요.',
    chips: ['액션', 'Plugins', '테마'],
    alt: '액션을 검색 중인 커맨드 팔레트',
  },
  shortcuts: {
    eyebrow: '단축키',
    title: '내 손에 맞게 키를 설정',
    body: '마우스와 키보드의 모든 단축키를 재설정할 수 있습니다. FunGen이 사용자의 물리적 레이아웃을 인식하므로 AZERTY나 QWERTZ에서도 올바른 위치에 바인딩됩니다.',
    chips: ['완전한 재설정 가능', '마우스 및 키보드', '레이아웃 인식'],
    alt: '재설정 가능한 키가 있는 단축키 에디터',
  },
  devicesAlt: '지원되는 장난감 목록이 표시된 FunGen 기기 다이얼로그',
  community: '{n}+명과 함께 Discord에서 만나세요',
  tryCallout: {
    title: '구매 전에 먼저 체험하세요',
    body: '원하는 영상의 어느 구간이든 FunGenerate를 실행하고, 내 기기를 직접 구동하고, Doctor도 모두 무료 다운로드로 사용해보세요. 만족하신 후에만 결제하면 됩니다.',
  },
};
