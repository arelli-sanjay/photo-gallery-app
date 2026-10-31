# Photo Gallery

A simple and responsive photo gallery built using React, Vite, and Tailwind CSS. The application fetches photos from the Picsum Photos API and allows users to search for photographers and save their favourite photos.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid layout.
- Search photos by author name.
- Add and remove photos from favourites.
- Saves favourite photos in localStorage, so they remain available after refreshing the page.
- Displays loading and error messages while fetching photos.
- Uses React hooks to manage state and improve performance.

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API

## React Concepts Used

- **useState:** Manages the search input and UI state.
- **useEffect:** Handles API fetching and localStorage updates.
- **useReducer:** Manages adding and removing favourite photos.
- **useCallback:** Memoizes event handler functions.
- **useMemo:** Memoizes filtered photos and favourite IDs.
- **Custom Hook:** `useFetchPhotos` handles photo fetching and API states.

## Getting Started

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd photo-gallery-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## API Used

Picsum Photos API:

https://picsum.photos/v2/list?limit=30

## Project Structure

```text
src/
├── components/
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducer/
│   └── favoritesReducer.js
├── App.jsx
├── main.jsx
└── index.css
```

## What I Learned

While building this project, I got practical experience working with React hooks, fetching data from an external API, managing application state with useReducer, storing data in localStorage, and creating responsive layouts using Tailwind CSS.

I also learned how to organize a React application into reusable components and custom hooks.

---

**Developed as part of a Frontend React Internship Assignment.**
