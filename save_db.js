import pg from 'pg';
import axios from 'axios';

const config = {
  host: 'localhost',
  user: 'Superuser',     
  password: '2001',
  database: 'test_db',
  port: 5432
};

const client = new pg.Client(config);

client.connect(err => {
  if (err) throw err;
  else {
    axios_json();
  }
});
function axios_json(){
  axios.get("http://localhost:3001/api")
  .then(response => {
    save_json(response.data.result)
  })
}
function save_json(json){
  for (const  n in json){
    var gender=json[n].gender
    var title_name=json[n].name.title
    var first_name=json[n].name.first
    var last_name=json[n].name.last
    var street_number=json[n].location.street.number
    var street_name=json[n].location.street.name
    var city=json[n].location.city
    var state=json[n].location.state
    var country=json[n].location.country
    var postcode=json[n].location.postcode
    var latitude=json[n].location.coordinates.latitude
    var longitude=json[n].location.coordinates.longitude
    const newPerson=client.query(`INSERT INTO person (gender,title_name,first_name,last_name,street_number,street_name,city,state,country,postcode,latitude,longitude) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *`,[gender,title_name,first_name,last_name,street_number,street_name,city,state,country,postcode,latitude,longitude])
    console.log(newPerson)
  }
}
