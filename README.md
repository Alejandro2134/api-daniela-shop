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

## Notas

* Al ejecutar por primera vez se crean automaticamente los 5 prodúctos, el rol admin y un usuario con dicho rol.

* En la carpeta `EntregablesProyecto` se encuentran:
  - Un archivo .json con los endpoints creados en postman
  - Un txt con las sentencias DML y DDL
  - Un archivo .sql que contiene un script de la bd
