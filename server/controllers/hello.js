exports.getGreeting = (req, res) => {
  console.log(process.env.COOKIE_KEY);
  res.send('Hello World');
};
