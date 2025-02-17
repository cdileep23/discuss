step-1

Nextjs setup

PS D:\nextjs> npx create-next-app@latest
√ What is your project named? ... p3
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in D:\nextjs\p3.


shadcn ui  config

PS D:\nextjs\p3> npx shadcn@latest init
>>
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
√ Which style would you like to use? » New York
√ Which color would you like to use as the base color? » Zinc
√ Would you like to use CSS variables for theming? ... no / yes
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating src\app\globals.css
  Installing dependencies.

It looks like you are using React 19.
Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

√ How would you like to proceed? » Use --legacy-peer-deps
✔ Installing dependencies.
✔ Created 1 file:
  - src\lib\utils.ts

Success! Project initialization completed.
You may now add components.

PS D:\nextjs\p3> 


DATABASE SETUP 

npm install prisma --save-dev

Finally, set up Prisma ORM with the init command of the Prisma CLI:

npx prisma init --datasource-provider sqlite

This creates a new prisma directory with a schema.prisma file and configures SQLite as your database. You're now ready to model your data and create your database with some tables.


3. Run a migration to create your database tables with Prisma Migrate
At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

npx prisma migrate dev --name init

prisma adaptor is used to create a row in acoount when a new user sign in 

 npm i @auth/core  @auth/prisma-adapter next-auth@beta 

 created prisma client

 step-2
 
 es, modern applications increasingly use NextAuth.js (or similar authentication providers) instead of manually handling passwords. Here's why:

🔥 Why Modern Apps Use NextAuth.js Instead of Manual Passwords
1️⃣ Security 🔒

OAuth providers like GitHub, Google, and Discord handle authentication securely.
Avoids password leaks, brute-force attacks, and hashing vulnerabilities.
2️⃣ User Convenience 🚀

No need to remember passwords – users sign in with Google, GitHub, etc.
Faster login experience with Single Sign-On (SSO).
3️⃣ Built-in Session Management 🔄

Handles JWT or database sessions automatically.
No need to manually create, validate, or expire tokens.
4️⃣ Supports Multiple Providers Easily 🌎

GitHub, Google, Facebook, Twitter, Discord, etc.
Adding new providers is just a few lines of code.
5️⃣ Secure Database Storage with Prisma 🛠️

Prisma stores user accounts, tokens, and sessions securely.
No need to manually manage user authentication tables.
🚀 Modern Apps Using NextAuth.js:
✅ SaaS Apps – No manual password management, just OAuth.
✅ E-commerce Sites – Users log in via Google, Facebook, etc.
✅ Job Portals – LinkedIn, GitHub login simplifies onboarding.
✅ Gaming & Tournament Platforms – Discord/Twitch logins for seamless entry.

🔄 When to Use Manual Authentication?
You might still use manual authentication if:

You need custom authentication logic (e.g., role-based access control).
You require phone number authentication (OTP-based login).
Your users don’t have third-party accounts (like Google, GitHub, etc.).
You're implementing enterprise authentication (SSO, LDAP, etc.).
