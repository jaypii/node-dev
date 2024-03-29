export default (sequelize, DataTypes) => {
   const Post = sequelize.define('post', {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       title: DataTypes.STRING,
       content: {
         type: DataTypes.TEXT,
         allowNull: false
       },
     },
     {
       freezeTableName: true,
     }
   );
 
   // Post belongs to one author
   Post.associate = (models) => {
     Post.belongsTo(models.author);
   };
 
   return Post;
 }