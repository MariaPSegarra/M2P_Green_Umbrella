[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/MariaPSegarra/M2P_Green_Umbrella)

# Interactive Frontend Development Milestone Project | M2P_Green_Umbrella

This second project is based on a tour booking site. In order to achive funcionality I've implemented APIs from [Google Maps](https://cloud.google.com/maps-platform/) and [Email.js](http://github.com).

## UX

Wireframes for this project are available 
[here.](https://github.com/MariaPSegarra/M2P_Green_Umbrella/tree/master/Wireframes)
Wireframes were built using [Figma](https://www.figma.com/).

This website was thought to be user friendly. 
Buttons and links change color when hovered on or clicked, to inform the user that an action has taken place.

In this website, the user will be able to choose a tour after seeing in a map the main attractions. Once the user picks the tour, the page takes him to a booking page,where he'll be able to contact the service provider in order to request a booking.
The user will receive a confirmation email.
Same functionality shows the contact page, where the user is able to send any comments or queries to the service provider.

The user doesn't need to provide payment for the service beforehand, so that functionality has not been implemented.

### Features

- Navigation links and buttons allow the user to move back and forth the pages.
- Each main tour page shows a button that sends the user to the booking page where the booking form is featured.
- Next to the description of each tour, we can find the map that shows the main attractions of the tour.
- Both forms in the project, contact and booking, allow the user to send a message to the service provider. The user also gets a confirmation email .
- The user is able to choose a date from a pop up calendar.

### Features left to implemented

- I would have liked to go a bit further with the features on the booking form.
Setting up a maximum of people per walk, each user information would have to be stored on the Local storage, so the user wouldn¡t be able to book a date if the number of bookings reached the number 10.
- The available dates would depend on the number of people booked in each tour, with a maximum of ten. Once that amount is reached, the date becomes unavailable.
I didn't see myself ready to attempt this feature with the amount of time given and my present knowledge.

## Tecnologies 

- HTML
- CSS
- JAVASCRIPT
- [BOOTSTRAP](https://getbootstrap.com/) - For responsive CSS and Javascript
- [JQUERY](https://jquery.com/) - Manipulate the DOM

HTML, CSS and JS knowledge comes mostly from the Code Institute Course Modules.

### Other Resources

- [W3schools](https://www.w3schools.com/) - For general coding knowledge.
- [StackOverflow](https://stackoverflow.com/) - Questions answered by experienced developers.
- [Code Handbook](https://codehandbook.org/) - Code tips for developers.

## Credits

- Images from a private account of [Getty Images](https://www.gettyimages.co.uk/)

## Testing

Extensive testing in all screen sizes has been done all throuhout the duration of the project.

Both forms, Contact and Booking has been thoroughly tested.
All added funtionality too.

Maps were a little tricky at first. The API key didn't work and the map didn't render.
It was all due to the authorising the right domain. 
When I introduced the second map, the first map stopped showing on the page.
Same both for both and one workd and the other didn't.
I finally separated the JS funtions and put them on different files and it all worked well.

* After deployment all css "broke"
* Also I've problems rendering the maps. Even though I authorised the new deployment URL.

## Deployment

I used [Gitpod](https://gitpod.io/) during the whole project.
For both development and deployment.
The project is live and hosted in Github pages.


