# Birthday Surprise for Anurag

This is a romantic birthday surprise website for Anurag from Sofiya. It is built with plain HTML, CSS, and JavaScript so it can be deployed directly to GitHub Pages without a backend or build step.

## 1. Change Anurag's name

Open [js/script.js](js/script.js) and update the `CONFIG` object:

```js
const CONFIG = {
  boyfriendName: "Anurag Singh",
};
```

## 2. Change Sofiya's name

Also update the `girlfriendName` in the same `CONFIG` object:

```js
const CONFIG = {
  girlfriendName: "Sofiya",
};
```

## 3. Change the birthday date

Update the birthday date in `CONFIG`:

```js
birthdayDate: "2026-09-16T00:00:00"
```

This is interpreted by the browser's local timezone, so it will count down correctly for normal browsing.

## 4. Add photos

Replace the files in the folder `assets/photos/`.

Use the same filenames if you want the current configuration to work without editing code:

- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`
- `photo7.jpg`
- `photo8.jpg`

If you want to customize the titles and captions, update the `PHOTOS` array in [js/script.js](js/script.js).

## 5. Replace the birthday music

Add your own music file at:

`assets/music/birthday.mp3`

If the file is missing, the site keeps working and the music button will gracefully show the unavailable state instead of breaking the page.

## 6. Edit the love letter

Update the `loveLetter` text in the `CONFIG` object in [js/script.js](js/script.js).

## 7. Edit the final message

Update the `finalMessage` text in the `CONFIG` object in [js/script.js](js/script.js).

## 8. Run locally

Open [index.html](index.html) in a browser, or run a simple local server from this folder:

```bash
cd birthday-surprise
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## 9. Deploy to GitHub Pages

1. Push the contents of this folder to your GitHub repository.
2. Open the GitHub repository settings.
3. Go to Pages.
4. Choose the branch and root folder, usually `main` with `/root`.
5. Save the settings.

The project uses relative paths, so it is ready for GitHub Pages without a backend or build process.

## Project structure

```text
birthday-surprise/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── photos/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   ├── photo4.jpg
│   │   ├── photo5.jpg
│   │   ├── photo6.jpg
│   │   ├── photo7.jpg
│   │   └── photo8.jpg
│   └── music/
│       └── birthday.mp3
├── README.md
└── .gitignore
```

## Notes

- The website is intentionally static and lightweight.
- Missing or broken images are hidden automatically.
- The lightbox works without external libraries.
- If autoplay is blocked by the browser, the music button allows playback manually.
