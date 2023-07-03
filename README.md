
# Bits & Bots video game store


![image](https://github.com/kayalvaer/bitandbots-frontend/blob/main/src/assets/bitbotgames.png)

A simple overview of the use/purpose of the project.

## Description

Project Exam 2 submission task, is a part of the requirement to test our software
development qualification at Noroff Institute.Managed to develop a fullstack website developed with React, fetching data from
Strapi API and using Material Ui for styling.Allows users to access information about open source free games and providing
links for authorised users to access the game.
The goal was to create a new video game store website called Bits & Bots. The owners want only registered users to be able to browse the site. The site must be responsive and work on all device sizes.

Outline the project plan and why I made them and how I came around to implement.

## User Stories:

- As a developer, I want users to be able to be able to register, login, edit and delete my profile in the new game site,
- As a user, I want to be able to be view a list of free online games,
- As a user, I want to be able to search for the game quickly by mentioning the keyword(s) they have used to search.
- As a user I want to be able to click game link and excess it online.
- As a user I want to view Game title , description and any important information about the games.
- As a user I want to be able to categories games by the game types.
- As a user I want to be able to see game detailed description, to ensure the content and quality of the game is what i wanted.
- As a user I want to see the title and description of the game clear.
- As a developer I want to be Authenticated developers for the game site.


### Planning Applications

- Trello
- GitHub Projects
- Gantt Charts
- Process Flow

## Teck Stack Built With

# Design tools used:

- [Figma](https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=841577996410440132) :
- [Adobe](https://www.adobe.com/products/xd/learn/get-started/what-is-adobe-xd-used-for.html)


# Tech stack used:

- [React.js](https://nextjs.org/docs)
- [Tailwind](https://tailwindui.com/)
- [Strapi API](https://strapi.io/)
- HTML5: HTML5 provides the structure and the content for my project.
- CSS3: CSS3 provides the style of the HTML5 elements.
- Javascript: JavaScript provides the interactivity of the project.


Frameworks, libraries & programs used
- vsCode: The vscode is used to code and develop the project.
- Git: The Git was used for version control to commit to Git and push to GitHub.
- GitHub: The GitHub is used to host the project.

# Testing tools used

Testing During Development
As mentioned at the start much of the testing my JavaScript code was done throughout the
development process using console.log within each function to report on what variables and
arrays were being generated at each stage of the site. Read the output and used breakpoint
and console network to check the location of my errors and the movement action as i
manually tested them. that allowed

- Autoprefixer
• Autoprefixer is used to parsethe CSS and to add vendor prefixes to CSS rules.
- W3C Markup Validation Service
• The W3C MarkUp Validation Service is used to check whether errors in the
HTML5 code.
- W3C CSS validator
• The W3C CSS validator is used to check errors in the CSS3 code.
- JShint
• JShint is a JavaScript validator is used to check any errors in the JavaScript
code.

# More Tools
- Tinypng: Used to re-size images.
- Google Developer Tools: The GitHub is used to host the project and test the project through the console
and lighthouse.
- Design mockup : http://ami.responsivedesign.is/

## Features

After identifying the user stories I managed to identify the features for the
website to help me with the development roadmap.And then created tasks based on userstories

### Installing

How to get the project started. First clone the repo and then to install the dependencies e.g.

1. Run repository:

There are no special requirements to run the project locally. This is a NextJS project made with create next app.


1. To run the app, run the local dev server:

To run the ReactJS app use the commands below and run to start the project:

Run the following commands on the terminal:

```bash
npm run start
```

2. Open the local application in your browser (default port 3000):
http://localhost:3000

```


## Contributing

- Responsiveness
  
Google Developer tools was used to test the layout of my site on multiple device sizes, and
also shared the deployed site with family and friends for them to test on their devices too.

- Performance
  
Lighthouse tool on the Google Developer software was useful to test the performance of my
site. It flagged several errors which some were resolved using the console.The project could
do with more debugging and testing. The performance needs further investigation and acting
on the lighthouse suggested points of improvement.

# JS Frameworks Course Assignment Original 

## Brief

Create either a new React app.

---

## Landing page

The landing page must include either a fullscreen video or slide show. Make sure you are allowed to use the video or images you source for this.
The site requires registration and there must be two tabs in the middle of this page:
1. Login
2. Register
The register tab must hold a form with email address and password inputs. Submitting the form must validate the inputs and write the values to localStorage.
The login tab form must also contain email and password inputs and on submit check the values against those stored in localStorage. If the values match, the user will be redirected to the browse page, otherwise an “Incorrect username or password” message must be displayed.

## Browse page

When first loading the browse page, an API call will be made to load a list of games. A loading indicator must be displayed while the API call is in progress.
Once the call is complete, the page must display the list of games as items in columns and rows. The title and image of each games must be displayed.
At the top of the page will be a list of genres as tags, tabs or menu items. Clicking on a genre will load games of that specific genre.
Each item must have a more info or details link. Clicking this will take the user to the details page with the id of the game in the url, e.g. /details/5
Somewhere on each game item there must be a favourite or add-to-cart icon button. Clicking on the icon must add the game info in an object to an array in localStorage. This will act as the site’s shopping cart. Clicking it again will remove it from the cart. The icon must indicate whether or not it is in the cart.
At the top of the browse page there must be a view cart button which takes the user to the cart page.

## Details page

This page must retrieve the id from the url and make an API call to fetch the details for this game using the id.
The student can decide which fields to display from the API call result.
The page must also include the favourite/add-to-cart icon and functionality.

## Cart page

The cart page must display the list of games stored in the localStorage cart. All info for this list must be retrieved from the cart. A remove button must exist on each item. Clicking this will remove the game from the list and from localStorage.
If there are no items in the cart the page must display a relevant message.
A check out button on this page will take the user to the check out page. If there are no items in the cart this button must be disabled.

## Check out page

This page will have a form with inputs for the user’s name, address and credit card details. Relevant validation must exist on each input.
Above the form the page must display the number of items in the cart.
If the input values all pass validation, the submit button must open a modal to confirm payment. Once confirmed, the cart array will be emptied and the user redirected to the browse page.

## Common page elements

• A log out button which will clear all information stored in localStorage and redirect the user to the landing page
• Suggested: A breadcrumb element to make navigation easier

## API
Deploy your own API. You can use Strapi, WordPress API or another Headless CMS.

## Component library

Consider using a component library like Bootstrap for your project


## Process

- Week 1 and 2: Planning and Design
- Week 3 to 6: Coding
- Week 7: Bug Fixing

## Social media links for people for contact

[Github Account](https://github.com/kayalvaer)
[Twitter Account](https://twitter.com/KayAlvaer)
[My LinkedIn page](www.linkedin.com)
[Behance Account](https://www.behance.net/keatlarmosarwe)

## License

All text in this project is original content and some help from Noroff College
tutorials .
• The developer took inspiration from several tutorials and github samples listed on the
references below.

- https://github.com/tpiros/jamstack-training-films-ui/tree/main/pages
- https://freefrontend.com/css-magazine-layouts/
- Noroff Tutorials:
- Images from Pexels :


Projects committed to git.

## Acknowledgments

A thank you to lectures at Noroff Institute and Admin employee for all their help during the studies.

## Deploy on Vercel

Used the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Delivery

Include the deploying to provided link in the Moodle delivery window using [Delivery repo](https://github.com/kayalvaer/bitandbots-frontend).

All final changes must be merged into the default branch `main` or `master`. Other branches will not be checked.
