-- CreateTable
CREATE TABLE "abi" (
    "id" SERIAL NOT NULL,
    "create_time" DATE,
    "update_time" DATE,
    "content" VARCHAR(255),

    CONSTRAINT "abi_pkey" PRIMARY KEY ("id")
);
