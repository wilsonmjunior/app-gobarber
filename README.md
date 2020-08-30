<h1 align="center">
  <img src="https://raw.github.com/wilsonmjunior/gobarber-web/master/src/assets/logo.svg" width="400"/>
</h1>

## Screenshot


## How to use 

For using, first clone backend (server) <a href="https://github.com/wilsonmjunior/gobarber-api" target="_blank">Go Barber api</a>

```bash
# Clone this repository
$ git clone https://www.github.com/wilsonmjunior/gobarber-api

# Access the project folder 
$ cd gobarber-api

# Install dependencies
$ yarn

# Create the container in the Docker
docker-compose -f "docker-compose.yml" up -d --build

# Run migrations
yarn typeorm migration:run

# Run the application in development 
yarn dev:server
```

now 

```bash
  # Clone this repository
  git clone https://github.com/wilsonmjunior/app-gobarber
  
  # Access the project folder 
  cd app-gobarber
  
  # Install dependencies
  yarn 
  
  # Run the application
  yarn start
  
```


##  License

:memo: This project is under the MIT license. See the [LICENSE](https://github.com/wilsonmjunior/gobarber-web/blob/master/LICENSE) for more information.
