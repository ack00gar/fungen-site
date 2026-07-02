import type { Strings } from './en';

export const pt = {
  langName: 'Português',
  seoTitle: 'FunGen · Gerador de Funscript com IA para 2D e VR',
  description:
    'Crie funscripts a partir de vídeo 2D e VR com IA, ou edite-os à mão numa linha do tempo multi-eixo. Reproduz no seu dispositivo e funciona offline na sua própria máquina. Download gratuito.',
  keywords: [
    'funscript',
    'funscripts',
    'gerador de funscript',
    'funscript IA',
    'gerador de funscript com IA',
    'gerar funscript de vídeo',
    'geração de funscript',
    'funscript grátis',
    'funscript gratuito',
    'editor de funscript',
    'funscript automático',
    'funscript VR',
    'funscript 2D',
    'funscript multi-eixo',
    'criar funscript',
    'gerador funscript IA',
    'funscript generator',
    'AI funscript',
    'VR funscript',
    'funscript software',
  ],
  nav: {
    ai: 'Modelos IA',
    features: 'Funcionalidades',
    devices: 'Dispositivos',
    pricing: 'Preços',
    faq: 'FAQ',
    download: 'Download',
  },
  hero: {
    head: 'Converta vídeo em {funscripts}. Direto no seu computador.',
    tagline: 'Aproveite o seu tempo.',
    sub: 'FunGen é uma aplicação de ambiente de trabalho para geração e edição de funscripts com IA. Gere funscripts a partir de vídeo 2D e VR com modelos Pro dedicados, refine-os numa linha de tempo multi-eixo e envie para o seu dispositivo. Um único binário nativo, sem instalações adicionais.',
    ctaDownload: 'Download para Windows, macOS, Linux',
    ctaPricing: 'Ver preços',
    meta: 'Download gratuito, para uso individual e não comercial',
    osCta: 'Download para {os}',
    osAlso: 'Também para {platforms}',
    trust: ['Sem conta', 'Sem cartão', 'Funciona offline'],
  },
  shot: {
    eyebrow: 'Veja em ação',
    title: 'Todo o estúdio numa só janela',
    body: 'Leitor de vídeo, linha de tempo precisa ao frame, faixas multi-eixo e o Doctor, lado a lado. Gere, edite e reproduza sem mudar de ferramenta.',
    alt: 'O editor FunGen com o leitor de vídeo, uma linha de tempo de funscript multi-eixo e painéis laterais',
  },
  ai: {
    eyebrow: 'Modelos Pro IA dedicados',
    title: 'Dois modelos IA, criados para funscripts',
    body: 'Um modelo para vídeo 2D / plano, outro para VR. Leem o movimento em ecrã e escrevem um funscript completo, na sua própria máquina, uma pasta inteira de cada vez.',
    models: [
      {
        title: 'Modelo 2D / Plano',
        body: 'Um modelo IA dedicado para vídeo 2D / plano (não VR). Segue o movimento em ecrã frame a frame e cria um funscript suave e completo, pronto para reprodução ou ajuste fino. Gere um único clipe ou processe uma pasta inteira durante a noite.',
      },
      {
        title: 'Modelo VR',
        body: 'Um modelo separado criado para VR. O FunGen deteta footage fisheye, equiretangular, side-by-side e top/bottom, desdobra-a na GPU e rastreia cenas POV e não-POV, para que o funscript corresponda ao que vê no headset.',
      },
    ],
  },
  features: {
    eyebrow: 'Tudo numa só aplicação',
    title: 'Do vídeo bruto ao script final',
    body: 'Gere com IA, refine à mão, corra os controlos de qualidade e reproduza direto para o seu dispositivo. Não vai precisar de mais nenhuma ferramenta.',
    items: [
      {
        title: 'Geração de scripts com IA',
        body: 'Aponte o FunGen para um vídeo e ele gera o funscript por si. Um gerador IA de funscripts dedicado trata de vídeo VR e 2D / plano, com um modo separado para cenas mais complexas. Qualidade total, com processamento em lote para uma pasta inteira.',
      },
      {
        title: 'Editor preciso ao frame',
        body: 'Uma linha de tempo multi-eixo precisa com capítulos e ferramentas de transformação para intervalo, deslocamento e escala. Desfazer e refazer são ilimitados e sobrevivem a uma reabertura. Crie um script à mão ou aperfeiçoe o que a IA produziu.',
      },
      {
        title: 'VR feito bem',
        body: 'Lê layouts fisheye, equiretangular, side-by-side e top/bottom autonomamente, desdobra-os na GPU e rastreia nos modos POV e não-POV.',
      },
      {
        title: 'Controlo de dispositivo em direto',
        body: 'Reproduza um script diretamente para o seu hardware com interpolação por dispositivo e compensação de latência. Encaminhe vários eixos em simultâneo, ou corra sem interface gráfica a partir da linha de comandos.',
      },
      {
        title: 'Streaming e controlo remoto',
        body: 'Um servidor HTTP integrado com WebXR, mais pontes para HereSphere e DeoVR e integração com XBVR. Os dispositivos aparecem via mDNS, permitindo controlar uma sessão a partir de um headset ou telemóvel.',
      },
      {
        title: 'O Doctor',
        body: 'Controlos de qualidade que detetam lacunas impercetíveis, movimentos em falta, zonas mortas e instabilidade. A maioria tem correção a um clique, e uma pontuação por frame indica como o script vai realmente sentir-se.',
      },
    ],
  },
  devices: {
    eyebrow: 'Reproduz para os seus brinquedos',
    title: 'Reproduza os seus funscripts nos brinquedos que já tem',
    body: 'Reprodução em direto com interpolação por dispositivo e compensação de latência, com encaminhamento multi-eixo quando necessário.',
  },
  pricing: {
    eyebrow: 'Experimente antes de comprar',
    title: 'Experimente gratuitamente. Desbloqueie todo o potencial.',
    body: 'Pré-visualize a IA e controle os seus brinquedos gratuitamente, para uso individual e não comercial. Quando estiver pronto, desbloqueie os modelos Pro IA de qualidade total, sem limites nem esperas. Apenas para uso individual.\nUso comercial requer uma licença separada: email fungen_ai@proton.me.',
    note: 'Os planos pagos são pagamentos únicos no PayPal, com o passe entregue por email.\nTambém pode obter Pro através do nível FunGen no Patreon, ativo enquanto a sua subscrição estiver ativa.',
    plans: [
      {
        name: 'Free',
        cadence: 'grátis · para sempre',
        blurb: 'O editor e biblioteca completos, com pré-visualizações IA e controlo de dispositivo para testar. A IA completa está disponível por um pagamento único adicional.',
        perks: [
          'Editor multi-eixo preciso ao frame',
          'Transformações, capítulos, análise Doctor',
          'Biblioteca, processamento em lote, leitor',
          'Algumas pré-visualizações IA gratuitas por dia (IA completa é Pro)',
          'Controlo de dispositivo e streaming (com limite)',
        ],
        cta: 'Download gratuito',
      },
      {
        name: 'Enthusiast',
        cadence: 'pagamento único · para sempre',
        blurb: 'Controlo de dispositivo e streaming sem limites, para sempre.',
        perks: [
          'Tudo do Free',
          'Controlo de dispositivo sem limite de tempo',
          'Streaming sem contagem decrescente',
          'Perpétuo, sem prazo',
        ],
        cta: 'Obter Enthusiast',
      },
      {
        name: 'Pro',
        cadence: 'pagamento único · 1 ano',
        blurb: 'Um ano de geração IA de funscripts de qualidade total, incluindo todos os modelos Pro lançados nesse ano.',
        perks: [
          'Tudo do Enthusiast',
          'Geração IA de funscripts de qualidade total por 1 ano',
          'Todos os novos modelos Pro IA lançados nesse ano',
          'Após 1 ano: IA Pro termina, funcionalidades gratuitas permanecem',
        ],
        cta: 'Obter Pro',
        badge: 'Mais popular',
      },
      {
        name: 'Pro Perpetual',
        cadence: 'pagamento único · para sempre',
        blurb: 'Pague uma vez e mantenha a geração IA de funscripts de qualidade total, e todos os futuros modelos Pro, para sempre. Melhor valor a longo prazo.',
        perks: [
          'Tudo do Pro',
          'Geração Pro IA de funscripts sem prazo',
          'Todos os futuros modelos Pro IA incluídos',
          'Sem subscrição, nunca',
        ],
        cta: 'Obter Pro Perpetual',
        badge: 'Melhor valor',
      },
    ],
  },
  faq: {
    eyebrow: 'Bom saber',
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'O que é um funscript?',
        a: 'Um funscript é um ficheiro pequeno que regista movimento ao longo do tempo. Reproduzido junto com um vídeo, conduz um dispositivo compatível em sincronia, posição a posição. O FunGen gera funscripts a partir de vídeo com IA, permite editá-los numa linha de tempo precisa e reproduzi-los diretamente para o seu hardware.',
      },
      {
        q: 'Como funciona a geração de funscripts com IA no FunGen?',
        a: 'Aponte o FunGen para um vídeo 2D ou VR e um modelo Pro IA dedicado lê o movimento em ecrã e escreve um funscript completo e multi-eixo por si. Existe um modelo para vídeo 2D / plano e outro separado para VR. Pode gerar um único clipe ou processar uma pasta inteira em lote e depois refinar o resultado à mão, se preferir.',
      },
      {
        q: 'Em que plataformas funciona o FunGen?',
        a: 'Windows, macOS (nativo para Apple Silicon) e Linux. É um único binário nativo por plataforma, sem runtime Python nem bibliotecas para instalar. A geração IA corre localmente na sua GPU (DirectML no Windows, CoreML no macOS, CUDA no Linux).',
      },
      {
        q: 'O FunGen é gratuito?',
        a: 'O FunGen é do tipo experimente antes de comprar. O download gratuito, para uso individual e não comercial, inclui o editor completo, leitor, biblioteca, processamento em lote e Doctor, além de algumas pré-visualizações de geração IA por dia e controlo de dispositivo com limite, para que possa testar a IA e o seu hardware primeiro. Quando estiver pronto, um pagamento único no PayPal, ou o nível FunGen no Patreon (Pro enquanto a sua subscrição estiver ativa), desbloqueia os modelos Pro IA de qualidade total sem limites nem esperas. Apenas para uso individual. Para uso comercial, contacte fungen_ai@proton.me para uma licença específica.',
      },
      {
        q: 'Quais os dispositivos suportados?',
        a: 'O Handy (via HTTPS e Bluetooth LE), Autoblow Ultra, Vacuglide, a família OSR (OSR2, SR6, SSR1) via T-Code, e qualquer dispositivo acessível através do Buttplug.io ou Intiface.',
      },
      {
        q: 'O que cobre o ano Pro?',
        a: 'O Pro é um pagamento único que desbloqueia a geração IA de funscripts de qualidade total, e todos os novos modelos Pro IA lançados, durante um ano. Não são apenas atualizações da aplicação por um ano: é um ano de acesso aos próprios modelos Pro IA. Quando o ano termina, a geração Pro IA de funscripts deixa de funcionar e mantém todas as funcionalidades gratuitas (editor, leitor, biblioteca, processamento em lote, Doctor) para sempre. Para manter os modelos Pro IA sem limite de tempo, escolha Pro Perpetual.',
      },
      {
        q: 'Como faço o pagamento e o desbloqueio?',
        a: 'Os planos pagos únicos (Enthusiast, Pro, Pro Perpetual) são pagamentos no PayPal; após pagar, o seu passe chega por email, pronto a ativar na aplicação. Também pode subscrever o nível FunGen no Patreon, que lhe dá FunGen Pro enquanto a sua subscrição estiver ativa. Você também pode pagar com USDT (TRC-20) - veja a opção cripto na seção de preços.',
      },
      {
        q: 'O código-fonte está disponível?',
        a: 'O código não é de código aberto neste momento. Pode descarregar versões prontas a usar para todas as plataformas; o código em si não é publicado de momento. Para questões ou uso comercial, email fungen_ai@proton.me.',
      },
    ],
  },
  finalCta: {
    title: 'Pronto para gerar o seu funscript?',
    body: 'Descarregue o FunGen e tenha o seu primeiro funscript a gerar em poucos minutos.',
    cta: 'Download FunGen',
  },
  footer: {
    tagline: 'Aproveite o seu tempo.',
    download: 'Download',
    patreon: 'Patreon',
    discord: 'Discord',
    contact: 'Contacto',
    fine: '© FunGen · Gratuito para uso individual e não comercial · Questões e negócios: fungen_ai@proton.me',
  },
} satisfies Strings;
