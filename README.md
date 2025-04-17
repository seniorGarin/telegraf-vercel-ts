# telegraf-vercel-ts

This project is used as a starter for Telegram bots to be deployed on Vercel. It provides a basic setup to get your Telegram bot up and running quickly with Vercel's serverless functions.

## Tutorial
https://telegra.ph/Deploying-Telegram-Bots-12-01

## Project Folder Structure

```
telegraf-vercel-ts/
├── api/
│   └── index.ts
├── node_modules/
├── src/
│   ├── index.ts
│   ├── commands/
│   │   ├── help.ts
│   │   ├── index.ts
│   │   ├── privacy.ts
│   │   ├── start.ts
│   ├── core/
│   │   ├── development.ts
│   │   ├── index.ts
│   │   └── production.ts
│   ├── utils/
│   │   ├── debug.ts
├── .env-sample
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vercel.json
```

## Description

- **api/index.ts**: Entry point for Vercel serverless functions.
- **src/index.ts**: Main entry point for the bot application.
- **src/commands/**: Directory containing command handlers for the bot.
- **src/core/**: Contains environment-specific configurations and setups.
- **src/utils/**: Utility functions used across the project.
- **.env-sample**: Sample environment variables file.
- **vercel.json**: Vercel configuration file.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file based on the `.env-sample` file and add your Telegram bot token.
4. Run the bot in development mode using `npm run dev`.
5. Deploy to Vercel.

## Scripts

- `npm run dev`: Runs the bot in development mode.
- `npm run build`: Builds the project for production.
- `npm run start`: Starts the bot in production mode.
- `npm run prettier`: Formats the code using Prettier.
- `npm run lint`: Runs TypeScript compiler for type checking.
