-- CreateEnum replacement for WorkspaceRole
CREATE TYPE "public"."WorkspaceRole_new" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');

ALTER TABLE "public"."workspace_members" ALTER COLUMN "roleId" DROP DEFAULT;
ALTER TABLE "public"."workspace_members"
  ALTER COLUMN "roleId" TYPE "public"."WorkspaceRole_new"
  USING (
    CASE
      WHEN "roleId"::text = 'VIEWER' THEN 'MEMBER'
      ELSE "roleId"::text
    END
  )::text::"public"."WorkspaceRole_new";
ALTER TABLE "public"."workspace_members" ALTER COLUMN "roleId" SET DEFAULT 'MEMBER'::"public"."WorkspaceRole_new";

DROP TYPE "public"."WorkspaceRole";
ALTER TYPE "public"."WorkspaceRole_new" RENAME TO "WorkspaceRole";

ALTER TABLE "public"."workspace_members"
  ADD CONSTRAINT "workspace_members_workspaceId_userId_key" UNIQUE ("workspaceId", "userId");

INSERT INTO "public"."workspace_members" ("id", "workspaceId", "userId", "roleId", "created_at")
SELECT
  ws."id" || '-owner',
  ws."id",
  ws."owner_id",
  'OWNER',
  NOW()
FROM "public"."workspaces" ws
ON CONFLICT ("workspaceId", "userId") DO NOTHING;
