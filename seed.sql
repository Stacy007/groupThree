DROP DATABASE IF EXISTS item_db;
CREATE DATABASE item_db;
USE item_db;

INSERT INTO Authors (name, email, createdAT, updatedAT)
VALUES ("Cooper","cooper@jbeatty.com", "2018-08-27 23:46:51", "2018-08-27 23:46:51");
INSERT INTO Authors (name, email, cell, createdAT, updatedAT)
VALUES ("Jamie","jamie@jbeatty.com", "8587752704", "2018-08-27 23:46:51", "2018-08-27 23:46:51");
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

INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (1,'Bronx Pizza, Washington Street, San Diego, CA, USA','Try the 2 cheese and a drink','https://www.google.com/maps/search/?api=1&query=bronx+pizza%2C+washington+street%2C+san+diego%2C+ca','https://www.yelp.com/biz/bronx-pizza-san-diego','2018-08-27 23:46:51','2018-08-27 23:46:51',1,1);
INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (2,'Breakfast Republic, University Avenue, San Diego, CA, USA','Get there before 8:15am or crowded','https://www.google.com/maps/search/?api=1&query=Breakfast+Republic%2C+University+Avenue%2C+San+Diego%2C+CA%2C+USA','https://www.yelp.com/biz/breakfast-republic-san-diego?osq=Breakfast+Republic','2018-08-27 23:46:51','2018-08-27 23:46:51',2,2);
INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (3,'Tribute Pizza, North Park Way, San Diego, CA','Great crust, good cheese, topping choice is good.','https://www.google.com/maps/search/?api=1&query=Tribute+Pizza%2C+North+Park+Way%2C+San+Diego%2C+CA','https://www.yelp.com/biz/tribute-pizza-san-diego-2?adjust_creative=69BdeD_K0bIWX1bhuQsbBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=69BdeD_K0bIWX1bhuQsbBg','2018-09-05 23:18:56','2018-09-05 23:18:56',2,1);
INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (4,'Nutmeg Bakery & Cafe, Sabre Springs Parkway, San Diego, CA','Really good specials.  Great Bakery','https://www.google.com/maps/search/?api=1&query=Nutmeg+Bakery+%26+Cafe%2C+Sabre+Springs+Parkway%2C+San+Diego%2C+CA','https://www.yelp.com/biz/nutmeg-bakery-and-cafe-san-diego-2?adjust_creative=69BdeD_K0bIWX1bhuQsbBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=69BdeD_K0bIWX1bhuQsbBg','2018-09-05 23:21:32','2018-09-05 23:21:32',2,3);
INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (5,'Sushi Ota, Mission Bay Drive, San Diego, CA','Great place for really good, but quick lunch.','https://www.google.com/maps/search/?api=1&query=Sushi+Ota%2C+Mission+Bay+Drive%2C+San+Diego%2C+CA','https://www.yelp.com/biz/sushi-ota-san-diego?adjust_creative=69BdeD_K0bIWX1bhuQsbBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=69BdeD_K0bIWX1bhuQsbBg','2018-09-05 23:23:09','2018-09-05 23:23:09',2,3);
INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (6,'Jasmine Seafood Restaurant, Convoy Street, San Diego, CA','Dim Sum lunch is great - really crowded on Sundays.','https://www.google.com/maps/search/?api=1&query=Jasmine+Seafood+Restaurant%2C+Convoy+Street%2C+San+Diego%2C+CA','https://www.yelp.com/biz/jasmine-seafood-restaurant-san-diego?adjust_creative=69BdeD_K0bIWX1bhuQsbBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=69BdeD_K0bIWX1bhuQsbBg','2018-09-05 23:24:39','2018-09-05 23:24:39',2,3);
INSERT INTO `Items` (`id`,`text`,`note`,`googleMap`,`yelpURL`,`createdAt`,`updatedAt`,`AuthorId`,`CategoryId`) VALUES (7,'Las Cuatro Milpas, Logan Avenue, San Diego, CA','Surprisingly, really good for breakfast and still kinda uncrowded if you get there when they open.','https://www.google.com/maps/search/?api=1&query=Las+Cuatro+Milpas%2C+Logan+Avenue%2C+San+Diego%2C+CA','https://www.yelp.com/biz/las-cuatro-milpas-san-diego-2?adjust_creative=69BdeD_K0bIWX1bhuQsbBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=69BdeD_K0bIWX1bhuQsbBg','2018-09-05 23:26:32','2018-09-05 23:26:32',2,2);


INSERT INTO Reviews (comment, createdAT, updatedAT,ItemId, AuthorId)
VALUES ("I really want to try this","2018-08-27 23:46:51", "2018-08-27 23:46:51",1,3);
INSERT INTO Reviews (comment, createdAT, updatedAT,ItemId, AuthorId)
VALUES ("Try the french toast","2018-08-27 23:46:51", "2018-08-27 23:46:51",2,4);


