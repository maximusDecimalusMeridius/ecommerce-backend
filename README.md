# e-commerce backend [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This challenge was to build the back end for an e-commerce site. We took a working Express.js API and configured it to use Sequelize to interact with a MySQL database.

### User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria
```
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Installation

To install, download the files found in the root directory of github.  Create a `.env` file with `DB_NAME`, `DB_USER`, and `DB_PW` fields to connect to your MySQL database.  Run `npm install` in the root directory once downloaded to install required dependencies.  Lastly, seed data can be entered by running `npm run seed`.

## Usage

Once installed, users can test functionality with Insomnia, Postmates, or another API endpoint tester, or build and connect front end functionality

### Video walkthrough of functioning application
https://www.youtube.com

### Screenshot of landing page (index.html)
![Index Thumbnail](./public/assets/images/index-thumbnail.png)

### Screenshot of notes page (/notes)
![Notes Thumbnail](./public/assets/images/notes-thumbnail.png)

## License

MIT License - Please refer to the LICENSE in the repo.

## Credits

N/A

## Questions

You can view my Github @ https://www.github.com/maximusDecimalusMeridius  
OR  
Email me with questions @ [andygg_dev@yahoo.com](mailto:andygg_dev@yahoo.com?subject=Question%20About%20e-commerce-backend%20App)
    