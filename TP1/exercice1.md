# Project - Matchmaking

## Link to github : https://github.com/tonycava/matchmaking

## Silots :

- [X] Development
    - Readme
    - Testing

- [X] Operationalization
    - CI/CD

- [X] Security
    - HTTPS
    - Auth to vps with ssh key and to custom account

## Pratiques devops :

- [X] Code liting
- [X] Continuous Integration
- [X] Continuous Deployment
- [X] Auto testing

## Schéma architecture globale :

https://github.com/tonycava/matchmaking

## Processus de build :

````yaml
kind: pipeline
type: exec
name: default

platform:
os: linux
arch: amd64

steps:

name: submodules
commands:
  git submodule init
  git submodule update --recursive --remote
  cd backend/ && git checkout main && cd ..
  cd frontend/ && git checkout main && cd ..


name: stop-previous-version
commands:
  docker compose -f docker-compose.prod.yml down | true


name: deploy
commands:
  docker compose -f docker-compose.prod.yml up -d --build

environment:
  POSTGRES_PASSWORD:
    from_secret: POSTGRES_PASSWORD
  POSTGRES_USER:
    from_secret: POSTGRES_USER
  POSTGRES_DB:
    from_secret: POSTGRES_DB
  DATABASE_URL:
    from_secret: DATABASE_URL
  JWT_SECRET:
    from_secret: JWT_SECRET

  FRONT_END_PORT:
    from_secret: FRONT_END_PORT
  BACK_END_PORT:
    from_secret: BACK_END_PORT

  API_URL:
    from_secret: API_URL
  EXTERNAL_API_URL:
    from_secret: EXTERNAL_API_URL
````

## Moyens mis en oeuvre pour tester :

- [X] Unit testing
- [X] Integration testing
- [X] End-to-end testing (cypress...)

## Points blocages :

- [X] Cypress...
- [X] Submodules

## Bon points :

- [X] Submodules
- [X] Architecture globale


## Outils utilisés :

- [X] Drone
- [X] Docker
- [X] Kubernetes
- [X] Github (CI / CD)
- [X] Cypress
- [X] Lint