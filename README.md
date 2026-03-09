# Md. Usha Khan — Portfolio

**Chemistry Instructor · CS Developer · BUET · 10 Minute School**

🌐 **Live:** https://portfolio-psi-eight-9g1elpxvis.vercel.app
📧 mdushakhan007@gmail.com

---

## Local Development

1. Open the `portfolio/` folder in **VS Code**
2. Install **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500`

---

## Update & Deploy

Every time you make changes, run these 3 commands — Vercel auto-deploys:

```powershell
git add .
git commit -m "describe your change"
git push
```

Vercel picks up the push and goes live in ~20 seconds.

**GitHub repo:** https://github.com/Usha0070/Portfolio
**Vercel project:** https://vercel.com/dashboard

---

## Contact Form (Formspree) ✅ Already configured

Form is wired to `https://formspree.io/f/mdawaean`
Messages go directly to `mdushakhan007@gmail.com`
Free tier = 50 messages/month.

If you ever need to change it:
- Open `index.html` → find `action="https://formspree.io/f/mdawaean"`
- Replace `mdawaean` with your new Formspree form ID

---

## Google Search Indexing

Your site has full SEO: meta keywords, Schema.org structured data, sitemap, robots.txt.

**To appear for searches like "Md Usha Khan", "Usha BUET CSE", "Usha Chemistry Teacher":**

### Step 1 — Google Search Console (do this once)
1. Go to https://search.google.com/search-console
2. Click **Add Property** → paste: `https://portfolio-psi-eight-9g1elpxvis.vercel.app`
3. Choose **HTML tag** verification
4. Copy the `<meta name="google-site-verification" ...>` tag it gives you
5. Paste it in `index.html` right after `<head>` → save → `git add . && git commit -m "google verify" && git push`
6. Back in Search Console → click **Verify**
7. Go to **Sitemaps** → submit: `https://portfolio-psi-eight-9g1elpxvis.vercel.app/sitemap.xml`

### Step 2 — Add your URL everywhere (backlinks = faster ranking)

| Platform | Action |
|---|---|
| **LinkedIn** | Profile → Contact info → Website → paste live URL |
| **GitHub** | Profile bio → paste URL, bio: "BUET CSE · Chemistry Instructor at 10 Minute School" |
| **Instagram** | Bio → add URL |
| **YouTube (Chemputer Studio)** | Channel → About → Links → add URL |
| **Facebook Teaching Page** | About → Website → add URL |
| **Twitter/X** | Profile → Website field → add URL |

### Expected timeline
| Search term | When |
|---|---|
| `mdushakhan007` | 1–2 weeks |
| `Md Usha Khan BUET` | 2–4 weeks |
| `Usha Khan Chemistry Instructor` | 3–5 weeks |
| `Usha BUET CSE` | 3–6 weeks |

---

## File Structure

```
portfolio/
├── index.html              ← Full site (single page)
├── robots.txt              ← Allows Google to crawl
├── sitemap.xml             ← Tells Google your URL
├── netlify.toml            ← Deployment config
├── css/
│   ├── theme.css           ← Variables, nav, mobile responsive
│   └── sections.css        ← Section styles
├── js/
│   ├── main.js             ← Toggle, form, gallery, FAB
│   └── scenes.js           ← Animated canvas backgrounds
└── assets/
    ├── favicon.ico
    ├── favicon-32.png
    ├── favicon-180.png
    ├── Usha_Khan_Teaching_CV.pdf   ← Downloaded in Instructor mode
    ├── Usha_Khan_Dev_CV.docx       ← Downloaded in Developer mode
    └── images/
```