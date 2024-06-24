
module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('File', {
        id_file: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        mois: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        annee: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        id_employee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_post: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, {
      tableName: 'files',
      timestamps: false,
    });
  
    return File;
  };
  