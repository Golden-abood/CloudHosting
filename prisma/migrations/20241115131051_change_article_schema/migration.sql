-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://cloud.appwrite.io/v1/storage/buckets/67180f19002ab2665cd7/files/671bc726002f942ee3ff/view?project=6717cc38002275da6f3d&project=6717cc38002275da6f3d&mode=admin',
ADD COLUMN     "userId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT 'https://github.com/shadcn.png';

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
