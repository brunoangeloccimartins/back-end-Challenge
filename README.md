# Movie Catalog API

## Introduction

The Movie Catalog API is a RESTful web service designed to manage a catalog of movies. It provides endpoints for creating, retrieving, updating, and deleting movies, as well as user authentication using JWT tokens.

## Getting Started

### Prerequisites

Before running this application, you need to have the following installed:

- [Node.js](https://nodejs.org/) (version X.X.X or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/) (if using Docker for development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brunoangeloccimartins/back-end-Challenge.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

#### Using Docker Compose

If you have Docker Compose installed, you can run the application using the following command:

```bash
docker-compose up
```

This command will build the Docker images for your application and its dependencies, and then start the containers.

#### Without Docker Compose

If you prefer not to use Docker Compose, you can run the application manually:

1. Start Redis and PostgreSQL using Docker:

   ```bash
   docker-compose up redis db
   ```

2. Start the Nest.js application:

   ```bash
   npm run start:dev
   ```

### Usage

You can make HTTP requests using your browser or applications like Insomnia. The API provides the following routes:

- **POST** `localhost:3000/user`: Register a new user.
- **POST** `localhost:3000/auth/login`: Authenticate with the credentials you created in the route above. After authentication:
  - Copy the received token.
  - Paste the token in the header authorization as Bearer Token.
  - With the token set up, you can access all movie routes.
- **POST** `localhost:3000/movies`: Create a new movie.
- **GET** `localhost:3000/movies`: Retrieve all movies.
- **PUT** `localhost:3000/movies/id`: Update a specific movie by its ID.
- **DELETE** `localhost:3000/movies/id`: Delete a specific movie by its ID.


### Documentation

The API documentation is generated using Swagger. You can access it by visiting:

```
http://localhost:3000/api
```

## Technologies Used

- [Nest.js](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Redis](https://redis.io/)
- [Swagger](https://swagger.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Acknowledgements

Embarking on this project marked my inaugural journey with Nest.js, TypeORM, Redis, and Swagger. Each step presented a unique challenge, but it was an enriching experience that expanded my knowledge base. This endeavor revealed the vast expanse of learning that lies ahead, underscoring the continuous evolution of my skills.

Despite encountering hurdles along the way, I found joy in the process. Every obstacle became an opportunity to delve deeper into the intricacies of these technologies. Researching and uncovering solutions felt akin to embarking on a thrilling treasure hunt, each discovery bringing me closer to overcoming the hurdles.

This project not only honed my technical abilities but also instilled a sense of excitement for future endeavors. It reaffirmed my passion for exploration and the pursuit of knowledge in the ever-evolving landscape of technology.



## About the Author

Hey there! 👋 I'm Bruno Angelocci Martins, a passionate and ambitious 23-year-old web developer on a relentless pursuit of excellence in the ever-evolving world of technology. With a year's worth of dedicated study in web development under my belt, I'm eager to make my mark in the industry.

My journey into the world of web development began with a curiosity-driven exploration, and since then, I've been captivated by the endless possibilities that technology offers. Through hands-on experience and continuous learning, I've honed my skills in frontend and backend development, mastering languages and frameworks such as HTML, CSS, JavaScript, Node.js, and React.

I thrive in dynamic environments where creativity meets functionality, and I'm always on the lookout for opportunities to push boundaries and create impactful solutions. Whether it's building intuitive user interfaces or architecting robust backend systems, I approach every project with a blend of enthusiasm and meticulous attention to detail.

Beyond technical prowess, I bring a growth mindset, adaptability, and a relentless drive for self-improvement to the table. I thrive in collaborative settings, where I can leverage my skills to contribute meaningfully to team objectives while also embracing opportunities for individual growth.

As I embark on this exciting journey, I'm eager to connect with like-minded professionals, explore new challenges, and contribute to innovative projects that shape the future of technology. Let's create something extraordinary together!

Feel free to reach out to me via [LinkedIn](https://www.linkedin.com/in/brunomartinsdev/) to discuss potential collaborations or opportunities. I look forward to connecting with you! 🚀

