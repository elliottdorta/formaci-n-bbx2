INSERT INTO USER
(dni,name,surname,rol,password,dateup) VALUES
('54108407X','ELLIOTT','DORTA','ADMIN','prueba','2021-04-09'),
('00000000X','JOSELITO','JUNIOR','WORKER','prueba','2021-04-09');


INSERT INTO ARTICLE
(description,price,status,creator,usermod,dateup) VALUES
('Armario',25.75,'ACTIVE','Elliott',null,'2021-04-17'),
('Lampara',45.26,'ACTIVE','Elliott',null,'2021-04-17'),
('Sillon',625.75,'ACTIVE','Elliott',null,'2021-04-17'),
('Mesa',5.75,'INACTIVE','Elliott',null,'2021-04-17');

INSERT INTO PRICE_REDUCTION
(creator,reducedprice,datestart,dateend) VALUES
('Elliott',15.25,'2021-04-09','2021-04-17'),
('Elliott',150,'2021-04-10','2021-10-01');


INSERT INTO VENDOR
(name,country,description) VALUES
('Madera','Spain','Proveedor de madera'),
('Bombillas','Japon','Bombillas led');

INSERT INTO ARTICLE_VENDOR VALUES
(1,1),
(2,1);