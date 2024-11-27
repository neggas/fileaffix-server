import { bigint, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from 'src/utils/columns.helper';

export const fileTable = pgTable('files', {
  id: uuid('id').defaultRandom().primaryKey(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  fileSize: bigint('file_size', { mode: 'bigint' }).notNull(),
  storagePath: varchar('storage_path').notNull(),
  downloadKey: varchar('download_key', { length: 64 }).notNull().unique(),
  ...timestamps,
});
