# Preview Music 🎶

Preview Music is a web application that allows users to search for music using the Spotify API and play 30-second song previews. Built with React and styled using Tailwind CSS, this project uses the Spotify Web API via NoCodeAPI for efficient music searching and preview functionality.

## Features
- 🔍 Search for songs using the Spotify API.
- 🎧 Play 30-second song previews directly in the app.
- 💻 Clean and responsive UI.

## Technologies Used
- **React** - Frontend framework.
- **Tailwind CSS** - Styling and responsive design.
- **Spotify Web API** - Music search and preview data (via NoCodeAPI).

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/satyajit-patel/preview-music.git
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```

## Usage
1. Obtain a Spotify API key via [NoCodeAPI](https://nocodeapi.com).
2. Add your API key to the environment file.
3. Search for songs and enjoy previews!

## Dockerized Version
The app has been Dockerized for easier deployment and management. You can pull and run the Docker image directly from Docker Hub:

1. Pull the image from Docker Hub:
    ```
    docker pull satyajitpatel770001/preview-music
    ```
2. Run the image:
    ```
    docker run -p 5173:5173 satyajitpatel770001/preview-music
    ```

For more details, visit the [Docker Hub repository](https://hub.docker.com/repository/docker/satyajitpatel770001/preview-music/general).

## Deployed Version
You can access the live version of the app here:  
[Preview Music on Vercel](https://preview-music-git-master-satyajit-patels-projects.vercel.app/)

## Dockerizing Steps
1. Ensure Docker engine is running.
2. Build the Docker image:
    ```
    docker build -t <image-name> .
    ```
3. Run the image:
    ```
    docker run -p 5173:5173 <image-name>
    ```

To push the image to Docker Hub:
1. Log in to Docker:
    ```
    docker login
    ```
2. Tag and push the image:
    ```
    docker tag <image-name> <your_dockerhub_username>/<repository_name>
    docker push <your_dockerhub_username>/<repository_name>
    ```

## Contributing
Feel free to submit issues or pull requests to enhance the project!
