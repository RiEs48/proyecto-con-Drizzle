import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const comunidades = pgTable('comunidades', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull()
})

// migraciiones son archivos que  describen los cambios que se deben abplicar  al schema de la base de datos 
