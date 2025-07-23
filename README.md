# CCTV Incident Dashboard

A modern CCTV incident dashboard built with Next.js 15, Prisma, and Tailwind CSS.

---

## 🚀 Deployment Instructions

1. **Set up MySQL database:**

   - Make sure MySQL is installed and running on your machine.
   - Create the database and user by running the following SQL commands in your MySQL client:
     ```sql
     CREATE DATABASE cctv_db;
     CREATE USER 'cctv_user'@'localhost' IDENTIFIED BY 'moin';
     GRANT ALL PRIVILEGES ON cctv_db.* TO 'cctv_user'@'localhost';
     FLUSH PRIVILEGES;
     ```
   - Your `.env` should contain:
     ```
     DATABASE_URL="mysql://cctv_user:moin@localhost:3306/cctv_db"
     ```

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
   npx prisma migrate deploy
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
DATABASE_URL="mysql://cctv_user:moin@localhost:3306/cctv_db"
```

---

## 🌐 Live URL

- [Your Live Demo](https://cctv-ui.netlify.app
Resources
)

---

## 🛠️ Tech Decisions

- **Next.js 15 App Router**: Modern React framework for SSR, routing, and API routes.
- **Prisma ORM**: Type-safe database access and migrations.
- **MySQL**: Used as the production database for scalable, relational data storage.
- **Tailwind CSS**: Utility-first styling for rapid, responsive UI.
- **React Icons**: For consistent, modern iconography.
- **Optimistic UI**: Incident resolve action updates UI instantly for better UX.

---

## 📦 Folder Structure

- `src/app/` — Next.js app, components, API routes
- `prisma/` — Prisma schema, migrations, seed script
- `public/Thumbnails/` — Placeholder images for incidents

---

## 📝 License

MIT (or your preferred license)
