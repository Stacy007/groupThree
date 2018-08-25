module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    text: DataTypes.STRING,
    note: DataTypes.STRING,
    author: DataTypes.STRING
  });
  return Item;
};
