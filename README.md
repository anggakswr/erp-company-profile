# Company Profile Project

## Teknologi yang Digunakan

Proyek ini adalah pembuatan company profile menggunakan berbagai teknologi modern untuk membangun antarmuka yang responsif dan elegan. Berikut adalah teknologi yang digunakan dalam proyek ini:

### 1. React

React adalah pustaka JavaScript untuk membangun antarmuka pengguna. React memungkinkan pembuatan komponen yang dapat digunakan kembali dan memudahkan pengelolaan status aplikasi.

### 2. TypeScript

TypeScript adalah bahasa pemrograman yang merupakan superset dari JavaScript dengan tipe statis. TypeScript membantu menangkap kesalahan lebih awal selama pengembangan dengan menyediakan tipe data yang kuat dan alat bantu pengembangan yang lebih baik.

### 3. Tailwind CSS

Tailwind CSS adalah framework utilitas-first untuk CSS yang memungkinkan kamu membangun desain yang responsif dan dapat disesuaikan dengan mudah. Dengan Tailwind, kamu dapat menghindari menulis CSS kustom yang berlebihan dan fokus pada penataan langsung di markup HTML.

### 4. Lucide-react

Lucide-react adalah pustaka ikon yang menyediakan ikon-ikon SVG yang mudah digunakan di aplikasi React. Dengan Lucide-react, kamu bisa menambahkan berbagai ikon dengan cara yang sederhana dan efisien.

### 5. Next UI

Next UI adalah pustaka komponen UI untuk React yang menyediakan komponen-komponen siap pakai dengan desain yang modern dan aksesibilitas yang baik. Next UI membantu mempercepat pengembangan antarmuka pengguna dengan menyediakan berbagai komponen yang dapat disesuaikan.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
