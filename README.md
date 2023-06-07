# CraftShop Database 

This repo is for practicing simple mongoDB query for CraftShop database. It provides an overview of the commands used to interact with the database and perform various operations.

## Setup

To use the CraftShop database, start by executing the following command:

```javascript
use("CraftShop");
```

## Database Operations

The following commands can be used for various database operations:

```javascript
db.help(); // Displays method descriptions
db.hostInfo(); // Displays method descriptions
db.getName(); // Returns the name of the current database
db.getMongo(); // The current database connection
db.currentOp(); // Reports the current in-progress operations
db.dropDatabase(); // Drops the current database
db.getCollectionInfos(); // Returns collection information for all collections in the current database
db.getCollectionNames(); // Lists all collections in the current database
db.getLastError(); // Checks and returns the status of the last operation
db.getLastErrorObj(); // Returns the status document for the last operation
db.isMaster(); // Returns a document object containing a status report for the replica set
db.getReplicationInfo(); // Returns statistics for a replica set
db.listCommands(); // Displays a list of common database commands
db.logout(); // Terminates an authenticated session
db.printCollectionStats(); // Display statistics for each collection
db.serverBuildInfo(); // Returns a mongod documentation record containing the compile parameters for the instance
db.serverStatus(); // Returns a document that provides an overview of the state of the database process
db.shutdownServer(); // Cleanly and safely stops the current mongod or mongos process
db.stats(); // Returns a document record containing a report on the current database state
db.version(); // Returns the version number of the mongod instance
db.createCollection('demo'); // Creates a new collection named 'demo'
db.demo.drop(); // Drops the 'demo' collection from the database
```

## Inserting Data

To insert a single document into the "employees" collection, use the `insertOne()` command:

```javascript
db.employees.insertOne({
    name: "ABC",
    designation: "ABC",
    salary: 1000,
    city: "Dhaka"
});
```

To insert multiple documents into the "employees" collection, use the `insertMany()` command:

```javascript
db.employees.insertMany([
  {
    name: "ABC",
    designation: "ABC",
    salary: 1000,
    city: "Dhaka",
  },
  {
    name: "ABCD",
    designation: "ABCD",
    salary: 100,
    city: "Dhaka",
  },
  {
    name: "ABCDE",
    designation: "ABCDE",
    salary: 5000,
    city: "Dhaka",
  },
]);
```

## Querying Data

To retrieve all documents from the "employees" collection, use the `find()` command:

```javascript
db.employees.find();
```

To find a document that matches a specific condition, use the `findOne()` command:

```javascript
db.employees.findOne({
    name: "ABC"
});
```

To specify the fields to include or exclude in the query results, use the projection parameter:

```javascript
db.employees.find(
    {},
    { id: 0, salary: 0 }
);
```

To perform queries with various conditions, use the following commands:

```javascript
db.employees.find({ salary: { $eq: 1000 } });
db.employees.find({ salary: { $ne: 1000 } });
db.employees.find({ salary: { $gt: 1000 } });
db.employees.find({ salary: { $gte: 1000 } });
db.employees.find({ salary: { $in: [1000, 100] } });
db.employees.find({ salary: { $nin: [1000, 100] } });
db.spends.find({ city: { $exists: true } });
db.employees.find({ salary: { $type: 2 } });
db.spend.find({ $expr: { $gt: ["$spend", "$budget"] } });
db.spend.find({ budget: { $mod: [3, 0] } });
db.spend.find({ $where: "this.$budget == $this.$spend" });
```

## Sorting, Limiting, and Counting

To sort the documents in the "employees" collection based on a field, use the `sort()` command:

```javascript
db.employees.find().sort({
    salary: 1
});
```

To limit the number of documents returned by a query, use the `limit()` command:

```javascript
db.employees.find().limit(2);
```

To count the number of documents in a collection, use the `count()` command:

```javascript
db.employees.find().count("name");
```

## Other Operations

To retrieve distinct values for a field in the "employees" collection, use the `distinct()` command:

```javascript
db.employees.distinct("name");
```

To delete a single document from the "employees" collection, use the `deleteOne()` command:

```javascript
db.employees.deleteOne({
    "_id": ObjectId('647b976a4b531

3aa610db181')
});
```

To delete multiple documents from the "employees" collection, use the `deleteMany()` command:

```javascript
db.employees.deleteMany({
    name: { $eq: "ABCD" }
});
```


Please note that this readme file provides an overview of the commands used in the CraftShop database. For detailed information on MongoDB commands, refer to the MongoDB documentation.
