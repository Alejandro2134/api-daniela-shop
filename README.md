# api-daniela-shop

## Requerimientos

 * Node.js 
 * PostgreSQL

## Editar la configuración de conección

Encontraras un archivo llamado db.js en el cual habrá un objeto de configuración, en este se debe actualizar cambiar la contraseña y el usuario con los datos de tu sistema:

```
const connectionDetails = {
    host: 'localhost',
    port: 5432,
    database: 'shop',
    user: 'postgres',
    password: '123456'
};
```

## ¿Como ejecutar?

* `npm install` para instalar las dependencias
* `npm run start` para ejecutar en producción

