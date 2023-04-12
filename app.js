import express from "express"; 
import requestIp from "request-ip";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express(),
  PORT = process.env.PORT || 80; // api server port

  app.set('trust proxy', true);
  app.use(express.static(__dirname + "/public"));
  app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", `http://localhost:${PORT}`); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      if (req.method == "OPTIONS") {
        console.log(res)
        return res.sendStatus(200);

      }
      next();
    });

app.disable("x-powered-by");
app.set("x-powered-by", false);
app.use(express.json());
app.use(requestIp.mw());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  res.status(400).json({
    error: "Invalid request....",
  });
});
app.get("/api", async (req, res) => {
  console.log("API get json");
  res.status(200).json({result:[
    {
      gender: "male",
      name: {
          title: "Mr",
          first: "Ethan",
          last: "Ter Heide"
      },
      location: {
          street: {
              number: 8805,
              name: "Beukelsstraat"
          },
          city: "Numansdorp",
          state: "Noord-Brabant",
          country: "Netherlands",
          postcode: "8318 WX",
          coordinates: {
              latitude: "31.3807",
              longitude: "-166.9320"
          }
      }
    },
    {
      gender: "female",
      name: {
          title: "Ms",
          first: "Bas",
          last: "auf Uppla"
      },
      location: {
          street: {
              number: 8805,
              name: "Beukelsstraat"
          },
          city: "Numansdorp",
          state: "Noord-Brabant",
          country: "Netherlands",
          postcode: "8318 WX",
          coordinates: {
              latitude: "31.3807",
              longitude: "-166.9320"
          }
      }
    }

]});
});

app.get("/api/error", async (req, res) => {
  res.status(400).json({
    error: "ALARM!ERROR!",
  });
});

app.get("*", async (req, res) => {
  res.status(400).json({
    error: "Invalid request.",
  });
});

 
app.listen(PORT, function(){
    console.log("Server started");

});
