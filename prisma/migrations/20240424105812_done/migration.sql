/*
  Warnings:

  - You are about to drop the `authenticator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `authenticator` DROP FOREIGN KEY `Authenticator_userId_fkey`;

-- DropTable
DROP TABLE `authenticator`;

-- CreateTable
CREATE TABLE `Game` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `timeStarted` DATETIME(3) NOT NULL,
    `topic` VARCHAR(191) NOT NULL,
    `timeEnded` DATETIME(3) NULL,
    `gameType` ENUM('mcq', 'open') NOT NULL,

    INDEX `Game_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `topic_count` (
    `id` VARCHAR(191) NOT NULL,
    `topic` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL,

    UNIQUE INDEX `topic_count_topic_key`(`topic`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `id` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `gameId` VARCHAR(191) NOT NULL,
    `options` JSON NULL,
    `isCorrect` BOOLEAN NULL,
    `questionType` ENUM('mcq', 'open') NOT NULL,
    `userAnswer` VARCHAR(191) NULL,

    INDEX `Question_gameId_idx`(`gameId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
