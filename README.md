# Service Web — back-end

API back-end **NestJS** du projet Service Web : modules métier, validation,
documentation OpenAPI et intégration RabbitMQ.

## Modules

| Module | Rôle |
| :--- | :--- |
| `utilisateur` | Comptes, authentification, rôles |
| `musique` | Catalogue et lecture |
| `partie` | Sessions de jeu et état |
| `rabbitmq` | Producteur/consommateur de messages |
| `test` | Fixtures et jeu d'essai |

## Stack

- **NestJS** + **TypeScript**
- **TypeORM** (PostgreSQL) et **Mongoose** (MongoDB)
- **RabbitMQ** via `@nestjs-plus/rabbitmq`
- **Swagger** — documentation OpenAPI générée
- **class-validator** / **class-transformer** — validation DTO

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run start:dev
```

La documentation OpenAPI est servie sur `/api` en développement.

## Scripts

| Commande | Rôle |
| :--- | :--- |
| `npm run start:dev` | Serveur de développement avec rechargement |
| `npm run build` | Build |
| `npm run lint` / `npm run format` | Qualité de code |
| `npm test` | Tests |

## Licence

MIT
