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
    (14,"LGSHA");

CREATE TABLE artwork
( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
	address VARCHAR(250) NOT NULL,
    image VARCHAR(255) NOT NULL,
    picture_date date,
    type_of_art VARCHAR(100),
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    picture_credit VARCHAR(100) NOT NULL,
    creation_date DATE,
    id_artist INT NOT NULL,
    FOREIGN KEY (id_artist) REFERENCES artist (id) ON DELETE NO ACTION ON UPDATE NO ACTION
	);
    
    INSERT INTO artwork (id,name,address,image,type_of_art,latitude,longitude,picture_credit,id_artist)
	VALUES  
    (1, "hello again", "Hegenheimermattweg 200, CH-4123 Allschwil", "https://www.street-artwork.com/uploads/document/63382a79384c0355231370.JPG", "tag", 47.562670, 7.556170, "Rabot", 1),
    (2, "Caméléon", "9 Rue de l'Ourcq, 75019 Paris, France", "https://www.street-artwork.com/uploads/document/5c29363f62a1d066701631.jpg", "tag", 48.887093, 2.384707, "Rabot", 3),
    (3, "Venice", "19 Windward Ave, Venice, CA 90291, USA", "https://www.street-artwork.com/uploads/document/64d15546c9f1d072130218.jpeg", "stencil", 33.987222, -118.473333, "Inconnue", 1),
    (4, "Fallait Pas", "3 Rue Aimé Boussange, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a3cf40a67635693180.jpg", "wall painting", 45.775417, 4.834655, "Rabot",1),
    (5, "Champi Vert", "5 Rue de Cuire, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce1a5cbba0c9658199570.jpg", "tag", 45.775818, 4.830469, "Rabot",4),
    (6, "Pieuvre", "1 Montée Coquillat, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd29f8523e9d709252089.jpg", "wall painting", 45.773804, 4.837172, "Rabot",1),
    (7, "Coeur", "31 Quai Fulchiron, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a6f137188802074976.jpg", "wall painting", 45.757435, 4.825813, "Rabot",1),
    (8, "Pieuvre Petite", "3 Rue Mottet de Gérando, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a05408d5d966736206.jpg", "sticker", 45.774246, 4.835729, "Rabot",5),
    (9, "Frog", "169 Exhibition St, Melbourne VIC 3000, Australia", "https://www.street-artwork.com/uploads/document/5c8236ce2bd06511549565.jpg", "tag", -37.811687, 144.970622, "Rabot", 1),
    (10, "Imaginarium", "21 Rue Professeur Grignard, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7c2229c2838730146.jpg", "wall painting", 45.747490, 4.837795, "Rabot",1),
    (11, "Symbiose", "28 Rue Joséphin Soulary, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a69c641db053590726.jpg", "tag", 45.776703, 4.837471, "Rabot",1),
    (12, "Stay wild moon child", "18 Rue de la Monnaie, 69002 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a77fce9ec195173435.jpg", "stencil", 45.761272, 4.831882, "Rabot",6),
    (13, "Gaston Lagaffe", "R. do Ginjal 65, Almada, Portugal", "https://www.street-artwork.com/uploads/document/5c7985e877e67233246491.jpg", "tag", 38.686043, -9.155617, "Rabot", 1),
    (14, "Masque", "2 Rue Philibert Delorme, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a02e2b667988461619.jpg", "tag", 45.773998, 4.836562, "Rabot",7),
    (15, "Tête d'ogre", "76 Avenue Debourg, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce793529afd6178897205.jpg", "tag", 45.731312, 4.831794, "Rabot",8),
    (16, "Reine Verte", "29 Rue Victor Hugo, 69002 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a78dc37f9166457350.jpg", "wall painting", 45.754436, 4.830058, "Rabot",1),
    (17, "Demon Mask", "2 Rue Philibert Delorme, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a020972dd907970415.jpg", "tag", 45.774124, 4.836539, "Rabot",1),
    (18, "Conflit", "27 Rue du Chariot d'Or, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a51324ba3426502685.jpg", "wall painting", 45.777897, 4.836655, "Rabot",1),
    (19, "Pixel heart", "Passy, 75016 Paris, France", "https://www.street-artwork.com/uploads/document/61124b971d59e964944259.jpeg", "wall painting", 48.857783, 2.285532, "Rabot", 2),
    (20, "Baiser Fleuri", "12 Rue Saint-Georges, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a71081ebc206583603.jpg", "wall painting", 45.758804, 4.825511, "Rabot",1),
    (21, "Animaux sur mer", "27 Rue Montesquieu, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7e6453a3914898644.jpg", "wall painting", 45.753139, 4.841915, "Rabot",9),
    (22, "Jardinerie Urbaine", "20 Grande Rue de la Croix-Rousse, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a2a48f070186317811.jpg", "wall painting", 45.777630, 4.832328, "Rabot",1),
    (23, "Jester", "168 Exhibition St, Melbourne VIC 3000, Australia", "https://www.street-artwork.com/uploads/document/5c82374f0284c187237042.jpg", "tag", -37.811682, 144.970595, "Rabot", 1),
    (24, "KA", "27 Rue de Nuits, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a4f21cf57283245732.jpg", "tag", 45.777931, 4.836809, "Rabot",1),
    (25, "Savane Noir", "5 Impasse Viard, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a2924ae99717962005.jpg", "wall painting", 45.780594, 4.830901, "Rabot",1),
    (26, "Spelo Velu", "24 Rue Sergent Blandan Ancienne Voie du Rhin, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd28868945d6572057317.jpg", "tag", 45.768753, 4.829623, "Rabot",1),
    (27, "Bébé animals", "14 Rue Bechevelin, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7db580e6048866465.jpg", "wall painting", 45.752991, 4.842162, "Rabot",9),
    (28, "Carottes folles", "26 Rue du Chariot d'Or, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a4b72b028390583646.jpg", "tag", 45.777588, 4.836117, "Rabot",10),
    (29, "Pretty demon", "44 Rue de Cuire, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a2851691c039949041.jpg", "wall painting", 45.777809, 4.829957, "Rabot",1),
    (30, "Luigi", "1 Place François Bertras, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a6fd5e8a7340944345.jpg", "sticker", 45.757992, 4.825243, "Rabot",1),
    (31, "Migrant child", "Sestiere Dorsoduro, 3687, Campo Margherita, 30123 Venezia VE, Italy", "https://www.street-artwork.com/uploads/document/61309af461850389015853.jpg", "tag", 45.435433, 12.324008, "Rabot", 5),
    (32, "Lost Decay", "38 Rue d'Ivry, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a6425a5b4518954872.jpg", 'tag', 45.777069, 4.836930, 'Rabot',11),
    (33, "Bird & Fish", "27 Rue Montesquieu, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7f19b9fa669293146.jpg", "wall painting", 45.753139, 4.841915, "Rabot",9),
    (34, "Red Socks", "98 Rue Sébastien Gryphe, 69007 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a7cf708c6429003618.jpg", "tag", 45.749512, 4.839819, "Rabot",1),
    (35, "Ain t no fun without gunz", "15 Rue Sergent Blandan Ancienne Voie du Rhin, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd288483c5a4933132862.jpg", "tag", 45.768665, 4.829004, "Rabot",12),
    (36, "Iris", "27 Rue de Nuits, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a4feed26d741026973.jpg", "tag", 45.777973, 4.836814, "Rabot",13),
    (37, "Lasco", "1 Rue d'Austerlitz, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce1a8d7a562e330488609.jpg", "stencil", 45.776104, 4.833247, "Rabot",1),
    (38, "Top Un", "24 Rue Joséphin Soulary, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a65faae71506264898.jpg", "tag", 45.776497, 4.837102, "Rabot",1),
    (39, "Crêperie Beline", "1850 Place de la Paix, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd28887e8146580195686.jpg", "wall painting", 45.767979, 4.831511, "Rabot",1),
    (40, "Rappeur", "27 Rue du Chariot d'Or, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a52103607149190947.jpg", "tag", 45.777897, 4.836655, "Rabot",1),
    (41, "250mL de Distraction", "Gare Saint Paul, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2893ba092c971343941.jpg", "stencil", 45.765862, 4.826594, "Rabot",1),
    (42, "Azteque", "11 Montée Saint-Barthélémy, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2895625dca348103238.jpg", "sticker", 45.764648, 4.826607, "Rabot",1),
    (43, "Nuage & chat", "12 Rue Ferrachat, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a73c17c71975793331.jpg", "wall painting", 45.759079, 4.825798, "Rabot",1),
    (44, "Geisha", "19 Montée des Carmes Déchaussés, 69005 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd288f9828af493344429.jpg", "stencil", 45.765976, 4.825251, "Rabot",14),
    (45, "Alys", "20 Rue Sainte-Hélène, 69002 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a79909d1f800782340.jpg", "tag", 45.754848, 4.829624, "Rabot",1),
    (46, "Talibé", "Godomey Dèkougbé Von de la boulangerie Le Salut Abomey Calavi, Benin", "https://www.street-artwork.com/uploads/document/5fc8b43dbcecd418368692.JPG", "tag", 6.450002, 2.345478, "Rabot", 1),
    (47, "Emmaüs", "Unnamed Road, Benin", "https://www.street-artwork.com/uploads/document/5fc8b5330cf3b749775403.JPG", "tag", 6.495305, 2.238773, "Rabot", 1),
    (48,"Barbanar", "2 Rue Buffon, 75005 Paris, France", "https://www.street-artwork.com/uploads/document/60f0df91aee2f954964572.jpeg", "stencil", 48.842972, 2.364206, "Rabot", 2),
    (49, "Ce matin-là", "109 Rue Oberkampf, 75011 Paris, France", "https://www.street-artwork.com/uploads/document/5c1a8830d42b3219352196.jpg", "stencil", 48.866032, 2.377753, "Rabot", 2),
    (50, "Igor LDT", "71 Rue de la Fontaine au Roi, 75011 Paris, France", "https://www.street-artwork.com/uploads/document/5c251aa4bb73a097404742.jpg", "wall painting", 48.868759, 2.375400, "Rabot", 2),
    (51, "Le chat", "Olympiades, 75013 Paris, France", "https://www.street-artwork.com/uploads/document/5ddad6ba89c81686388601.jpg", "stencil", 48.826954, 2.366737, "Rabot", 3),
    (52, "Le Combattant", "4 Place des Tapis, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5ce1a3947064a105728305.jpg", "wall painting", 45.775196, 4.830133, "Rabot",2),
    (53, "Baiser fraternel socialiste", "Mühlenstraße 76, 10243 Berlin, Germany", "https://www.street-artwork.com/uploads/document/5b92c9ab77037188326372.jpg", "wall painting", 52.503892, 13.441416, "Rabot", 3),
    (54, "CorbuPunk", "Mühlenstraße 76, 10243 Berlin, Germany", "https://www.street-artwork.com/uploads/document/5fc8b3a7a20d8266261174.jpg", "tag", 52.503889, 13.442500, "Rabot", 3),
    (55, "Tales from the tiny giants", "F6PM+XM Berlin, Germany", "https://ik.imagekit.io/streetartwork/artworks-images_prod/115ee413-dc1d-40d5-aadc-7a76942f412f_N4RTkz0zN.jpeg", "wall painting", 52.487000, 13.234000, "Rabot", 2),
    (56, "Il gatto lungo", "1 Via Carlo Maria Martini", "https://www.street-artwork.com/uploads/document/5bc03170c0b78688500651.jpg", "stencil", 45.463755, 9.193523, "Rabot", 2),
    (57, "Rouge", "Via Giovanni Pascoli, 10, 20129 Milano MI, Italy", "https://ik.imagekit.io/streetartwork/artworks-images_prod/a15f387c-77ee-4c2e-85f2-a11acd2c520a_UBhTlhbv9.jpg","stencil", 45.474462, 9.219821, "Rabot", 2),
    (58, "When david turned into goliath", "Angerburger Allee 2, 14055 Berlin, Germany", "https://ik.imagekit.io/streetartwork/artworks-images_prod/96d775e9-eed5-493c-9833-e5d830285256_b470AMLz6.jpeg", "stencil", 52.508000, 13.228000, "Rabot", 2),
    (59, "Santa Rosalia", "Vicolo dello Zucchero, 2, 90134 Palermo PA, Italia", "https://www.street-artwork.com/uploads/document/5d2389a1cf8fc150173468.jpg", "sticker", 38.110050, 13.355560, "Rabot", 1),
    (60, "Russian team", "Via Foggia, 42, 10152 Torino TO, Italie", "https://www.street-artwork.com/uploads/document/5cdd57c1f16a1033716371.jpg", "stencil", 45.078831, 7.697151, "Rabot", 1),
    (61, "Dracula", "R. do Ginjal 65, Almada, Portugal", "https://www.street-artwork.com/uploads/document/5c7985b6d62d3962303457.jpg", "tag", 38.686115, -9.155555, "Rabot", 1),
    (62, "Yoda colorful", "R. do Ginjal 27, 2800 Almada, Portugal", "https://www.street-artwork.com/uploads/document/5c797f1c5a2fc906457874.jpg", "stencil", 38.687546, -9.151505, "Rabot", 1),
    (63, "Animals", "4 Place des Tapis, 69004 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2a1453a835467553291.jpg", "sticker", 45.775158, 4.830232, "Rabot",1),
    (64, "Cobra snake", "R. do Ginjal 23, 2800 Almada, Portugal", "https://www.street-artwork.com/uploads/document/5c7945ac33c19219227144.jpg", "tag", 38.687748, -9.149835, "Rabot", 1),
    (65, "Ghost", "R. do Ginjal 27, 2800 Almada, Portugal", "https://www.street-artwork.com/uploads/document/5c798204a2b50306727219.jpg", "tag",38.687504, -9.151780, "Rabot", 1),
    (66, "Make a point", "Strada Dionisie Lupu 61, București 030167, Roumanie", "https://www.street-artwork.com/uploads/document/5c6d8bbb608c4469737942.jpg", "stencil", 44.444722, 26.100833, "Rabot", 1),
    (67, "Geisha", "Calle Ambrosio Lorenzo Lopez, 33, 41809 Albaida del Aljarafe, Sevilla, Spain", "https://www.street-artwork.com/uploads/document/5fc8b7e48e7ed574674683.jpg", "tag", 37.425494, -6.165359, "Rabot", 1),
    (68, "Mongolfiera su parete", "Carrer Comte d'Urgell, 30, 08011 Barcelona, Spain", "https://www.street-artwork.com/uploads/document/P1020028.jpg", "wall painting", 41.380340, 2.161260, "Rabot", 2),
    (69, "Rafiki", "Calle Calatrava, 40, 28005 Madrid, Spania", "https://www.street-artwork.com/uploads/document/5c5cdca40e622718698811.jpeg", "tag", 40.410269, -3.713653, "Rabot", 1),
    (70, "Nous sommes un exemple de vie en commun", "C. de Sta. Isabel, 12, 28012 Madrid, Spain", "https://ik.imagekit.io/streetartwork/artworks-images_prod/f4617d43-6794-47fc-a415-c002cb7c558f_HluQlYoeD.jpg", "sticker", 40.411861, -3.699457, "Rabot", 1),
    (71, "Regards", "39 Rue Paul Chenavard, 69001 Lyon, France", "https://www.street-artwork.com/uploads/document/5cd2897d5e44d570844651.jpg", "wall painting", 45.765236, 4.833110, "Rabot",1),
    (72, "Reasons to be cheerful", "Barcroft, Willenhall WV13 1LZ, UK", "https://ik.imagekit.io/streetartwork/artworks-images_prod/a6aaf8a9-ece8-4b93-ab89-480baccfe963_S2T3lhhAw.jpg", "tag", 52.589635, -2.045117, "Rabot", 1),
    (73, "Not mars, Patagonia", "76 Hanbury St, London E1 5JL, UK", "https://ik.imagekit.io/streetartwork/artworks-images_prod/4065a8f6-927d-4cd8-afa5-ce54c07dc747_ucWg-HLGB.jpg", "sticker", 51.520245, -0.070291, "Rabot", 1),
    (74, "Abeille Rouge", "12 Rue Joséphin Soulary, 69004 Lyon, France", 'https://www.street-artwork.com/uploads/document/5cd2a6e68b7d9498497585.jpg', "wall painting", 45.776356, 4.835958, "Rabot",3),
    (75, "Xteca", "ul. Hristo Kovachev 11, 1527 Sofia Center, Sofia, Bulgaria", "https://www.street-artwork.com/uploads/document/60833f9063567666025798.jpeg", "tag", 42.701000, 23.336000, "Rabot", 1),
    (76, "Xteca", "Shipka Street 22, 1504 Sofia Center, Sofia, Bulgaria", "https://www.street-artwork.com/uploads/document/60ecaa15994a4025620880.jpeg", "tag", 42.693000,  23.339000, "Rabot", 1),
    (77, "Super Vision", "Hepokuja 4, 01200 Vantaa, Suomi", "https://www.street-artwork.com/uploads/document/5de29bc5c0382705113195.jpg", "stencil", 60.274358, 25.106831, "Rabot",1),
    (78, "MAYÉ", "7 Rue Robert, 30000 Nîmes, France", "https://www.street-artwork.com/uploads/document/63ed0ea2e1591868888534.jpg", "wall painting", 43.842000, 4.359000, "Rabot", 1),
    (79, "fresque la bataille du 10 avril 1814", "212 Av. Raymond Naves, 31500 Toulouse, France", "https://www.street-artwork.com/uploads/document/6717df8dc3308887714101.jpg", "stencil", 43.594774, 1.486609, "Rabot", 1),
    (80, "Frida Kahlo", "Av. Eje 2 Sur (Avenida Yucatán) 66, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX, Mexico", "https://ik.imagekit.io/streetartwork/artworks-images_prod/ce874801-66a5-43cb-bb18-8c129cbd253c_ktmwtY7jR.jpg", "stencil", 19.415000, -99.164000, "Rabot", 1),
    (81, "Aztec warrior", "Eje 1 Nte. 256, Buenavista, 06350 Ciudad de México, CDMX, Mexico", "https://www.street-artwork.com/uploads/document/5c77b6ca11fbb784666062.jpg", "wall painting", 19.445701, -99.150450, "Rabot", 1),
    (82, "The Secret of the Third planet", "Kolkhoznaya sq. 7, 141060 Korolyov, Moscow region, Russia", "https://www.street-artwork.com/uploads/document/60f6d3ee14a32915293417.jpg", "tag", 55.934344, 37.866544, "Rabot", 1),
    (83, "Love=Mc2", "162 E 48th St, New York, NY 10017, USA", "https://ik.imagekit.io/streetartwork/artworks-images_prod/ca22f95c-c160-4202-a0f4-fd9773040c92_6YZv0uRYP.jpeg", "stencil", 40.754612, -73.971929, "Rabot", 1),
    (84, "Saint Aerosol", "Tsiolkovskogo drive 5, 141078 Korolyov, Moscow region, Russia", "https://www.street-artwork.com/uploads/document/60d2d0dce4ad4924110482.jpg", "stencil", 55.922464, 37.831397, "Shon KGB", 1),
    (85, "Saint Aerosol", "Tsiolkovskogo drive 5, 141078 Korolyov, Moscow region, Russia", "https://www.street-artwork.com/uploads/document/60d2d0eff14c7079329696.jpg", "stencil", 55.922394, 37.831239, "Shon KGB", 1),
    (86, "Le vieille homme", "G66H+MHX, Av. Oqba Ibn Nafiaa, Essaouira, Morocco", "https://www.street-artwork.com/uploads/document/64d62a6a5c4e2005640086.jpeg", "stencil", 31.511734, -9.770969, "Inconnu", 1),
    (87, "Le regard", "145 Rue Victor le Vigoureux, Saint-Pierre, Réunion", "https://www.street-artwork.com/uploads/document/5b981ec06a14c732881019.jpg", "stencil", -21.331697, 55.477436, "Inconnu", 1), 
    (88, "Bébé", "Allee De La Zone, Réunion", "https://www.street-artwork.com/uploads/document/5b944691e427a998378043.jpg", "stencil", -21.320917, 55.474869, "Rabot", 1),
    (89, "Saute mouton", "Allee De La Zone, Réunion", "https://www.street-artwork.com/uploads/document/5b9446b8f0798374367613.jpg", "wall painting", -21.320917, 55.474869, "Rabot", 1),
    (90, "Le serpent bleu", "4 Krasnaya Presnya st., 123242 Moscow, Russia", "https://www.street-artwork.com/uploads/document/5fd905ab1093a829675652.JPG", "stencil", 55.761091, 37.576375, "Rabot", 1),
    (91, "Le visage vert", "Art-cluster Gamma, Malaya Semenovskaya st 5-1, 107024 Moscow, Russia", "https://www.street-artwork.com/uploads/document/609c1257687af599333019.jpg", "tag", 55.784526, 37.707057, "Onedali", 2),
    (92, "Le dragon bleu", "308 S Alameda St, Los Angeles, CA 90013, USA", "https://www.street-artwork.com/uploads/document/64ec7c2c9c8a9574965216.jpeg", "stencil", 34.044722, -118.237778, "Inconnue", 1),
    (93, "Puppet Mistress", "Komitetskaya st. 2, 141071 Korolyov, Moscow region, Russia", "https://www.street-artwork.com/uploads/document/60d985f623834002810595.jpg", "sticker", 55.928428, 37.824519, "Shon KGB", 1),
    (94, "Mona", "2145 N Miami Ave, Miami, FL 33127, USA", "https://www.street-artwork.com/uploads/document/5e8e9e94bd3d1728881789.jpeg", "wall painting", 25.797678, -80.194872, "Inconnue", 1),
    (95, "Shut", "452 NW 28th St, Miami, FL 33127, USA", "https://www.street-artwork.com/uploads/document/5eadc5ce68b10786349610.jpeg", "wall painting", 25.802719, -80.202544, "Inconnue", 1),
    (96, "SuperMan", "1901 NW Miami Ct, Miami, FL 33136, USA", "https://www.street-artwork.com/uploads/document/5e8e9ee805f84743072207.jpeg", "stencil", 25.794369, -80.195736, "Inconnue", 1),
    (97, "Rock and Roll", "1005 J St, San Diego, CA 92101, USA", "https://www.street-artwork.com/uploads/document/5e8e9fb859e41793085551.jpeg", "sticker", 32.709372, -117.155442, "Inconnue", 1),
    (98, "KoLiBrI", "Solhauggata 13, 0565 Oslo, Norge", "https://www.street-artwork.com/uploads/document/5c5ce44e22431934388814.jpeg", "stencil", 59.924911, 10.771303, "Inconnue", 1),
    (99, "UnityIsPower", "Hausmanns gate 42, 0182 Oslo, Norge", "https://www.street-artwork.com/uploads/document/5c5cdb2d280d2627035049.jpeg", "sticker", 59.919403, 10.751578, "Inconnue", 1),
    (100, "Maison fleurie", "1/871(A), KB Jacob Rd, Fort Kochi, Kochi, Kerala 682001, India", "https://www.street-artwork.com/uploads/document/5c60fc4feb6cb316702502.jpg", "stencil", 9.962593, 76.241937, "Inconnue", 1),
    (101, "Les pépites", "Alleyway of St. 240 1/2, No. 82 E0 St 244, Phnom Phen City,, Phnom Penh, Cambodia", "https://www.street-artwork.com/uploads/document/5fc8b7429676d397501737.JPG", "wall painting", 11.560285, 104.930269, "Jinks Kunst", 2);
    








CREATE TABLE user
(id INT AUTO_INCREMENT PRIMARY KEY,
pseudo VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL,
hashed_password varchar(255) NOT NULL,
inscription_date DATE,
profile_picture VARCHAR(255) DEFAULT 'https://avatar.iran.liara.run/public'
);

INSERT INTO user (id,pseudo,email,hashed_password,inscription_date,profile_picture)
VALUES (1,"johnDoe","johndoe@example.com","$argon2id$v=19$m=19456,t=2,p=1$nz6t40CzCcijUhj3Ntpz9A$4DW+9sqLdKvj27E3JYbImIIfZAadyDGXHFiwpBHli4s","2025-01-01", "https://avatar.iran.liara.run/public"),
(2,"Rabot","rabot@example.com","$argon2id$v=19$m=19456,t=2,p=1$nz6t40CzCcijUhj3Ntpz9A$4DW+9sqLdKvj27E3JYbImIIfZAadyDGXHFiwpBHli4s","2025-01-01", null);

    