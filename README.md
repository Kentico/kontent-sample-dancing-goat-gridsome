# Gridsome Dancing Goat Implementation

![Netlify Status](https://api.netlify.com/api/v1/badges/c1d01b67-6e10-407d-8ea4-50eae295ce56/deploy-status) [![Live Demo](https://img.shields.io/badge/live-demo-brightgreen.svg)](https://kontent-sample-dancing-goat-gridsome.netlify.com/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

This is a Gridsome implementation of the Dancing Goat Starter site. To get started, make sure you've registered for a free account at: <https://app.kontent.ai/sign-up>.

## Getting started

1. Install the latest version of NodeJS and npm. You can download both at <https://nodejs.org/en/download/>.
1. Clone the sample application repository.
1. Rename `.env.example` to `.env` and set the following variables:
   1. `KENTICO_KONTENT_PROJECT_ID` should be your Kontent project ID
   1. `GOOGLE_MAPS_KEY` should be set to a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
1. Navigate to the root folder of the application in the command line.
1. Type `npm install --global @gridsome/cli` to  install the Gridsome CLI globally.
1. Type `npm install` to install required npm packages.
1. Type `gridsome develop` to start a development server.
1. Opens in your browser and go to <http://localhost:8080>.

## Deploying

Since Gridsome generates a static site, you can use `gridsome build` to create the full site and then deploy the contents of the `dist` folder anywhere you like.

Alternatively, you can easily deploy this with Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Kentico/kontent-sample-dancing-goat-gridsome)
