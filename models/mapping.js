module.exports = (sequelize, DataTypes) => {
    const Mapping = sequelize.define("Mapping", {
      patientId: { type: DataTypes.INTEGER, allowNull: false },
      doctorId: { type: DataTypes.INTEGER, allowNull: false },
    });
    return Mapping;
  };
  