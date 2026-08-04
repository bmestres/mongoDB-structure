# MongoDB structure

### Description: <br>

The project contains a series of simple non-relational databases built using MongoDB. Each database has its schema diagram built with Moon Modeler as well as the .js scripts.


**Technologies used:**<br>
- Database: MongoDB
- Modeling: Moon Modeler
- Database GUI: MongoDB Compass
- Version control: Git & GitHub


### Installation and Execution:<br>
https://github.com/bmestres/mongoDB-structure.git

### How to run:<br>

1. **Start the database:**
   ```bash
   docker-compose up -d

2. **Import/Run the files**<br>Open MongoDB Compass, connect to your local host (mongodb://localhost:27017), open the >_ MongoDB Shell at the bottom of the screen, type use <database_name> to initialize it, and execute the scripts in this order:

### Project structure:

**1. GlassesOpticDB:**<br>
Database for an optical store, with inventory and clients databse.

**2. FoodDeliveryServiceDB:**<br>
Database for a food delivery business managing orders, customers, delivery employees, and a scalable product catalog whith pizzas, burgers, drinks.


### Repo overview:

```text
.
├── docker-compose.yml
├── FoodDeliveryServiceDB
│   ├── food_delivery_service_diagram.png
│   ├── food_delivery_service_schema.js
│   └── food_delivery_service.dmm
├── GlassOpticsDB
│   ├── glass_optic_diagram.png
│   ├── glass_optic_schema.js
│   └── glass_optic.dmm
└── README.md
```

