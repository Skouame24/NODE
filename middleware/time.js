
module.exports.websiteAvailability = (req, res, next) => {
//   const date = new Date("November 06, 2022 14:00:00");
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  console.log(day);
  if (day >= 1 && day <= 6 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.render("pages/website-availability.ejs");
  }
};
