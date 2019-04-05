# README

# Rendezvous

Welcome to [Rendezvous](http://rendezvous-meetup.herokuapp.com/), a single-page clone of [Meetup](https://www.meetup.com/). Rendezvous is a social platform web application where people can find, join or create local groups based on their hobbies.

![Main](https://github.com/mikolas2788/Rendezvous/blob/master/app/assets/images/main_page.png)

## Technologies 
Rendezvous is a fullstack application utilizing React, Redux and ES6 for frontend, and Ruby on Rails for data management on the backend. 

### User Authentication
Users can securely sign up, log in, and log out using their email address and password. 

### Structure
Rendezvous' main components are as follows: 

1. NavBar
* Logo links to the main page if not logged in, or home page if logged in 
* Users can create a group if logged in
* Log in and sign up buttons if not logged in, logout button if signed in
![Login](https://github.com/mikolas2788/Rendezvous/blob/master/app/assets/images/log_in.png)
2. Group Create/Index/Show
![CreateGroup](https://github.com/mikolas2788/Rendezvous/blob/master/app/assets/images/create_group.png)
* Users can create a group
* Users can view an index of groups or look up a specific group
3. Events Create/Index/Show
* Creator of the group can host events 
* Users can view an index of events or look up specific events 

### Future Features
4. Calendar
* Users can view upcoming events utilizing a convenient calendar 
5. Search 
* Users can utilize the search feature based on location and field of interest to find closeby groups and events 
6. Google Maps API