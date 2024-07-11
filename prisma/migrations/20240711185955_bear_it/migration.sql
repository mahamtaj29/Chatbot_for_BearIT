-- CreateTable
CREATE TABLE "AboutUs" (
    "aboutusid" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AboutUs_pkey" PRIMARY KEY ("aboutusid")
);

-- CreateTable
CREATE TABLE "ContactRequests" (
    "requestid" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT DEFAULT 'Pending',
    "createdat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactRequests_pkey" PRIMARY KEY ("requestid")
);

-- CreateTable
CREATE TABLE "CoursesAndServices" (
    "courseserviceid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "requirements" TEXT,
    "startdate" TIMESTAMP(3),
    "enddate" TIMESTAMP(3),
    "createdat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoursesAndServices_pkey" PRIMARY KEY ("courseserviceid")
);

-- CreateTable
CREATE TABLE "FAQs" (
    "faqid" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FAQs_pkey" PRIMARY KEY ("faqid")
);
