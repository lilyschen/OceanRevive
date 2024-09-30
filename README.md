# OceanRevive

_by Joanne Chang, Lily Chen, and Rhoda Lam_

Built during nwHacks, a 24-hour hackathon: https://devpost.com/software/ocean-revive

# How to Run

You need two terminals to run this

To run the server

```
cd server
node app.js
```

To run the client

```
cd client
npm start
```

“OceanRevive” is a website that allows people to submit a picture of a messy or dirty beach and pin it on a map. Other users can then volunteer to clean up the beach.

Imagine you want to enjoy your free day on a beach, but you noticed needles and broken glass on the beach. You don’t have the appropriate tools to clean these up (such as a sharps disposal container). All you have to do is open our website on your phone, take a photo of the beach, write a description (such as “needles and broken glasses”), and submit. Your location will be pinned on the map on our website. Volunteers will be able to click on the pin to view the photo and your description and claim the pin. Claiming the pin makes the pin disappear on the map. If the volunteers don’t upload a new photo of the clean beach within 24-48 hours, the pin will reappear for other volunteers to claim. If the volunteers upload a new photo of the clean beach, the pin will be deleted from the map completely.

In the future we wish to:
Make it into an mobile App
Use AI to automatically detect and identify garbages in the photo taken by the users (such as needles, biohazards, and recyclables) so that users don’t need to manually enter a description of the garbage
Log in capabilities for users
Allow users to earn badges or points and share on social media platform
Link to discord chats for the purpose of gathering volunteers
Allow companies or schools to organize volunteer groups (with their employees or students)

To run the current application:
Make sure you have Node.js installed on your computer
Clone the github repo
Type “npm install” in terminal to install dependencies
Type “node server.js” in terminal
Open a web browser and type “localhost:3000”
You should see the message: “Successful response.”
