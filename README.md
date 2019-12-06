[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5c5e054f8aa64722916d2efbd296c123)](https://www.codacy.com/manual/Lorddistrict/APIPSSI2k19?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Lorddistrict/APIPSSI2k19&amp;utm_campaign=Badge_Grade)

# How run it

Hi ! Don't be shy and try me ;)

## Step 1

Rename `docker-compose.yml.dist` to `docker-compose.yml`

Rename `.env.dist` to `.env`

## Step 2

On the `.env` file :
- set the `PASSWORD_ENCRYPTED_FAKER` used for fixed user & admin account.
- set the `JWT_SECRET_KEY` with your own value.<br/> 
[INFO] However, for this test, please use `ipssi2019` in order to get 
the same value as `api.postman_collection.json` file.


## Step 3

On the `docker-compose.yml` renamed before :
- set the `app` container port (default is `3000`)
- set the `mongodb` container port (default is `27017`)

## Step 4

Run

`docker-compose up --build`
