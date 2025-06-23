
# OpenTaskAI

**OpenTaskAI** è un'applicazione desktop innovativa per la gestione dei task in team con funzionalità avanzate di collaborazione locale (LAN), suggerimenti intelligenti tramite AI (OpenAI), e packaging desktop (.exe) grazie a Electron.

---

## ✨ Caratteristiche Principali

- ✅ **Kanban Board** intuitiva per la gestione visiva dei task
- 🤖 **AI Assistant** integrato per suggerimenti contestuali, riassunti e correlazioni
- 🌐 **Collaborazione in LAN** tramite WebSocket, senza server esterni
- 📦 **App desktop .exe** generabile con Electron
- 🧠 **Modalità offline** e storage locale persistente (senza Firebase)
- 🌓 **Dark Mode** automatica con interfaccia responsive
- 🛠 **100% Open Source** e personalizzabile
- 🏷️ Branding: *Made by Tobias Tesauri – T&M Softwares*

---

## 🚀 Come Avviare l'App (dev mode)

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Avvia server backend + client React

```bash
npm run dev
```

### 3. (Opzionale) Avvia Electron per la versione desktop

```bash
npm run electron
```

> Assicurati che il backend Node.js sia attivo sulla porta 3001.

---

## 🛠 Build .exe per Windows

### Prerequisiti

- Node.js >= 18
- `electron-builder` installato globalmente:
  ```bash
  npm install -g electron-builder
  ```

### Build

```bash
electron-builder --config electron-builder.json
```

Il file `.exe` sarà generato nella cartella `dist/`.

---

## 📁 Struttura del Progetto

```
OpenTaskAI/
├── app/
│   ├── client/          # React frontend (Kanban, Assistant, Footer)
│   └── server/          # Node.js + WebSocket server per LAN
├── electron/            # Main process Electron
├── build-assets/        # Icone e risorse per la build desktop
├── electron-builder.json
└── package.json
```

---

## 🧠 AI Integration

Il modulo Assistant può essere esteso per usare `fetch('/api/openai')` con il proprio `OPENAI_API_KEY`. Al momento, il placeholder è pronto per l'integrazione.

---

## 📣 Autore

**Tobias Tesauri**  
T&M Softwares – Software semplice, potente e bello.  
GitHub: [@TobiasTesauri](https://github.com/TobiasTesauri)

---

## 📄 Licenza

MIT – Open source, libero utilizzo con attribuzione.
