**Projet en cours...**


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

> SGBD=[your-sgdb]  
DB_USER=[your-db-username]  
DB_PASSWORD=[your-db-password]  
DB_HOST=[your-db-host]  
DB_PORT=[your-db-port]  
DB_NAME=[your-db-name]  
DATABASE_URL="${SGBD}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"  

## To run the project in dev mode

```bash
npm install
npx prisma migrate dev
npm run start:dev
