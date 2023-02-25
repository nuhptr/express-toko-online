## Documentasi about Toko Online API

## Dependencies

```bash
# ORM Sequelize
$ npm install --save sequelize

# mysql2
$ npm install --save mysql2

# sequelize-cli
$ npm install --save-dev sequelize-cli
create file .sequelizerc -> configure path every config

$ npx sequelize-cli init

# create a dabatase
$ npx sequelize-cli db:create

# create migration
$ npx sequelize-cli model:generate --name [name-model] --attributes [field-attribute]

# run migration
$ npx sequelize-cli db:migrate

# undo migrate
$ npx sequelize-cli db:migrate:undo:all

# using nodemon
$ npm install -g nodemon
"dev": "nodemon ./bin/www"
```
