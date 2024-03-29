export default (sequelize, DataTypes) => {
   const Author = sequelize.define('author', {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       firstName: DataTypes.STRING,
       lastName: DataTypes.STRING
     },
     {
       freezeTableName: true,
     }
   );
 
   // Author can have multiple posts
   Author.associate = (models) => {
     Author.hasMany(models.post);
   };
 
   return Author;
 }