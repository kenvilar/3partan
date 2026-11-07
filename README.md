# 3partan

A music website built with HTML, Sass, jQuery, and Parcel.

## Local development

Use Node.js 22, then run:

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

Parcel compiles the JavaScript and Sass and writes the finished site to `dist/`.
Asset paths are relative so the output works under `/3partan/` on GitHub Pages.

## GitHub Pages

The **Build and deploy to GitHub Pages** workflow builds and publishes `dist/`
when changes are pushed to `main`. Pull requests run the build without deploying.
In **Settings → Pages**, the publishing source must be **GitHub Actions**.

No API keys or repository secrets are needed for this deployment.

The music submission form currently has no submission service configured.
