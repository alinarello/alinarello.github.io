# Andrea Linarello - Nuovo Sito Accademico

Benvenuto nel tuo nuovo sito accademico ridisegnato! Questa cartella contiene tutti i file del sito, ottimizzati per le prestazioni, la SEO accademica e la leggibilità.

## Struttura dei File
- [index.html](index.html): La struttura della pagina con tutte le tue pubblicazioni, working paper e info di contatto.
- [styles.css](styles.css): Lo stile grafico completo (layout a due colonne, glassmorphism, badge colorati e gestione automatica del tema chiaro/scuro).
- [script.js](script.js): La logica interattiva per la ricerca immediata degli articoli, i filtri di categoria e il cambio del tema.

---

## 1. Come vedere il sito localmente (sul tuo computer)
Per testare il sito prima di pubblicarlo:
1. Apri la cartella `/Users/alinarello/.gemini/antigravity/scratch/andrealinarello-site` nel Finder di macOS.
2. Fai doppio clic sul file `index.html`.
3. Il sito si aprirà istantaneamente nel tuo browser web preferito (Safari, Chrome, ecc.). Potrai provare la barra di ricerca, i filtri e il cambio tema.

---

## 2. Come caricare il sito su GitHub Pages (Gratis)
Segui questi passaggi per pubblicare il sito online:

### Passo A: Crea la Repository su GitHub
1. Vai su [github.com](https://github.com/) e accedi con il tuo account.
2. Clicca su **New** (Nuovo repository).
3. Inserisci come **Repository name** esattamente: `tuo-username.github.io` (sostituisci `tuo-username` con il tuo reale nome utente di GitHub).
4. Assicurati che il repository sia impostato su **Public**.
5. **Non** spuntare la casella "Add a README file" o altre inizializzazioni (lascialo completamente vuoto).
6. Clicca su **Create repository**.

### Passo B: Carica i file tramite il Terminale
Apri il Terminale del tuo Mac ed esegui i seguenti comandi per inviare i file a GitHub:

```bash
# Entra nella cartella del sito
cd "/Users/alinarello/.gemini/antigravity/scratch/andrealinarello-site"

# Inizializza Git e aggiungi i file
git init
git add .
git commit -m "Primo caricamento del nuovo sito"

# Rinomina il ramo principale in main
git branch -M main

# Collega il repository locale a quello su GitHub (sostituisci tuo-username)
git remote add origin https://github.com/tuo-username/tuo-username.github.io.git

# Invia i file (ti potrebbe essere richiesto l'accesso a GitHub o un token)
git push -u origin main
```

*Nota: Una volta completato il push, il tuo sito sarà online all'indirizzo `https://tuo-username.github.io` entro un minuto!*

---

## 3. Configurare il Redirect da Google Sites
Per reindirizzare i visitatori dal vecchio sito a quello nuovo:

1. Accedi a [Google Sites](https://sites.google.com/) e apri l'editor del tuo vecchio sito.
2. Clicca su **Embed** (Incorpora) nel pannello di destra.
3. Seleziona **Embed code** (Incorpora codice).
4. Incolla il seguente codice (sostituendo l'URL con il tuo nuovo indirizzo GitHub):
   ```html
   <div style="font-family: sans-serif; text-align: center; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc;">
     <p style="font-size: 18px; color: #0f172a; margin-bottom: 12px;">Il mio sito web si è trasferito all'indirizzo:</p>
     <a href="https://tuo-username.github.io" target="_top" style="font-size: 20px; font-weight: bold; color: #2563eb; text-decoration: underline;">https://tuo-username.github.io</a>
     <p style="font-size: 14px; color: #64748b; margin-top: 15px;">Clicca sul link sopra se non vieni reindirizzato automaticamente.</p>
   </div>

   <script>
     // Tenta il reindirizzamento automatico della pagina principale
     setTimeout(function() {
       window.top.location.href = "https://tuo-username.github.io";
     }, 2000);
   </script>
   ```
5. Clicca su **Next** (Avanti) e poi su **Insert** (Inserisci).
6. Trascina il box inserito all'inizio della tua homepage di Google Sites in modo che sia ben visibile.
7. Clicca su **Publish** (Pubblica) in alto a destra per rendere effettive le modifiche.
