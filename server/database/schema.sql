CREATE TABLE artwork
( id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
	  address VARCHAR(250) NOT NULL,
      image VARCHAR(255) NOT NULL,
      picture_date date,
      type_of_art VARCHAR(100),
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL,
      picture_credit VARCHAR(100) NOT NULL
	);
    
    INSERT INTO artwork (id,name,address,image,type_of_art,latitude,longitude,picture_credit)
	VALUES  (1, "Regards", "39 Rue Paul Chenavard, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2897d5e44d570844651.jpg", "tag", 45.765236, 4.833110, "Rabot"),
    (2, "Le Combattant", "4 Place des Tapis, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce1a3947064a105728305.jpg", "wall painting", 45.775196, 4.830133, "Rabot"),
    (3, "Abeille Rouge", "12 Rue Joséphin Soulary, 69004 Lyon, France", 'https://www.street-artwork.com/uploads/document/5cd2a6e68b7d9498497585.jpg', "wall painting", 45.776356, 4.835958, "Rabot"),
    (4, "Symbiose", "28 Rue Joséphin Soulary, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a69c641db053590726.jpg", "wall painting", 45.776703, 4.837471, "Rabot"),
    (5, "Champi Vert", "5 Rue de Cuire, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce1a5cbba0c9658199570.jpg", "wall painting", 45.775818, 4.830469, "Rabot"),
    (6, "Pieuvre", "1 Montée Coquillat, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd29f8523e9d709252089.jpg", "wall painting", 45.773804, 4.837172, "Rabot"),
    (7, "Animals", "4 Place des Tapis, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a1453a835467553291.jpg", "wall painting", 45.775158, 4.830232, "Rabot"),
    (8, "Coeur", "31 Quai Fulchiron, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a6f137188802074976.jpg", "wall painting", 45.757435, 4.825813, "Rabot"),
    (9, "Pieuvre Petite", "3 Rue Mottet de Gérando, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a05408d5d966736206.jpg", "wall painting", 45.774246, 4.835729, "Rabot"),
    (10, "Imaginarium", "21 Rue Professeur Grignard, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7c2229c2838730146.jpg", "wall painting", 45.747490, 4.837795, "Rabot"),
    (11, "Baiser Fleuri", "12 Rue Saint-Georges, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a71081ebc206583603.jpg", "wall painting", 45.758804, 4.825511, "Rabot"),
    (12, "Stay wild moon child", "18 Rue de la Monnaie, 69002 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a77fce9ec195173435.jpg", "wall painting", 45.761272, 4.831882, "Rabot"),
    (13, "Masque", "2 Rue Philibert Delorme, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a02e2b667988461619.jpg", "wall painting", 45.773998, 4.836562, "Rabot"),
    (14, "Tête d'ogre", "76 Avenue Debourg, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce793529afd6178897205.jpg", "wall painting", 45.731312, 4.831794, "Rabot"),
    (15, "Reine Verte", "29 Rue Victor Hugo, 69002 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a78dc37f9166457350.jpg", "wall painting", 45.754436, 4.830058, "Rabot"),
    (16, "Fallait Pas", "3 Rue Aimé Boussange, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a3cf40a67635693180.jpg", "wall painting", 45.775417, 4.834655, "Rabot"),
    (17, "Demon Mask", "2 Rue Philibert Delorme, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a020972dd907970415.jpg", "wall painting", 45.774124, 4.836539, "Rabot"),
    (18, "Conflit", "27 Rue du Chariot d'Or, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a51324ba3426502685.jpg", "wall painting", 45.777897, 4.836655, "Rabot"),
    (19, "Animaux sur mer", "27 Rue Montesquieu, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7e6453a3914898644.jpg", "wall painting", 45.753139, 4.841915, "Rabot"),
    (20, "Jardinerie Urbaine", "20 Grande Rue de la Croix-Rousse, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a2a48f070186317811.jpg", "wall painting", 45.777630, 4.832328, "Rabot"),
    (21, "Savane Noir", "5 Impasse Viard, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a2924ae99717962005.jpg", "wall painting", 45.780594, 4.830901, "Rabot"),
    (22, "Spelo Velu", "24 Rue Sergent Blandan Ancienne Voie du Rhin, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd28868945d6572057317.jpg", "wall painting", 45.768753, 4.829623, "Rabot"),
    (23, "Bébé animals", "14 Rue Bechevelin, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7db580e6048866465.jpg", "wall painting", 45.752991, 4.842162, "Rabot"),
    (24, "Carottes folles", "26 Rue du Chariot d'Or, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a4b72b028390583646.jpg", "wall painting", 45.777588, 4.836117, "Rabot"),
    (25, "Pretty demon", "44 Rue de Cuire, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a2851691c039949041.jpg", "wall painting", 45.777809, 4.829957, "Rabot"),
    (26, "Luigi", "1 Place François Bertras, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a6fd5e8a7340944345.jpg", "wall painting", 45.757992, 4.825243, "Rabot"),
    (27, "Lost Decay", "38 Rue d'Ivry, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a6425a5b4518954872.jpg", 'wall painting', 45.777069, 4.836930, 'Rabot'),
    (28, "Rappeur", "27 Rue du Chariot d'Or, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a52103607149190947.jpg", "wall painting", 45.777897, 4.836655, "Rabot"),
    (29, "KA", "27 Rue de Nuits, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a4f21cf57283245732.jpg", "wall painting", 45.777931, 4.836809, "Rabot"),
    (30, "Bird & Fish", "27 Rue Montesquieu, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7f19b9fa669293146.jpg", "wall painting", 45.753139, 4.841915, "Rabot"),
    (31, "Red Socks", "98 Rue Sébastien Gryphe, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7cf708c6429003618.jpg", "wall painting", 45.749512, 4.839819, "Rabot"),
    (32, "Ain t no fun without gunz", "15 Rue Sergent Blandan Ancienne Voie du Rhin, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd288483c5a4933132862.jpg", "wall painting", 45.768665, 4.829004, "Rabot"),
    (33, "Iris", "27 Rue de Nuits, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a4feed26d741026973.jpg", "wall painting", 45.777973, 4.836814, "Rabot"),
    (34, "Laslo", "1 Rue d'Austerlitz, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce1a8d7a562e330488609.jpg", "wall painting", 45.776104, 4.833247, "Rabot"),
    (35, "Top Un", "24 Rue Joséphin Soulary, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a65faae71506264898.jpg", "wall painting", 45.776497, 4.837102, "Rabot"),
    (36, "Crêperie Beline", "1850 Place de la Paix, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd28887e8146580195686.jpg", "wall painting", 45.767979, 4.831511, "Rabot"),
    (37, "250mL de Distraction", "Gare Saint Paul, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2893ba092c971343941.jpg", "wall painting", 45.765862, 4.826594, "Rabot"),
    (38, "Azteque", "11 Montée Saint-Barthélémy, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2895625dca348103238.jpg", "wall painting", 45.764648, 4.826607, "Rabot"),
    (39, "Nuage & chat", "12 Rue Ferrachat, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a73c17c71975793331.jpg", "wall painting", 45.759079, 4.825798, "Rabot"),
    (40, "Geisha", "19 Montée des Carmes Déchaussés, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd288f9828af493344429.jpg", "wall painting", 45.765976, 4.825251, "Rabot"),
    (41, "Alys", "20 Rue Sainte-Hélène, 69002 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a79909d1f800782340.jpg", "wall painting", 45.754848, 4.829624, "Rabot");

 CREATE TABLE artist
 (id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) DEFAULT 'inconnu'
 );
 
 INSERT INTO artist (id,name)
	VALUES 
    (1, null),
    (2,"Kalouf (Blast)"),
    (3,"Soly"),
    (4,"C4pie"),
    (5,"Gzup Oré"),
    (6,"PunkMeTender"),
    (7,"Max CHN"),
    (8,"Swing WBC"),
    (9,"La Coulure"),
    (10,"Nalaz"),
    (11,"Systm:D"),
    (12,"Neerus"),
    (13,"Soren Monsi"),
    (14,"LGSHA"),

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

CREATE TABLE user
(id INT AUTO_INCREMENT PRIMARY KEY,
pseudo VARCHAR(100) NOT NULL,
mail VARCHAR(250) NOT NULL,
password VARCHAR(100) NOT NULL,
inscription_date DATE);

INSERT INTO user(id,pseudo,mail,password,inscription_date)
VALUES (1,"johnDoe","johndoe@example.com","jesuisunmotdepasse","2025-01-01"),
(2,"Rabot","rabot@example.com","jesuisunmotdepasse","2025-01-01");

    