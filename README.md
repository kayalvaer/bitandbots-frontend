# Second@Best Store



![image](https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-kayalvaer/blob/main/ca-js-fo/public/pics/cover.jpg)

A simple overview of the use/purpose of the project.

## Description

Javascript Frameworks CA project, is part of the requirement to test student skills as part of our software
development qualification at Noroff College.Developed with creating an online ecommerce website where
users can view products, but products and make wishlist on required products. Admin is able to log in and add new products, view ordered list and details o customers. CRUD functionality applied throughout the website.
This report will outline the project plan and why I made them and how I came around to
implement.

User Stories:

- As a admin, I want to be able to log in and add new products, so
that I can make them available for customers.
- As a admin, I want to be able to be able to ordered list,
- As a user, I want to be able to be able my ordered list and wishlist,
- As a user, I want to be able to search the site for products
mentioning the keyword(s) they have used to search.
- As a user I want to be able to add my details quick so that I dont waste time.
- As a user I want to be able to use categories to filter products.
- As a user I want to be able to see product detailed description, to ensure the content and quality of products.
- As a user I want to see the title of the products.
- As a developer I want to be Authenticated developers for the
news site to be able to log into an admin panel and on
this panel they are able to add, edit and delete products.
- As a developer, I want the products to at least have a: title,
featured image, content, and categories and detail page.

### Planning Applications

- Trello
- GitHub Projects
- Gantt Charts

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
- Joshing
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

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install

There are no special requirements to run the project locally. This is a NextJS project made with create next app.


1. To run the app, run the local dev server:
npm run dev

2. Open the local application in your browser (default port 3000):
http://localhost:3000

```

### Running

To run the NextJS app use the commands below and run to start the project:

Run the following commands on the terminal:

```bash
npm run start
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

Create either a new React or Next.js app in this repo.

For the login functionality, use either a Wordpress installation with the <a href="https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank">JWT plugin from Module 3</a> installed, or a Strapi installation. Do not add either of these to your repo. Your API should remain a separate project. The markers will use their own installations when marking.

You can use either a REST or GraphQL API for the API calls.

---

## Level 1

Your app should have the following paths:

-   "/"
-   "/detail/:param"
-   "/contact"
-   "/login"
-   "/admin"

The admin path won't appear in your navigation.

Use reusable components where appropriate and pay attention to how the components are arranged.

### Home

Find an API that returns at least:

-   an array of items
-   a single item retrieved by a parameter (id, name, slug, etc)

If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

Display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

### Detail

Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.

### Contact

Create a form with the following inputs and validation:

-   First name - required, minimum 3 characters
-   Last name - required, minimum 4 characters
-   Email - required, must be in a valid email format
-   Subject - required, this must be a select box with at least 2 options
-   Message - required, minimum 10 characters.

### Login

Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form).

The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.

If the login is unsuccessful display a message above the form.

### Admin

This page will simply display an "Admin" heading.

---

## Level 2

Add a favourite button/icon component to each result on your home page. Clicking this button will toggle the result in/out of a favourites array.

Add a "/favourites" path to your routes. This page will display all the items currently in the favourites array.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

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

Include the deploying to provided link in the Moodle delivery window using [Delivery repo](https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-kayalvaer.git).

All final changes must be merged into the default branch `main` or `master`. Other branches will not be checked.
