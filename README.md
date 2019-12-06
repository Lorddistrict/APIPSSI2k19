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