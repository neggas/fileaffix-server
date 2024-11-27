import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { fileTable } from './files.schema';
import { timestamps } from 'src/utils/columns.helper';

export const downloadTable = pgTable('downloades', {
  id: uuid('id').defaultRandom().primaryKey(),
  fileId: uuid('file_id')
    .references(() => fileTable.id)
    .notNull(),
  ipAddress: varchar('ip_address', { length: 45 }).notNull(),
  userAgent: text('user_agent').notNull(),
  ...timestamps,
});
