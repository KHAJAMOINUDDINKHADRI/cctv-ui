# CCTV Incident Dashboard

A modern CCTV incident dashboard built with Next.js 15, Prisma, Tailwind CSS, and Supabase (Postgres).

---

## 🚀 Deployment Instructions

1. **Set up Supabase (Postgres) database:**

   - Go to [https://app.supabase.com/](https://app.supabase.com/) and create a new project.
   - In your Supabase dashboard, go to **Settings → Database** and copy the **Session pooler** connection string (for IPv4 compatibility).
   - Your `.env` should contain:
     ```
     DATABASE_URL="postgresql://postgres.[YOUR_PROJECT_ID]:[YOUR-PASSWORD]@[REGION].pooler.supabase.com:5432/postgres"
     ```
    (Replace `YOUR_PROJECT_ID`, `PASSWORD`, and `REGION` with your actual values. URL-encode your password if it contains special characters.)


2. **Clone the repository:**
   ```sh
   git clone https://github.com/KHAJAMOINUDDINKHADRI/cctv-ui.git
   cd cctv-ui
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run migrations:**
   ```sh
   npx prisma migrate dev --name init
   ```
5. **Seed the database:**
   ```sh
   node prisma/seed.js
   ```
6. **Run the development server:**
   ```sh
   npm run dev
   ```

### .env Example

```
DATABASE_URL="postgresql://postgres.[YOUR_PROJECT_ID]:[YOUR-PASSWORD]@[REGION].pooler.supabase.com:5432/postgres"
```

---

## 🌐 Live URL

- [Your Live Demo](https://cctv-ui-kmk.netlify.app/)

---

## 🛠️ Tech Decisions

- **Next.js 15 App Router**: Modern React framework for SSR, routing, and API routes.
- **Prisma ORM**: Type-safe database access and migrations.
- **Supabase (Postgres)**: Used as the production database for scalable, relational data storage.
- **Tailwind CSS**: Utility-first styling for rapid, responsive UI.
- **React Icons**: For consistent, modern iconography.
- **Optimistic UI**: Incident resolve action updates UI instantly for better UX.
- **Netlify**: For seamless cloud deployment.

---

## 📦 Folder Structure

- `src/app/` — Next.js app, components, API routes
- `prisma/` — Prisma schema, migrations, seed script
- `public/Thumbnails/` — Placeholder images for incidents

---

## 📝 License

MIT (or your preferred license)
