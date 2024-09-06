# Preview Music 🎶

Preview Music is a web application that allows users to search for music using the Spotify API and play 30-second song previews. 
Built with React and styled using Tailwind CSS, this project uses the Spotify Web API via NoCodeAPI for efficient music searching and preview functionality.

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

## dockerize steps
```
// create Dockerfile
Dockerfile
.dockerignore
// create image
// just make sure React and Docker are running
docker build -t preview-music .

// after image created you can check
docker image ls
docker run -d -p 5173:5173 preview-music
docker ps
docker stop <id>

// to push
docker login
docker tag my-app <your_dockerhub_username>/<repository_name>
docker push <your_dockerhub_username>/<repository_name>
// to run any image from hub pull and run
docker pull satyajitpatel770001/preview-music
docker run -d -p 5173:5173 <your_dockerhub_username>/<repository_name>:<tag>
docker run -d -p 5173:5173 satyajitpatel/preview-music:v1
```

## Contributing
Feel free to submit issues or pull requests to enhance the project!


