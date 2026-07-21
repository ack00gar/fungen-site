import type { Strings } from './en';

export const it = {
  langName: 'Italiano',
  seoTitle: 'FunGen · Generatore di funscript con IA, 2D e VR, offline',
  description:
    'Genera funscripts da video 2D e VR con IA - tutto sulla tua macchina, senza caricare nulla. Editor multi-asse accurato al fotogramma incluso. Gratis.',
  keywords: [
    'funscript',
    'funscripts',
    'generatore di funscript',
    'funscript IA',
    'generatore funscript IA',
    'generare funscript da video',
    'funscript gratis',
    'generatore funscript gratuito',
    'editor funscript',
    'creare funscript',
    'funscript automatico',
    'funscript VR',
    'generatore funscript VR',
    'funscript 2D',
    'funscript video flat',
    'funscript multi-asse',
    'funscript software',
    'AI funscript generator',
    'funscript maker',
    'funscript Handy',
    'funscript OSR2',
  ],
  nav: {
    ai: 'Modelli IA',
    features: 'Funzionalità',
    devices: 'Dispositivi',
    pricing: 'Prezzi',
    faq: 'FAQ',
    download: 'Download',
  },
  hero: {
    head: 'Trasforma i video in {funscripts}. Direttamente sul tuo computer.',
    sub: 'FunGen è un\'applicazione desktop per la generazione e la modifica di funscripts con IA. Genera funscripts da video 2D e VR con modelli Pro IA dedicati, perfezionali su una timeline multi-asse e riproducili sul tuo dispositivo. Un unico binario nativo, niente da installare.',
    ctaDownload: 'Scarica per Windows, macOS, Linux',
    ctaPricing: 'Vedi i prezzi',
    meta: 'Download gratuito, per uso personale',
    osCta: 'Scarica per {os}',
    osAlso: 'Disponibile anche per {platforms}',
    trust: ["Nessun account", 'Nessuna carta', 'IA locale'],
  },
  shot: {
    eyebrow: 'Vedi come funziona',
    title: 'L\'intero studio in una sola finestra',
    body: 'Player video, timeline precisa al fotogramma, tracce multi-asse e il Doctor, affiancati. Genera, modifica e riproduci senza cambiare strumento.',
    alt: 'L\'editor FunGen con il player video, una timeline funscript multi-asse e i pannelli laterali',
  },
  ai: {
    eyebrow: 'Modelli Pro IA dedicati',
    title: 'Due modelli IA, fatti per i funscript',
    body: "Un modello per video 2D / flat, uno per VR. Leggono il movimento a schermo e scrivono un funscript completo, sulla tua macchina, un'intera cartella alla volta.",
    models: [
      {
        title: 'Modello 2D / Flat',
        body: 'Un modello IA dedicato per video 2D / flat (non VR). Segue il movimento a schermo fotogramma per fotogramma e scrive un funscript fluido a tratto completo, pronto per la riproduzione o per la rifinitura. Genera un singolo clip o processa in batch un\'intera cartella durante la notte.',
      },
      {
        title: 'Modello VR',
        body: 'Un modello separato costruito per VR. FunGen rileva automaticamente i formati fisheye, equirettangolare, side-by-side e top/bottom, li corregge sulla GPU e traccia sia le scene POV che non-POV, così il funscript corrisponde esattamente a quello che vedi nel visore.',
      },
    ],
  },
  features: {
    eyebrow: 'Tutto in un\'unica app',
    title: 'Dal video grezzo a uno script finito',
    body: 'Genera con l\'IA, affina a mano, esegui i controlli di qualità e riproduci direttamente sul tuo dispositivo. Non avrai bisogno di un secondo strumento.',
    items: [
      {
        title: 'Generazione script con IA',
        body: "Punta FunGen su un video e genera automaticamente il funscript per te. Un generatore di funscript IA dedicato gestisce video VR e 2D / flat, con una modalità separata per le scene più complesse. Qualità piena, con possibilità di processare in batch un'intera cartella.",
      },
      {
        title: 'Editor preciso al fotogramma',
        body: 'Una timeline multi-asse precisa con capitoli e strumenti di trasformazione per intervallo, spostamento e scala. Annulla e ripristina sono illimitati e sopravvivono alla riapertura. Crea uno script a mano o affina quello generato dall\'IA.',
      },
      {
        title: 'VR senza compromessi',
        body: 'Legge autonomamente i formati fisheye, equirettangolare, side-by-side e top/bottom, li corregge sulla GPU e traccia in modalità POV e non-POV.',
      },
      {
        title: 'Controllo dispositivi in tempo reale',
        body: 'Riproduci uno script direttamente sul tuo hardware con interpolazione e compensazione della latenza per dispositivo. Gestisci più assi contemporaneamente, o esegui in modalità headless dalla riga di comando su un server di rendering.',
      },
      {
        title: 'Streaming e remoto',
        body: 'Uno streamer HTTP integrato con WebXR, più i bridge per HereSphere e DeoVR e l\'integrazione XBVR. I dispositivi vengono rilevati via mDNS, così puoi gestire una sessione dal visore o dallo smartphone.',
      },
      {
        title: 'Il Doctor',
        body: 'Controlli di qualità che individuano gap impercettibili, stroke mancanti, zone morte e jitter. La maggior parte include una correzione con un clic, e un punteggio per fotogramma ti dice come si sentirà davvero lo script.',
      },
    ],
  },
  devices: {
    eyebrow: 'Riproduce sui tuoi giocattoli',
    title: 'Riproduci i tuoi funscripts sui giocattoli che hai già',
    body: 'Riproduzione in tempo reale con interpolazione e compensazione della latenza per dispositivo, più il routing multi-asse quando ne hai bisogno.',
  },
  pricing: {
    eyebrow: 'Prova prima di acquistare',
    title: 'Provalo gratis. Sblocca il pieno potenziale.',
    body: "Prova l'IA e controlla i tuoi giocattoli gratuitamente. Quando sei pronto, sblocca i modelli Pro IA a piena qualità, senza limiti e senza attese. I funscript che crei o modifichi sono tuoi: condividili o vendili.\nPer una licenza commerciale, scrivi a fungen_ai@proton.me.",
    note: 'I piani a pagamento sono pagamenti unici su PayPal, con il pass consegnato via email.\nPuoi ottenere il Pro anche tramite il piano FunGen su Patreon, attivo per tutto il tempo in cui sei abbonato.',
    plans: [
      {
        name: 'Free',
        cadence: 'gratis · per sempre',
        blurb: 'L\'editor e la libreria completi, con anteprime IA e controllo dispositivo per provare. L\'IA completa è disponibile con un pagamento unico aggiuntivo.',
        perks: [
          'Editor multi-asse preciso al fotogramma',
          'Trasformazioni, capitoli, analisi Doctor',
          'Libreria, elaborazione batch, player',
          'Qualche anteprima IA gratuita al giorno (l\'IA completa è Pro)',
          'Controllo dispositivo e streamer (limitati)',
        ],
        cta: 'Scarica gratis',
      },
      {
        name: 'Pro',
        cadence: 'una tantum · 1 anno',
        blurb: "Un anno di generazione di funscript IA a piena qualità, inclusi tutti i modelli Pro rilasciati in quell'anno.",
        perks: [
          'Tutto di Free',
          'Generazione di funscript IA a piena qualità per 1 anno',
          'Ogni nuovo modello Pro IA rilasciato quell\'anno',
          'Dopo 1 anno: il Pro IA termina, le funzionalità gratuite restano',
        ],
        cta: 'Ottieni Pro',
        badge: 'Più popolare',
      },
      {
        name: 'Pro Perpetual',
        cadence: 'una tantum · per sempre',
        blurb: 'Paga una volta sola e mantieni la generazione di funscript IA a piena qualità, e ogni futuro modello Pro, per sempre. Il miglior rapporto qualità-prezzo a lungo termine.',
        perks: [
          'Tutto di Pro',
          'Generazione di funscript Pro IA senza scadenza',
          'Tutti i futuri modelli Pro IA inclusi',
          'Nessun abbonamento, mai',
        ],
        cta: 'Ottieni Pro Perpetual',
      },
    ],
  },
  faq: {
    eyebrow: 'Utile sapere',
    title: 'Domande frequenti',
    items: [
      {
        q: 'Cos\'è un funscript?',
        a: 'Un funscript è un piccolo file che registra il movimento nel tempo. Riprodotto insieme a un video, aziona un dispositivo compatibile in sincronia, posizione per posizione. FunGen genera funscripts dai video con l\'IA, ti permette di modificarli su una timeline precisa e di riprodurli direttamente sul tuo hardware.',
      },
      {
        q: 'Come funziona la generazione di funscripts con IA in FunGen?',
        a: 'Punta FunGen su un video 2D o VR e un modello Pro IA dedicato legge il movimento a schermo e scrive per te un funscript completo e multi-asse. C\'è un modello per video 2D / flat e uno separato per VR. Puoi generare un singolo clip o processare in batch un\'intera cartella, poi affinare il risultato a mano se vuoi.',
      },
      {
        q: 'Su quali piattaforme funziona FunGen?',
        a: 'Windows, macOS (nativo Apple Silicon) e Linux. È un unico binario nativo per piattaforma, quindi non c\'è nessun runtime Python o librerie aggiuntive da installare. La generazione IA avviene localmente sulla tua GPU (DirectML su Windows, CoreML su macOS, CUDA su Linux).',
      },
      {
        q: 'FunGen è gratuito?',
        a: "FunGen è provalo prima di acquistarlo. Il download gratuito, per uso personale, ti dà l'editor completo, il player, la libreria, il batch e il Doctor, più alcune anteprime di generazione IA al giorno e il controllo dispositivo limitato, così puoi testare l'IA e il tuo hardware prima. Quando sei pronto, un pagamento unico su PayPal, o il piano FunGen su Patreon (Pro per tutto il tempo in cui sei abbonato), sblocca i modelli Pro IA a piena qualità senza limiti e senza attese. I funscript che crei o modifichi sono tuoi: condividili o vendili. Vendere funscript creati con l'IA Pro richiede una licenza commerciale; FunGen stesso non può essere rivenduto né ridistribuito. Scrivi a fungen_ai@proton.me.",
      },
      {
        q: 'Quali dispositivi sono supportati?',
        a: 'The Handy (via HTTPS e Bluetooth LE), Autoblow Ultra, Vacuglide, la famiglia OSR (OSR2, SR6, SSR1) tramite T-Code, e qualsiasi dispositivo raggiungibile tramite Buttplug.io o Intiface.',
      },
      {
        q: 'Cosa copre esattamente l\'anno Pro?',
        a: "Pro è un pagamento unico che sblocca la generazione di funscript IA a piena qualità e ogni nuovo modello Pro IA rilasciato, per un anno. Non è solo un anno di aggiornamenti dell'app: è un anno di accesso ai modelli Pro IA stessi. Alla scadenza dell'anno, la generazione di funscript Pro IA si ferma e mantieni tutte le funzionalità gratuite (editor, player, libreria, batch, Doctor) per sempre. Per mantenere i modelli Pro IA senza limiti di tempo, scegli Pro Perpetual.",
      },
      {
        q: 'Come pago e sblocco? Puoi anche pagare in USDT (TRC-20): vedi la parte crypto della sezione prezzi.',
        a: "I piani una tantum (Pro, Pro Perpetual) sono pagamenti su PayPal; dopo aver pagato, il tuo pass arriva via email, pronto per essere attivato nell'app. Puoi anche abbonarti al piano FunGen su Patreon, che ti dà FunGen Pro per tutto il tempo in cui il tuo abbonamento è attivo.",
      },
      {
        q: 'Il codice sorgente è disponibile?',
        a: 'Il codice non è open source al momento. Puoi scaricare versioni già pronte per ogni piattaforma; il codice sorgente non è pubblicato al momento. Per domande o per una licenza commerciale, scrivi a fungen_ai@proton.me.',
      },
    ],
  },
  finalCta: {
    title: 'Pronto a generare il tuo funscript?',
    body: 'Scarica FunGen e genera il tuo primo funscript in pochi minuti.',
    cta: 'Scarica FunGen',
  },
  footer: {
    download: 'Download',
    patreon: 'Patreon',
    discord: 'Discord',
    contact: 'Contatti',
    fine: '© FunGen · Gratuito per uso personale · Domande e licenze commerciali: fungen_ai@proton.me',
  },
} satisfies Strings;
