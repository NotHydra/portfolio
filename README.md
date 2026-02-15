# Portfolio Website

<p style="text-align: justify">
    Welcome to my <b>Portfolio Website</b> – a personal space where I share my journey as a developer, showcase the projects I'm passionate about, and demonstrate the skills I've cultivated along the way. Built with modern web technologies, this site reflects my commitment to creating fast, elegant, and user-friendly experiences. Whether you're here to explore my work, learn about my approach to development, or connect with me, I hope you find something that resonates with you.
</p>

## Tech Stack

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<br>
<br>
<br>

# Development Setup

### 1. Install Dependencies

```bash
$ pnpm install
```

### 2. Environment Variables Setup

```bash
$ cp .env.example .env.dev
```

### 3. Running The Project

```bash
$ docker compose --env-file .env.dev -f docker-compose.dev.yaml up --build

# or

$ docker compose --env-file .env.dev -f docker-compose.dev.yaml up
```

<br>
<br>
<br>

# Production Setup

### 1. Environment Variables Setup

```bash
$ cp .env.example .env.prod
```

> **Note:** Make sure to change the `HOSTNAME` to `0.0.0.0` in your `.env.prod` file to allow the application to accept connections from outside the container.

### 2. Running The Project

```bash
$ docker compose --env-file .env.prod -f docker-compose.prod.yaml up -d --build

# or

$ docker compose --env-file .env.prod -f docker-compose.prod.yaml up -d
```
