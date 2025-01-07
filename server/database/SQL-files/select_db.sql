SELECT * from artist;

SELECT * from artwork;

SELECT aw.name, ar.name, c.creation_date, aw.address from artwork as aw
JOIN creation as c ON aw.id=c.id_artwork
JOIN artist as ar ON ar.id=c.id_artist;