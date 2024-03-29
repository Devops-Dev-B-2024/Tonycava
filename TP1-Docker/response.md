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