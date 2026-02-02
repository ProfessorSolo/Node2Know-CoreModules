# Node2Know — Core Modules: Spy On Me 😈

A tiny Node.js script that uses **core modules** to inspect your environment and write a log file.

This repo introduces three built-in Node modules:

- `os` — basic info about the machine and current user
- `path` — safe file/path utilities
- `fs` — read/write files

---

## ✅ Prereqs

- **Node.js** installed (includes `node`)

Check your version:

```bash
node -v
```

---

## 📄 What's in this repo?

- `spy-on-me.js` — generates a `security.log` file using core modules

---

## ▶️ Run it

```bash
node spy-on-me.js
```

You should see:

```txt
Report generated.
```

A new file will appear in the project folder:

- `security.log`

Open it to see the report contents.

---

## 👀 Run with watch mode

```bash
node --watch spy-on-me.js
```

Now tweak the report text, save, and watch Node re-run the script.

Stop watch mode with:

- `Ctrl + C`

---

## 🧠 What the script demonstrates

### `path`

- `__filename` gives the current file’s full path
- `path.basename(__filename)` extracts just the filename

### `os`

- `os.userInfo().username` gets the current username
- `os.totalmem()` gets total system memory (bytes)

### `fs`

- `fs.writeFileSync("security.log", report)` writes a file to disk

---

## 📁 Project Structure

```txt
.
├── spy-on-me.js
└── README.md
```

---

## License

**Node2Know-Learn-1.0** (see `LICENSE`).
