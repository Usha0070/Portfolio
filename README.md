# Md. Usha Khan — Portfolio v5

Chemistry Instructor · CS Developer · BUET · 10 Minute School

---

## Local Development

1. Open `portfolio/` folder in VS Code
2. Install **Live Server** extension by Ritwick Dey
3. Right-click `index.html` → Open with Live Server

---

## Deploy: GitHub + Netlify

```powershell
git init
git add .
git commit -m "Portfolio v5"
git branch -M main
git remote add origin https://github.com/Usha0070/usha-khan-portfolio.git
git push -u origin main
```

Then: netlify.com → Add new site → Import from GitHub → select repo → Deploy.
Set subdomain to `ushakhan` → URL becomes https://ushakhan.netlify.app

---

## Contact Form (Formspree)

1. Go to formspree.io → sign up → New Form
2. Copy your form ID
3. In index.html find: action="https://formspree.io/f/mdawaean"
4. Replace mdawaean with your ID
5. Messages go directly to mdushakhan007@gmail.com

---

## Google Indexing

1. Deploy to Netlify first
2. Go to search.google.com/search-console
3. Add property: https://ushakhan.netlify.app
4. Submit sitemap: https://ushakhan.netlify.app/sitemap.xml
5. Add portfolio URL to LinkedIn, GitHub bio, Instagram — this speeds up indexing
6. Expect to appear in Google within 1-4 weeks for "Md Usha Khan BUET"
