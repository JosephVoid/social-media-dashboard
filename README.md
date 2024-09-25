# Social Media Mgmt Dashboard

## Introduction

This is a submission to the MineMarketing test assignment. It is a social media account management interface designed to track the performance of social media accounts.

The codebase is written using the React framework and incorporates Redux Toolkit, RTK Query, Tailwind, and Material UI. There is no actual backend; it is simulated using data from the `mock.json` file. The data is stored in runtime, so refreshing the page will reset it.

## Getting Started

To view locally do

1. `npm install`
2. `npm run dev`

To view deployed go [here](#)

## Explanation

### Approach

1. First, I drafted a user interface based on the provided document, which gave me a better understanding of the features and what might be needed.
2. Then, I installed all the necessary dependencies to build the user interface. In this case, I installed React, Vite, Material UI, Tailwind, and Bootstrap. During this phase, I also:
   - Configured Vite and TypeScript to work with relative pathing (assigning `@` to `/src`).
   - Configured color themes for Material UI.
   - Set up forms using React Hook Forms.
3. I implemented the user interface without any functionalities to test its appearance and interaction on both desktop and mobile devices.
4. Next, I created an API or backend simulator (inside `src/api/methods.ts`) to mimic the behavior of a server, including a few seconds of delay. It uses the `src/api/mock.json` file to initially load data.
5. I then installed Redux and created state slices for user data, connecting it with the UI to add the functionality of signing in and signing out.
6. Finally, I created API endpoints with RTK Query, wrapped the backend methods with it, and exported them as hooks for the UI to use.

### Tools

- **React**: A JavaScript library for building user interfaces, especially for single-page applications.

- **Vite**: A fast build tool and development server for modern web projects, optimized for speed and performance.

- **Tailwind**: A utility-first CSS framework for building custom designs quickly without writing custom CSS.

- **Material UI**: A popular React component library that implements Google's Material Design for building user interfaces.

- **Bootstrap**: A front-end framework that provides ready-made responsive components and styles.

- **Redux Toolkit**: A library that simplifies managing global state in React applications by offering efficient state slices and reducers.

- **Redux Toolkit Query (RTK Query)**: A powerful data-fetching and caching tool that integrates seamlessly with Redux, enabling efficient API integration.

- **React Hook Forms**: A library for handling form state and validation in React using hooks, making forms lightweight and simple.

### Main Structure

- **src/api**  
  This directory contains `method.ts` and `mock.json`.

  - `method.ts`: Exports an object that includes all the mocked methods of the simulated backend, such as `getSocials`, `addNewSocial`, etc. This acts as the data persistence layer.
  - `mock.json`: Contains the starting data, which gets loaded into the simulated backend upon creation.

- **src/components/dashboard & header**  
  This directory includes the main UI elements like the dashboard, social cards, icons, header, etc.

- **src/components/shared**  
  This directory holds components, utilities, and logic that might be shared across the application.

  - Components: Forms, modals, etc.
  - Utilities: ID generation, etc.
  - Logic: Capturing and submitting form data.  
    It includes a file called `hooks/useAddEditForm.ts`, which handles all form-related logic.

- **src/redux**  
  This directory contains logic related to Redux state management.

  - `store.ts` and `user-slice.ts`: Manage global user data.

- **src/redux/rtk-query**  
  Under the `redux` directory, this contains the logic for creating RTK Query endpoints and exporting them as hooks for use in the UI.

- **src/types**  
  Contains the types used throughout the application.
