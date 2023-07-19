# WebDev Essentials
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea17acda-f4b8-4ad8-9efa-6da0d14cde69/deploy-status)](https://app.netlify.com/sites/webdev-essentials/deploys)
---

## 🚀 Project Structure

Inside you'll see the following folders and files:

```
/
├── public/
│   └── favicons.svg
├── src/
│   ├── components/
│   │   └── Components.astro
│   ├── content/
│   │   └── card-content.md
│   ├── images/
│   │   └── image.png
│   │   └── image.webp
│   ├── layouts/
│   │   └── Layouts.astro
│   └── pages/
│       └── index.astro
│       └── Pages.astro
│   └── scripts/
│       └── externalscript.js
│       └── externalscript.ts
│   └── styles/
│       └── style.scss
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where any Astro/React/Vue/Svelte/Preact components go.

`src/content/` is where any markdown files go and they are automatically populated as individual cards.

Any static assets, like images and favicons, can either be placed in the `public/` directory or the 'src/images' directory.

Style files, including Scss, can be directly imported without compiling beforehand. Scss can also be written directly to Astro files.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
