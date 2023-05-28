use("CraftShop");
// --Displays method descriptions
db.help();

//--Displays method descriptions
db.hostInfo()

//--Returns the name of the current database
db.getName()

//--The current database connection.
db.getMongo()

//--Reports the current in-progress operations
db.currentOp()

//--drop current db
db.dropDatabase()

//--Returns collection information for all collections in the current database.
db.getCollectionInfos()

//--Lists all collections in the current database.
db.getCollectionNames()

//--Checks and returns the status of the last operation
db.getLastError()

//--Returns the status document for the last operation.
db.getLastErrorObj()

//--Returns a document object containing a status report for the replica set.
db.isMaster()

//--Returns statistics for a replica set.
db.getReplicationInfo()

//--Displays a list of common database commands.
db.listCommands()

//-- Terminates an authenticated session.
db.logout()

//-- Display statistics for each collection
db.printCollectionStats()

//--Returns a mongod documentation record containing the compile parameters for the instance.
db.serverBuildInfo()

//-- Returns a document that provides an overview of the state of the database process.
db.serverStatus()

//--Cleanly and safely stops the current mongod or mongos process.
db.shutdownServer()

//-- Returns a document record containing a report on the current database state.
db.stats()

//-- Returns the version number of the mongod instance:
db.version()

//--Returns a mongod documentation record containing the compile parameters for the instance.
db.createCollection('demo')

//--It completely removes a collection from the database and does not leave any indexes associated with the dropped collections
db.demo.drop()




