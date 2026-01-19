# Modern Web Sitesi Tasarımı - React + TypeScript + Vite

Modern, animasyonlu ve responsive bir web sitesi şablonu. Vite ile hızlı geliştirme deneyimi, TypeScript ile tip güvenliği ve zengin animasyonlar içerir.

## ✨ Özellikler

- 🚀 **Vite** - Anında HMR ve ultra hızlı build
- ⚛️ **React 19** - En yeni React özellikleri
- 📘 **TypeScript** - Tam tip güvenliği
- 🎨 **Modern Tasarım** - Gradient'ler, animasyonlar, glassmorphism
- 📱 **Responsive** - Mobil, tablet ve desktop için optimize
- ♿ **Erişilebilir** - ARIA özellikleri ve klavye navigasyonu
- 🎭 **Animasyonlar** - Fade-in, float, ripple, shimmer efektleri
- 🌙 **Dark Theme** - Modern koyu tema

---

## 📋 Minimum Gereksinimler

| Araç    | Minimum | Önerilen | Projedeki |
| ------- | ------- | -------- | --------- |
| Node.js | 18.17.0 | 22.x LTS | 18+       |
| npm     | 8.0.0   | 10.x     | 8+        |
| Git     | 2.25.0  | En son   | 2.25+     |

---

## 🚀 Hızlı Başlangıç

### 1. Node.js Kurulumu

**Windows / macOS:**

