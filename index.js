exports.storageSub = function storageSub (event, callback) {
  const pubsubMessage = event.data;
  const name = pubsubMessage.data ? Buffer.from(pubsubMessage.data, 'base64').toString() : 'World';
  console.log(name);
  callback();
};
