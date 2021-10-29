# Electric Power Project

## Project Description

Walking in to meet a new customer for a sales person can be daunting task to start with even for a seasoned pro. Add in the added stress of repping a technically dense line card of products when you have no idea where this customer's needs may drive the conversation. Marketing teams try to help with pumping promotional material of the buzz worthy features and benefits but is that the information you actually need about a product when you're sitting across from a decision maker?

The Electric Power Project is a microlearning app for electrical content tailored for sales. This includes manufacturer neutral product basics, applications and sales notes. Along with additional resources for deeper dives into a topic.

Application will include:

- Home Page
  - Links to available content topics
- Content Page
  - Basics, Applications and sales notes section
  - Feed displaying user comments
  - Form to post comment
- Question Page
  - Form to submit questions/suggestions for future posts

## Wireframes

https://whimsical.com/epp-PV4LBuXkzsgKrgVNaEcUN1

## Component Hierarchy

https://whimsical.com/epp-component-hierarchy-LNYLrwjjxN726EEz9EBWPP

## Deployed Site

https://electric-power-project.netlify.app/

## API and Data Sample

### Comments

"records": [
{
"id": "rec9hFFaiMtyLbf4t",
"fields": {
"post": "motor starting post id",
"author": "jane smith",
"comment": "something about something"
},
"createdTime": "2021-10-22T02:36:36.000Z"

### Questions

"records": [
{
"id": "recWT6xfyq88AZSo7",
"fields": {
"yourname": "user name",
"email": "username@email.com",
"question": "where is the parking "
},
"createdTime": "2021-10-22T05:11:30.000Z"
},

## MVP

- React app
- Utilize React Router
- Get data from Airtable
- Use axios to post/create new data
  - comments to "get" and "post"
  - questions form to "post"
- 6 Rendered component
- Utilize functional components
- Implement responsive screens for 2 screen sizes
- Deployment
- 50 Total Commits

## PostMVP

- Add search that will produce page of related topics on results page
- Add video player of relative youtube videos
- Add podcast episode section for each product/topic page
- Add "like" and "dislike" buttons to pages and individual comments

## Project Schedule

| Day        | Deliverable                                            | Status     |
| ---------- | ------------------------------------------------------ | ---------- |
| October 22 | README / Wireframes / Component Hierarchy / Timeframes | Complete   |
| October 22 | Project Approval and Complete Airtable table           | Complete   |
| October 25 | Core Application Structure (HTML, CSS, etc.)           | Complete   |
| October 26 | Pseudocode / actual code                               | Complete   |
| October 27 | Initial Clickable Model and Styling                    | Complete   |
| October 28 | MVP                                                    | Complete   |
| October 29 | Presentations                                          | Incomplete |

## Timeframes

| Component             | Priority | Estimated Time | Actual Time |
| --------------------- | :------: | :------------: | :---------: |
| Pre-approval Items    |    H     |      3hrs      |    5hrs     |
| Core React App Setup  |    H     |      4hrs      |    6hrs     |
| API Setup             |    H     |      2hrs      |    1hrs     |
| Content Component     |    H     |      3hrs      |    4hrs     |
| Comments Form - POST  |    H     |      3hrs      |    4hrs     |
| Comments GET+Display  |    H     |      5hrs      |    6hrs     |
| Questions Form - POST |    H     |      3hrs      |    3hrs     |
| Styling               |    H     |     15hrs      |    18hrs    |
| Post-MVP              |    L     |     10hrs      |    5hrs     |
| Total                 |          |     49hrs      |    52hrs    |

## SWOT Analysis

### Strengths:

I have a solid handle how the app should be structured and organized. I think this will benefit me when laying and implementing the component hierarchy.

### Weaknesses:

Styling continues to be a big weakness for me. This is a big reason for why I estimated such a large portion of the week's time to it.

### Opportunities:

If executed properly, this project could be the first of my portfolio but have the dual purpose highlighting my previous work experience in a form that showcases my new career objectives and skills.

### Threats:

I need to focus on developing a functional model that meets MVP before becoming absorbed by how I think it should look. Styling is of course important but I need to hit the initial project milestones of a function app first.
