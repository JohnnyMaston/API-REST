function mongodb(mongoose) {
  var promise = mongoose.connect('mongodb://localhost:27017/proyecto', {
  useMongoClient: true,
  //other things
});

}
exports.mongodb = mongodb;
