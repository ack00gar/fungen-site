import type { Strings } from './en';

export const de = {
  langName: 'Deutsch',
  seoTitle: 'FunGen · KI-Funscript-Generator für 2D und VR',
  description:
    'Erstelle funscripts aus 2D- und VR-Video mit KI, oder bearbeite sie von Hand auf einer Multi-Achsen-Timeline. Spielt auf deinem Gerät ab und läuft offline auf deinem eigenen Rechner. Kostenloser Download.',
  keywords: [
    'funscript erstellen',
    'funscript generator',
    'KI funscript',
    'funscript kostenlos',
    'VR funscript',
    '2D funscript',
    'funscript aus Video erstellen',
    'funscript editor',
    'automatisches funscript',
    'funscript software',
    'funscript maker',
    'VR funscript generator',
    'KI funscript generator',
    'multi-axis funscript',
    'Handy funscript',
    'OSR2 SR6 funscript',
    'funscript',
    'funscripts',
    'AI funscript generator',
    'free funscript generator',
    'funscript tool',
    'funscript KI generieren',
  ],
  nav: {
    ai: 'KI-Modelle',
    features: 'Funktionen',
    devices: 'Geräte',
    pricing: 'Preise',
    faq: 'FAQ',
    download: 'Download',
  },
  hero: {
    head: 'Verwandle Videos in {funscripts}. Direkt auf deinem Computer.',
    sub: 'FunGen ist eine Desktop-App zur KI-gestützten Erstellung und Bearbeitung von funscripts. Generiere funscripts aus 2D- und VR-Videos mit dedizierten Pro-KI-Modellen, verfeinere sie auf einer Mehrkanal-Timeline und spiele sie direkt auf dein Gerät ab. Eine native Binärdatei, nichts zu installieren.',
    ctaDownload: 'Download für Windows, macOS, Linux',
    ctaPricing: 'Preise ansehen',
    meta: 'Kostenloser Download, für die private Nutzung',
    osCta: 'Download für {os}',
    osAlso: 'Auch für {platforms}',
    trust: ['Kein Konto erforderlich', 'Keine Kreditkarte', 'Lokale KI'],
  },
  shot: {
    eyebrow: 'In Aktion erleben',
    title: 'Das komplette Studio in einem Fenster',
    body: 'Videoplayer, framegenauer Timeline, Mehrkanal-Spuren und der Doctor, alles nebeneinander. Generieren, bearbeiten und abspielen, ohne zwischen Tools wechseln zu müssen.',
    alt: 'Der FunGen-Editor mit Videoplayer, einer Mehrkanal-funscript-Timeline und Seitenleisten',
  },
  ai: {
    eyebrow: 'Dedizierte Pro-KI-Modelle',
    title: 'Zwei KI-Modelle, gemacht für funscripts',
    body: 'Ein Modell für 2D- / Flat-Videos, eines für VR. Sie lesen die Bewegung auf dem Bildschirm und schreiben ein vollständiges funscript, auf deinem eigenen Rechner, einen ganzen Ordner auf einmal.',
    models: [
      {
        title: '2D- / Flat-Modell',
        body: 'Ein dediziertes KI-Modell für 2D- / Flat-Videos (kein VR). Es verfolgt die Bewegungen auf dem Bildschirm Frame für Frame und erstellt ein flüssiges, volles funscript, das sofort abspielbar oder feinabstimmbar ist. Verarbeite einzelne Clips oder ganze Ordner im Stapel über Nacht.',
      },
      {
        title: 'VR-Modell',
        body: 'Ein separates Modell, das speziell für VR entwickelt wurde. FunGen erkennt Fisheye-, Equirectangular-, Side-by-Side- und Top/Bottom-Aufnahmen, entzerrt sie auf der GPU und verfolgt sowohl POV- als auch Non-POV-Szenen, sodass das funscript genau zu dem passt, was du im Headset siehst.',
      },
    ],
  },
  features: {
    eyebrow: 'Alles in einer App',
    title: 'Vom Rohmaterial zum fertigen Script',
    body: 'Mit KI generieren, von Hand verfeinern, Qualitätsprüfungen durchführen und direkt auf dein Gerät abspielen. Du brauchst kein zweites Tool.',
    items: [
      {
        title: 'KI-Script-Generierung',
        body: 'Weise FunGen auf ein Video und es generiert das funscript für dich. Ein dedizierter KI-Funscript-Generator verarbeitet VR- und 2D- / Flat-Videos, mit einem separaten Modus für anspruchsvollere Szenen. Volle Qualität, und es kann einen ganzen Ordner im Stapel verarbeiten.',
      },
      {
        title: 'Framegenauer Editor',
        body: 'Eine präzise Mehrkanal-Timeline mit Kapiteln und Transformationswerkzeugen für Bereiche, Verschiebung und Skalierung. Rückgängig machen und Wiederholen sind unbegrenzt und bleiben nach dem Neuöffnen erhalten. Erstelle ein Script von Hand oder bereinige, was die KI erzeugt hat.',
      },
      {
        title: 'VR, richtig gemacht',
        body: 'Es erkennt Fisheye-, Equirectangular-, Side-by-Side- und Top/Bottom-Layouts selbständig, entzerrt sie auf der GPU und verfolgt in POV- und Non-POV-Modus.',
      },
      {
        title: 'Live-Gerätesteuerung',
        body: 'Spiele ein Script direkt auf deine Hardware ab, mit gerätespezifischer Interpolation und Latenzausgleich. Steuere mehrere Achsen gleichzeitig oder führe es headless über die Kommandozeile auf einem Render-Rechner aus.',
      },
      {
        title: 'Streaming und Fernzugriff',
        body: 'Ein integrierter HTTP-Streamer mit WebXR, sowie HereSphere- und DeoVR-Bridges und XBVR-Integration. Geräte werden über mDNS erkannt, sodass du eine Session vom Headset oder Smartphone aus steuern kannst.',
      },
      {
        title: 'Der Doctor',
        body: 'Qualitätsprüfungen, die unmerkliche Lücken, fehlende Strokes, Dead Zones und Jitter erkennen. Die meisten lassen sich per Klick beheben, und ein per-Frame-Score zeigt dir, wie sich das Script tatsächlich anfühlen wird.',
      },
    ],
  },
  devices: {
    eyebrow: 'Spielt auf deinen Toys ab',
    title: 'Spiele deine funscripts auf den Toys ab, die du bereits hast',
    body: 'Live-Wiedergabe mit gerätespezifischer Interpolation und Latenzausgleich, plus Mehrkanal-Routing, wenn du es brauchst.',
  },
  pricing: {
    eyebrow: 'Zuerst ausprobieren',
    title: 'Kostenlos testen. Volles Potenzial freischalten.',
    body: 'Teste die KI und steuere deine Toys kostenlos. Wenn du so weit bist, schalte die Pro-KI-Modelle in voller Qualität frei – ohne Limits und ohne Wartezeiten. Funscripts, die du selbst erstellst oder bearbeitest, gehören dir: Du darfst sie teilen und verkaufen.\nFür eine kommerzielle Lizenz wende dich an fungen_ai@proton.me.',
    note: 'Die bezahlten Stufen sind Einmalzahlungen per PayPal, der Pass wird per E-Mail zugestellt.\nPro ist auch über die FunGen-Stufe auf Patreon erhältlich, aktiv solange du abonniert bleibst.',
    plans: [
      {
        name: 'Free',
        cadence: 'kostenlos · für immer',
        blurb: 'Der vollständige Editor und die Bibliothek, mit KI-Vorschauen und Gerätesteuerung zum Ausprobieren. Die volle KI ist gegen eine zusätzliche Einmalzahlung erhältlich.',
        perks: [
          'Framegenauer Mehrkanal-Editor',
          'Transformationen, Kapitel, Doctor-Analyse',
          'Bibliothek, Stapelverarbeitung, Player',
          'Einige kostenlose KI-Vorschauen pro Tag (volle KI ist Pro)',
          'Gerätesteuerung und Streamer (begrenzt)',
        ],
        cta: 'Kostenlos herunterladen',
      },
      {
        name: 'Pro',
        cadence: 'einmalig · 1 Jahr',
        blurb: 'Ein Jahr KI-Funscript-Generierung in voller Qualität, einschließlich aller in diesem Jahr veröffentlichten Pro-Modelle.',
        perks: [
          'Alles aus Free',
          'KI-Funscript-Generierung in voller Qualität für 1 Jahr',
          'Jedes neue Pro-KI-Modell, das in diesem Jahr erscheint',
          'Nach 1 Jahr: Pro-KI endet, kostenlose Funktionen bleiben',
        ],
        cta: 'Pro holen',
        badge: 'Beliebteste Wahl',
      },
      {
        name: 'Pro Perpetual',
        cadence: 'einmalig · für immer',
        blurb: 'Einmal zahlen und KI-Funscript-Generierung in voller Qualität sowie alle künftigen Pro-Modelle dauerhaft behalten. Bestes Langzeit-Preis-Leistungs-Verhältnis.',
        perks: [
          'Alles aus Pro',
          'Pro-KI-Funscript-Generierung läuft nie ab',
          'Alle zukünftigen Pro-KI-Modelle inklusive',
          'Kein Abonnement, niemals',
        ],
        cta: 'Pro Perpetual holen',
      },
    ],
  },
  faq: {
    eyebrow: 'Gut zu wissen',
    title: 'Häufig gestellte Fragen',
    items: [
      {
        q: 'Was ist ein funscript?',
        a: 'Ein funscript ist eine kleine Datei, die Bewegungsabläufe über die Zeit aufzeichnet. Wird sie zusammen mit einem Video abgespielt, steuert sie ein kompatibles Gerät synchron, Position für Position. FunGen generiert funscripts aus Videos mit KI, ermöglicht die Bearbeitung auf einer präzisen Timeline und spielt sie direkt auf deine Hardware ab.',
      },
      {
        q: 'Wie funktioniert die KI-Funscript-Generierung in FunGen?',
        a: 'Weise FunGen auf ein 2D- oder VR-Video und ein dediziertes Pro-KI-Modell liest die Bildschirmbewegung aus und schreibt ein vollständiges, mehrachsiges funscript für dich. Es gibt ein Modell für 2D- / Flat-Videos und ein separates für VR. Du kannst einen einzelnen Clip oder einen ganzen Ordner im Stapel verarbeiten und das Ergebnis anschließend bei Bedarf manuell verfeinern.',
      },
      {
        q: 'Auf welchen Plattformen läuft FunGen?',
        a: 'Windows, macOS (nativ für Apple Silicon) und Linux. Es ist eine einzelne native Binärdatei pro Plattform, sodass keine Python-Laufzeit oder zahlreiche Bibliotheken installiert werden müssen. Die KI-Generierung läuft lokal auf deiner GPU (DirectML unter Windows, CoreML unter macOS, CUDA unter Linux).',
      },
      {
        q: 'Ist FunGen kostenlos?',
        a: 'FunGen ist erst testen, dann kaufen. Der kostenlose Download für die private Nutzung gibt dir den vollen Editor, Player, die Bibliothek, die Stapelverarbeitung und den Doctor, dazu ein paar KI-Generierungen pro Tag als Vorschau und limitierte Gerätesteuerung – so kannst du die KI und deine Hardware zuerst ausprobieren. Wenn du so weit bist, schaltet eine einmalige PayPal-Zahlung oder die FunGen-Stufe auf Patreon (Pro, solange dein Abo läuft) die Pro-KI-Modelle in voller Qualität frei, ohne Limits und ohne Wartezeiten. Funscripts, die du selbst erstellst oder bearbeitest, gehören dir: Du darfst sie teilen und verkaufen. Der Verkauf von mit der Pro-KI erstellten Funscripts erfordert eine kommerzielle Lizenz; FunGen selbst darf nicht weiterverkauft oder weitergegeben werden. Wende dich an fungen_ai@proton.me.',
      },
      {
        q: 'Welche Geräte werden unterstützt?',
        a: 'The Handy (über HTTPS und Bluetooth LE), Autoblow Ultra, Vacuglide, die OSR-Familie (OSR2, SR6, SSR1) über T-Code sowie alles, was du über Buttplug.io oder Intiface erreichen kannst.',
      },
      {
        q: 'Was deckt das Pro-Jahr genau ab?',
        a: 'Pro ist eine Einmalzahlung, die KI-Funscript-Generierung in voller Qualität und jedes neue Pro-KI-Modell, das veröffentlicht wird, für ein Jahr freischaltet. Es geht nicht nur um ein Jahr App-Updates: Es ist ein Jahr Zugang zu den Pro-KI-Modellen selbst. Wenn das Jahr endet, stoppt die Pro-KI-Funscript-Generierung und du behältst alle kostenlosen Funktionen (Editor, Player, Bibliothek, Stapelverarbeitung, Doctor) dauerhaft. Um die Pro-KI-Modelle ohne Zeitlimit zu behalten, wähle Pro Perpetual.',
      },
      {
        q: 'Wie bezahle ich und schalte frei?',
        a: 'Die einmaligen Stufen (Pro, Pro Perpetual) sind PayPal-Zahlungen. Nach der Zahlung kommt dein Pass per E-Mail, fertig zur Aktivierung in der App. Du kannst auch die FunGen-Stufe auf Patreon abonnieren, die dir FunGen Pro gibt, solange deine Mitgliedschaft aktiv bleibt. Alternativ kannst du mit USDT (TRC-20) bezahlen - siehe die Krypto-Option im Preisbereich.',
      },
      {
        q: 'Ist der Quellcode verfügbar?',
        a: 'Der Code ist derzeit nicht quelloffen. Du kannst fertige Builds für jede Plattform herunterladen; der Quellcode selbst wird zurzeit nicht veröffentlicht. Bei Fragen oder für eine kommerzielle Lizenz wende dich an fungen_ai@proton.me.',
      },
    ],
  },
  finalCta: {
    title: 'Bereit, dein funscript zu generieren?',
    body: 'Lade FunGen herunter und erstelle in wenigen Minuten dein erstes funscript.',
    cta: 'FunGen herunterladen',
  },
  footer: {
    download: 'Download',
    patreon: 'Patreon',
    discord: 'Discord',
    contact: 'Kontakt',
    fine: '© FunGen · Kostenlos für die private Nutzung · Fragen und kommerzielle Lizenzen: fungen_ai@proton.me',
  },
} satisfies Strings;
