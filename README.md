# BrasilClear Sales Funnel — Vercel Ready

## 📁 Project Structure

```
brasilclear-funnel/
├── app/
│   ├── page.tsx              # Sales Page (A/B split)
│   ├── obrigado/
│   │   └── page.tsx          # Thank You Page + WhatsApp
│   ├── analytics/
│   │   └── page.tsx          # A/B Test Dashboard
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Tailwind + custom styles
├── lib/
│   ├── ab-test.ts            # A/B test engine
│   └── email-storage.ts      # Lead capture system
├── package.json
├── next.config.js            # Static export config
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🚀 Deploy to Vercel (3 Steps)

### Step 1: Install Dependencies
```bash
cd brasilclear-funnel
npm install
```

### Step 2: Configure Your WhatsApp Number

**IMPORTANT:** Edit the file `app/obrigado/page.tsx` and replace the placeholder:

```typescript
// Line ~14 — CHANGE THIS:
const WHATSAPP_NUMBER = "5511999999999";

// TO YOUR REAL NUMBER (format: 55 + DDD + number, no spaces):
const WHATSAPP_NUMBER = "5511987654321"; // Example: São Paulo
```

You can also customize the WhatsApp message on line ~15.

### Step 3: Deploy

**Option A — Vercel CLI:**
```bash
npm i -g vercel
vercel --prod
```

**Option B — Git + Vercel Dashboard:**
1. Push this folder to a GitHub/GitLab/Bitbucket repo
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your repo
4. Framework Preset: **Next.js**
5. Click **Deploy**

The site will be live in under 2 minutes.

---

## 🧪 A/B Testing Guide

### How It Works
- Visitors are randomly split 50/50 between **Variant A** (Emotional/Story) and **Variant B** (Logical/Data)
- The assignment is "sticky" — same visitor always sees same variant
- All events tracked in browser localStorage

### View Variants Manually
- Variant A: `https://your-site.com/?variant=A`
- Variant B: `https://your-site.com/?variant=B`

### Analytics Dashboard
Visit: `https://your-site.com/analytics`

Features:
- Real-time conversion rates
- Side-by-side comparison table
- Export leads to CSV
- Clear data for fresh tests

### Declaring a Winner
After ~100+ visits per variant:
1. Check `/analytics` — compare conversion rates
2. Keep the winning variant
3. To disable A/B test and keep only one variant, edit `lib/ab-test.ts`:

```typescript
// Change from random:
const variant: Variant = Math.random() < 0.5 ? 'A' : 'B';

// To fixed winner (e.g., if A wins):
const variant: Variant = 'A';
```

---

## 📧 Lead Management

All captured emails are stored in the visitor's browser localStorage. To collect them:

1. **Export from Dashboard:** Go to `/analytics` → click **"Exportar CSV"**
2. **Import to your Email Marketing:** Mailchimp, ActiveCampaign, SendGrid, etc.
3. **Or connect a backend:** Replace the `saveSubscriber` function in `lib/email-storage.ts` to POST to your API

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    500: '#22c55e',  // Change this hex
    600: '#16a34a',
    // ...
  }
}
```

### Change Copy/Text
Edit `app/page.tsx` — both `VariantA()` and `VariantB()` functions contain all the sales copy.

### Add Images
Since this is a static export, use external image URLs:
```html
<img src="https://your-cdn.com/image.jpg" alt="..." />
```

Or place images in `/public/` folder and reference as `/image.jpg`.

---

## 🔒 Privacy Note

All data stays in the user's browser (localStorage). No server, no database, no cookies required. GDPR-friendly by default.

---

**Built for BrasilClear — Dianética no Brasil 🇧🇷**
