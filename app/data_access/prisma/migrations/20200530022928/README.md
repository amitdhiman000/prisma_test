# Migration `20200530022928`

This migration has been generated by Amit Dhiman at 5/30/2020, 2:29:28 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."users" (
"birthday" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"email" TEXT NOT NULL  ,"gender" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  ,"password" TEXT NOT NULL  ,"updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP )

CREATE UNIQUE INDEX "quaint"."users.email" ON "users"("email")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200530020859..20200530022928
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = "file:my-database.db"
 }
 model User {
```


