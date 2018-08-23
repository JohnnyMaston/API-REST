function mongodb(mongoose) {
  var promise = mongoose.connect('mongodb://localhost:27017/testdb', {
  useMongoClient: true,
  //other things
});

}
exports.mongodb = mongodb;
