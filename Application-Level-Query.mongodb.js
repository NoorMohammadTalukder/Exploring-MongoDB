use("CraftShop");

db.employees.insertOne({
    name:"ABC",
    designation:"ABC",
    salary:1000,
    city:"Dhaka"
})

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

db.employees.find();

db.employees.findOne({
    name:"ABC"
})

db.employees.find(
    {},
    {id:0,salary:0}
)

db.employees.find(
    {
        salary:{$eq:1000}
    },

)
db.employees.find(
    {
        salary:{$ne:1000}
    },

)
db.employees.find(
    {
        salary:{$gt:1000}
    },

)
db.employees.find(
    {
        salary:{$gte:1000}
    },

)
db.employees.find(
    {
        salary:{$in:[1000,100]}
    },

)
db.employees.find(
    {
        salary:{$nin:[1000,100]}
    },

)

db.spends.find({
  city: { $exists: true },
});

db.employees.find({
  salary: { $type: 2 },
});

db.spend.find({
    $expr:{
       $gt:["$spend","$budget"]
    }
})


db.spend.find({
   budget:{$mod:[3,0]}
})


db.spend.find({
  $where:"this.$budget == $this.$spend"
})

db.employees.find().sort({
    salary:1
})

db.employees.find().count("name")

db.employees.find().limit(2)

db.employees.distinct("name")

db.employees.deleteOne({
    "_id":ObjectId('647b976a4b5313aa610db181')
})

db.employees.deleteMany({
    name:{$eq:"ABCD"}
})

