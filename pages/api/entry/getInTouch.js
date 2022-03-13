import sendMail from "./mail";

export default  async (req, res) => {
  const {username, email, body} = req.body ;
  // const text = `Hi ${cloneReqBody.driverName}, you have a ride request from ${firstName} ${lastName} please check your app for more details`;
  // const subject = "Trip Request";
  // console.log(text);
  
  try {

    sendMail(username, email, body, (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Internal Error' });
      } else {
        res.status(200).json({ message: 'Email sent successfully', success: true });
      }
    });
  } catch (err) {
    return res.status(500).json({
      error: err.stack,
      success: false,
    });
  }
};
