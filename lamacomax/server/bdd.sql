CREATE TABLE "rdv"(
    "id" serial NOT NULL,
    "id_patient" INTEGER NOT NULL,
    "id_praticien" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "note" VARCHAR(255) NOT NULL,
    "start" INTEGER NOT NULL,
    "stop" INTEGER NOT NULL
);
ALTER TABLE
    "rdv" ADD PRIMARY KEY("id");
CREATE TABLE "praticiens"(
    "id" serial NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "motdepasse" VARCHAR(255) NOT NULL,
    "login" VARCHAR(255) NOT NULL UNIQUE,
    "description" TEXT ,
    "dureeconsult" INTEGER NOT NULL
);
ALTER TABLE
    "praticiens" ADD PRIMARY KEY("id");
ALTER TABLE praticiens ALTER COLUMN description SET DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et maximus turpis, non lobortis quam. Cras eget faucibus metus. Suspendisse vel arcu luctus, pharetra libero in, egestas nisi. Cras condimentum diam ac lacus posuere semper. Aenean imperdiet dui vulputate sapien lacinia, ac vulputate urna interdum. Phasellus porta nulla tellus, in aliquet mauris iaculis et. Nulla eu mauris vel eros viverra maximus ac non enim. Morbi.';
CREATE TABLE "patients"(
    "id" serial NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "patients" ADD PRIMARY KEY("id");
CREATE TABLE "secretaire"(
    "id" serial NOT NULL,
    "motdepasse" VARCHAR(255) NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "secretaire" ADD PRIMARY KEY("id");
CREATE TABLE "horairedispo"(
    "id" serial NOT NULL,
    "id_praticien" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "starthour" INTEGER NOT NULL,
    "stophour" INTEGER NOT NULL,
    "pausestart" INTEGER NOT NULL,
    "pausestop" INTEGER NOT NULL
);
ALTER TABLE
    "horairedispo" ADD PRIMARY KEY("id");
ALTER TABLE
    "rdv" ADD CONSTRAINT "rdv_id_patients_foreign" FOREIGN KEY("id_patient") REFERENCES "patients"("id");
ALTER TABLE
    "rdv" ADD CONSTRAINT "rdv_id_praticien_foreign" FOREIGN KEY("id_praticien") REFERENCES "praticiens"("id");
ALTER TABLE
    "horairedispo" ADD CONSTRAINT "horairedispo_id_praticien_foreign" FOREIGN KEY("id_praticien") REFERENCES "praticiens"("id");

insert into patients (nom, prenom, age, email)
values 
('greu', 'jacque', 35, 'lgreu@mail.j'),
('jerte', 'annie', 42, 'anniii@mail.com'),
('hartg', 'kevin', 56, 'kev@jjj.be'),
('loi', 'sinté', 36, 'sinteloi@patate.be');

insert into praticiens (nom, prenom, type, motdepasse, login, dureeconsult)
values
('Martin', 'Pierre', 'Cardiologue', 'abcde', 'mpc', 25), 
('Bosse', 'Michelle', 'Kinésithérapeute', 'abcde', 'bmk', 30), 
('Lambert', 'René', 'Généraliste', 'abcde', 'lrg', 20), 
('Bourdon', 'Quentin', 'Dentiste', 'abcde', 'bqd', 40), 
('Martin', 'Catherine', 'Podologue', 'abcde', 'mcp', 30);