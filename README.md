# Digital Media Portfolio (Phase 1)

A simple one-page artist portfolio for class. No build step—just HTML, CSS, and a little JavaScript.

## Folder structure

```
honorecar/
├── index.html          ← main page (edit text here)
├── style.css           ← colors and layout
├── script.js           ← optional popup for projects
├── assets/
│   └── images/         ← put your project images here
└── README.md           ← this file
```

## How to preview

1. Open `index.html` in Chrome or Safari (double-click the file).
2. Or publish on GitHub Pages (see below).

## What to edit first

Open `index.html` and search for **REPLACE**. Update:

- Your name and intro
- Each project title, medium, year, description
- Image paths in `assets/images/`
- About section and contact links

Colors and spacing: edit the top of `style.css` (`:root` section).

## Add a new project

Copy one full `<article class="project-card">…</article>` block in `index.html` and change the text and image path.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. On GitHub: **Settings → Pages → Source**: deploy from `main` branch, folder `/ (root)`.
3. Your site will be at `https://yourusername.github.io/repository-name/`

## Video projects

On a project button, add:

`data-video="https://www.youtube.com/embed/YOUR_VIDEO_ID"`

Use the embed URL from YouTube (Share → Embed).