- [Node.js resmi sitesinden](https://nodejs.org/) LTS sürümü indirin

**Linux (Ubuntu/Debian):**

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Çoklu sürüm yönetimi için NVM (önerilir):**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

Kurulumu doğrulayın:

```bash
node --version
npm --version
```

---

### 2. Projeyi Klonlayın

```bash
git clone git@github.com:atfskmn/React_document_1.git
cd React_document_1
```

### 3. Bağımlılıkları Yükleyin

```bash
npm install
```

### 4. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda açın: **http://localhost:5173/**

---

## 📦 Komutlar

| Komut             | Açıklama                                   |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Geliştirme sunucusunu başlatır (port 5173) |
| `npm run build`   | Production build oluşturur                 |
| `npm run preview` | Build'i önizler                            |
| `npm run lint`    | ESLint ile kod kalitesini kontrol eder     |

---

## 🏗️ Proje Yapısı

```text
my-app/
├── public/                 # Statik dosyalar
│   └── vite.svg           # Favicon
├── src/
│   ├── assets/            # Görseller, SVG'ler
│   │   └── react.svg
│   ├── App.tsx            # Ana React bileşeni
│   ├── App.css            # Ana stil dosyası
│   ├── main.tsx           # Giriş noktası
│   └── index.css          # Global stiller
├── index.html             # HTML şablonu
├── package.json           # Proje bağımlılıkları
├── tsconfig.json          # TypeScript yapılandırması
├── tsconfig.app.json      # App için TS config
├── tsconfig.node.json     # Node için TS config
├── vite.config.ts         # Vite yapılandırması
└── eslint.config.js       # ESLint kuralları
```

---

## 🎨 Kullanılan Teknolojiler

### Ana Teknolojiler

- **React 19.2.0** - UI kütüphanesi
- **TypeScript 5.9.3** - Statik tipleme
- **Vite 7.2.5 (Rolldown)** - Build tool

### Geliştirme Araçları

- **ESLint** - Kod kalitesi
- **TypeScript ESLint** - TS linting
- **Vite Plugin React** - React desteği

---

## 🎭 Proje Özellikleri

### Tasarım

- ✅ Sticky header (scroll ile sabit kalır)
- ✅ Hero bölümü (60vh, gradient başlıklar)
- ✅ Animasyonlu phone mock (float, app ikonları)
- ✅ Feature kartları (hover efektleri)
- ✅ CTA bölümü (shine animasyonu)
- ✅ Responsive footer

### Animasyonlar

- **fadeInUp** - İçerik aşağıdan yukarı
- **fadeInRight** - Telefon sağdan sola
- **float** - Telefon yukarı-aşağı hareket
- **iconPop** - İkonlar tek tek belirir
- **shimmer** - Parıldama efekti
- **ripple** - Buton tıklama dalgası
- **pulse** - Arka plan nabız efekti

### İnteraktif Özellikler

- 🔘 Butonlara tıklayınca "Başladı" olur
- 📜 Smooth scroll (CTA'ya kaydırma)
- 🖱️ Hover efektleri (kartlar, linkler)
- ⌨️ Klavye erişilebilirliği
- 📱 Touch-friendly mobil tasarım

---

## 🔧 Özelleştirme

### Renkleri Değiştirme

`src/App.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --container-max: 1100px;
  --accent: #646cff; /* Ana vurgu rengi */
  --accent-light: #818cf8; /* Açık vurgu */
  --accent-dark: #4338ca; /* Koyu vurgu */
  --success: #10b981; /* Başarı rengi */
  --muted: #9aa4b2; /* İkincil metin */
}
```

### İçeriği Değiştirme

`src/App.tsx` dosyasını düzenleyin:

- Hero başlığı ve açıklaması
- Feature kartları
- Footer bilgileri
- CTA metinleri

---

## 🌐 Deployment

### GitHub Pages

1. `vite.config.ts` dosyasına base ekleyin:

```typescript
export default defineConfig({
  base: '/React_document_1/',
  plugins: [react()],
});
```

2. Build ve deploy:

```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# dist/ klasörünü Netlify'a sürükle-bırak
```

---

## 🐛 Sorun Giderme

**Port 5173 kullanımda:**

```bash
# Vite otomatik olarak 5174'e geçer
# Veya belirli port:
npm run dev -- --port 3000
```

**Cache temizleme:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Build hatası:**

```bash
npm run build -- --mode development
```

---

## 📚 Ek Kaynaklar

- [React Dokümantasyonu](https://react.dev)
- [Vite Dokümantasyonu](https://vite.dev)
- [TypeScript Dokümantasyonu](https://www.typescriptlang.org)

---

## � Komut Referansı

### Node.js / npm Kontrol

```bash
# Sürümleri kontrol et
node --version
npm --version
```

### Yeni Proje Oluşturma

**Vite + React + TypeScript (Önerilen):**

```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
```

**Create React App (Klasik):**

```bash
npx create-react-app my-cra-app --template typescript
cd my-cra-app
npm start
```

**Next.js (SSR / Full-stack):**

```bash
npx create-next-app@latest my-next-app --typescript --tailwind --app
```

### Geliştirme Komutları

```bash
# Dev sunucusu
npm run dev

# Build (production)
npm run build

# Build önizleme
npm run preview

# Port değiştirme
npm run dev -- --port 3001

# TypeScript tip kontrolü
npx tsc --noEmit

# ESLint kontrolü
npm run lint
```

### Paket Yönetimi

```bash
# Paket yükleme
npm install paket-adi

# Dev dependency
npm install -D paket-adi

# Type definitions
npm install @types/paket-adi

# Global paket
npm install -g paket-adi

# Paket güncelleme
npm update
npm update paket-adi

# Paket kaldırma
npm uninstall paket-adi
```

### Git Komutları

```bash
# Git başlangıç
git init
git add .
git commit -m "Initial commit"

# Remote ekleme ve push
git remote add origin git@github.com:username/repo.git
git branch -M main
git push -u origin main

# Branch işlemleri
git checkout -b feature/yeni-ozellik
git add .
git commit -m "Yeni özellik eklendi"
git push origin feature/yeni-ozellik

# Değişiklikleri çekme
git pull origin main
```

### Sorun Giderme

**Node modules temizleme:**

```bash
rm -rf node_modules package-lock.json yarn.lock
npm cache clean --force
npm install
```

**Port meşgul (Linux / macOS):**

```bash
# Port kullanan process'i bul
lsof -i :3000
lsof -i :5173

# Process'i kapat
kill -9 PID
```

**Port meşgul (Windows):**

```cmd
# Port kullanan process'i bul
netstat -ano | findstr :3000
netstat -ano | findstr :5173

# Process'i kapat
taskkill /PID PID /F
```

**Vite cache temizleme:**

```bash
rm -rf node_modules/.vite
npm run dev
```

**TypeScript hatası:**

```bash
# node_modules/@types temizle
rm -rf node_modules/@types
npm install
```

### Production Build ve Test

```bash
# Production build
npm run build

# Build boyutu analizi
npm run build -- --mode production

# Local'de production test
npm run preview

# Build dosyalarını temizle
rm -rf dist
```

### Performans ve Optimizasyon

```bash
# Bundle analizi (ek paket gerekli)
npm install -D rollup-plugin-visualizer
npm run build

# Dependency boyutlarını kontrol
npx vite-bundle-visualizer

# Kullanılmayan bağımlılıkları bul
npx depcheck
```

---

## �📄 Lisans

Bu proje MIT lisansı altındadır.

---

## 👤 Geliştirici

**GitHub:** [@atfskmn](https://github.com/atfskmn)  
**Repository:** [React_document_1](https://github.com/atfskmn/React_document_1)

---

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

---

**⭐ Beğendiyseniz yıldız vermeyi unutmayın!**
