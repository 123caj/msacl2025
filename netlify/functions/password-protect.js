exports.handler = async (event) => {
  // 1. Get the password the user submitted from the request body
  const { password } = JSON.parse(event.body);

  // 2. Get the correct password and secret link from secure environment variables
  const CORRECT_PASSWORD = process.env.SITE_PASSWORD;
  const DRIVE_LINK = process.env.DRIVE_LINK;

  // 3. Check if the submitted password is correct
  if (password === CORRECT_PASSWORD) {
    // 4. If correct, return a success code and the secret URL
    return {
      statusCode: 200,
      body: JSON.stringify({ url: DRIVE_LINK }),
    };
  } else {
    // 5. If incorrect, return an error code and a message
    return {
      statusCode: 401, // 401 means "Unauthorized"
      body: JSON.stringify({ message: 'Incorrect password. Please try again.' }),
    };
  }
};
