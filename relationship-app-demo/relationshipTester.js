const models = require('./models');
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;

// // Get workingDays for a given User
User.findByPk(1, {include: ['days']})
.then((user) => {
  console.log(user.get())
})
.catch((err) => console.log("Error while searching user : ", err))

// Get Users for a given WorkingDay
WorkingDay.findByPk(1,  {include: ['employees']})
.then((workingDay) => {
  console.log(workingDay.get())
})
.catch((err) => console.log("Error while searching workingDay : ", err))