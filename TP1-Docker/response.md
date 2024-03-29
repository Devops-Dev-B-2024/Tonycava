```bash
docker pull nginx:alpine3.18
```

```bash
docker images --filter "reference=nginx"
```

```bash
docker run --name tp-docker-web-server -v ./html/:/usr/share/nginx/html/ -p 8080:80 -d nginx:alpine3.18
```

```bash
docker cp ./html tp-docker-web-server:/usr/share/nginx/
```

```text
Volume is used when i want to save data for example in c ase of a database or in a dev environment 
to update file inside the docker container instead COPY i used to just copy file and be static inside the container like a package.json file

The two can do the same things but have different use case
```

```bash
docker network create tp-docker-mysql-phpmyadmin
```

```bash
docker run --name tp-mysql -d --network tp-docker-mysql-phpmyadmin -e MYSQL_ROOT_PASSWORD=root mysql
docker run --name tp-phpmyadmin -d --network tp-docker-mysql-phpmyadmin -e PMA_HOST=tp-mysql -p 8081:80 phpmyadmin/phpmyadmin
```

```text
docker run is used to run one container per one per container docker compose can be used to create many container at once
and be more declarative about it, docker run is more imperative
```

```bash
docker compose up # Launch container
```

```bash
docker compose down # Stop container
```

```text
Nous avons une erreur du docker daemon et l'application ne pourra pas se lancer
```

```text
Nous devons utiliser le tag --production ou --omit=dev
```

````text
Pour baisser le poid de notre image et ne pas installer de dépendance inutiles en production
````

````text
Nous pouvons utiliser les commandes comme docker scout et docker scan et ne pas publier de port inutile comme les ports de base de données
````

```text
Car chaque container a son propre localhost et ne peut pas communiquer nativement avec les autres containers
```