# Project Overview

## Project Links

- [https://github.com/Ahart266/REACT-FINALPROJECT2]()
- [link](https://quizzical-ritchie-7300dc.netlify.app/CountriesList

## Project Description
I want to create an informative atlas app of countries that give factual data
to users for potential travel.




## API

- [http://countryapi.gear.host/v1/Country/getCountries]

```js
{
    "IsSuccess": true,
    "UserMessage": null,
    "TechnicalMessage": null,
    "TotalCount": 250,
    "Response": [
        {
            "Name": "Afghanistan",
            "Alpha2Code": "AF",
            "Alpha3Code": "AFG",
            "NativeName": "افغانستان",
            "Region": "Asia",
            "SubRegion": "Southern Asia",
            "Latitude": "33",
            "Longitude": "65",
            ]   
        }
}             
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://ahart266.imgur.com/all]https://ahart266.imgur.com/all)
- [https://cloudinary.com/console/c-6531122b771e5ed52f82ce07ad6455/media_library/folders/df93c0d748764fa1c52675d58f0b36c5](https://cloudinary.com/console/c-6531122b771e5ed52f82ce07ad6455/media_library/folders/df93c0d748764fa1c52675d58f0b36c5


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional
- Interactive components
- Provide clickable links to navigate throughout the website
- Clickable links that provide detail descriptions of countries
- Provide contact sheet that user can submit for more information

#### PostMVP EXAMPLE

- Applied open close navbar


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | set up app with react router| 
| Home | provides landing page that will lead user to main page | 
| Main| will contain routes to about / countries list / contact page | 
| About | will provide a description of the services of the site |
| Countries List | provide a link that routes to countries details |
| Countries Details | will provide details from api about each country |
| Contact | provides form for users to input data for more information |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Worksheet/ wireframes | B | 5hrs | 6hrs | 6hrs |
| Create react/ App Add files for all components | A | 1hrs| 2hrs | 2hrs |
| Construct about page and contact | C | 5hrs| 5hrs | 5hrs |
| React routes/ make api calls/ parse data | A | 8hr | 10hrs | 10hrs |
| Debug errors | B | 8hrs | 8hrs | 8hrs |
| Creat links and buttons | B | 3hrs | 4hrs | 4hrs|
| Learn create interactive logo/ research imgs/ Css | B | 8hrs | 8hrs | 8hrs |
| Youtube link | C | 1hr | hrs | hrs |
| Total | H | 38hrs| 43hrs | 43hrs |

## Additional Libraries
- unsplash
- Sass
- Postman


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
 }

.open:nth-child(1){
    transform: rotate(45deg) translateY(16px);

  }
.open:nth-child(2){
    opacity: 0;
    
}
.open:nth-child(3){
    transform: rotate(-45deg) translateY(-16px);
    
}
```
