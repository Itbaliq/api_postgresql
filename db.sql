CREATE TABLE IF NOT EXISTS "person" (
	"id"	serial primary key,
	"gender"	TEXT NOT NULL,
	"title_name"	TEXT NOT NULL,
	"first_name"	TEXT NOT NULL,
	"last_name"	TEXT NOT NULL,
	"street_number"	TEXT NOT NULL,
	"street_name"	TEXT NOT NULL,
	"city"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"country"	TEXT NOT NULL,
	"postcode"	TEXT NOT NULL,
	"latitude"	TEXT NOT NULL,
	"longitude"	TEXT NOT NULL
);