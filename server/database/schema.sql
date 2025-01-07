CREATE TABLE artwork
	( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
	  address VARCHAR(250) NOT NULL,
      image VARCHAR(300) NOT NULL,
      picture_date date,
      type_of_art VARCHAR(100),
      latitude INT NOT NULL,
      longitude INT NOT NULL,
      picture_credit VARCHAR(100) NOT NULL
	);
    
    INSERT INTO artwork (id,name,address,image,type_of_art,latitude,longitude,picture_credit)
	VALUES (1,'Regards', '39 Rue Paul Chenavard, 69001 Lyon, France', 'https://www.street-artwork.com/uploads/document/5cd2897d5e44d570844651.jpg', 'tag',45.765236,4.833110,'Rabot'),
    (2,'Le Combattant', '4 Place des Tapis, 69004 Lyon, France', 'https://www.street-artwork.com/uploads/document/5ce1a3947064a105728305.jpg','wall painting',45.775196, 4.830133,'Rabot');
    
 CREATE TABLE artist
 (id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100)
 );
 
 INSERT INTO artist (id,name)
	VALUES (1,'inconnu'),
    (2,'Kalouf (Blast)');

CREATE TABLE creation
(creation_date DATE,
id_artist INT NOT NULL,
id_artwork INT NOT NULL,
FOREIGN KEY (id_artwork) REFERENCES artwork (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
FOREIGN KEY (id_artist) REFERENCES artist (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

 INSERT INTO creation (creation_date,id_artwork,id_artist)
	VALUES ('2025-01-02', 1, 1),
    ('2022-04-07', 2, 2);
