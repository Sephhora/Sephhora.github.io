
## 📁 Folder Structure (Follow Strictly)

```
project-root/
├── index.html
├── pages/
│   ├── login.html/       
│   ├── dashboard.html   
│   └── ...          → Others 
├── css/             → styles
├── js/              → JS  
└── assets/          → Images, icons, etc.
```

---

## 🔀 Workflow for Each Member

### Step 1: Create Your Branch
```bash
git checkout -b page-yourpage-memberX
```

### Step 2: Work only in your folder (no mixing)

### Step 3: Stage, Commit, Push
```bash
git add .
git commit -m "Added UI and backend for X page"
git push origin page-yourpage-memberX
```

### Step 4: Pull Request
- Open PR to `main`
- Mention what changed
- Ask for review before merge

---

---

## 📌 Notes
- One branch per member
- Always open a PR (no direct pushes to `main`)

