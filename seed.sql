DROP DATABASE IF EXISTS item_db;
CREATE DATABASE item_db;
USE item_db;

INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("Cooper","cooper@jbeatty.com", "2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("Jamie","jamie@jbeatty.com", "2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("Annette","test@test.com","2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("Fred","freddy@jbeatty.com", "2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("AnotherFred","freddy1@jbeatty.com","2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("Philip","test@test.com","2018-08-27 23:46:51", "2018-08-27 23:46:51");

INSERT INTO Categories (name,  createdAT, updatedAT)
VALUES ("Pizza","2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Categories (name,  createdAT, updatedAT)
VALUES ("Breakfast","2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Categories (name,  createdAT, updatedAT)
VALUES ("Lunch","2018-08-27 23:46:51", "2018-08-27 23:46:51");

INSERT INTO Items (text,note, createdAT, updatedAT,AuthorId,CategoryId)
VALUES ("Bronx Pizza","Try the 2 cheese and a drink","2018-08-27 23:46:51", "2018-08-27 23:46:51",1,1);
INSERT INTO Items (text,note, createdAT, updatedAT,AuthorId,CategoryId)
VALUES ("BreakFast Republic","Get there before 8:15am or crowded","2018-08-27 23:46:51", "2018-08-27 23:46:51",2,2);

INSERT INTO Reviews (comment, createdAT, updatedAT,ItemId, AuthorId)
VALUES ("I really want to try this","2018-08-27 23:46:51", "2018-08-27 23:46:51",1,3);
INSERT INTO Reviews (comment, createdAT, updatedAT,ItemId, AuthorId)
VALUES ("Try the french toast","2018-08-27 23:46:51", "2018-08-27 23:46:51",2,4);




