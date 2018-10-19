# SA Datathon Competition Team Awesome!

This is our super awesome team starting point! It is a Google App Flexible made with Google Cloud SQL, flask, and python. [See this Google Example for reference](https://github.com/GoogleCloudPlatform/python-docs-samples/tree/master/appengine/flexible/cloudsql).

## What you need to get started 
* you must have python3
* this setup is based on mac/linux, you might run into issues with another OS
* access to the google cloud sql (ask anna about getting access)

### 1. Clone this repository
### 2. Setup Flask framework inside a virtual environment
#### Create a virtual environment
* venv comes with python3
* you can just look at flask setup for reference 
* run the following
```
$python3 -m venv venv
```

#### activate the environment 
```
$. venv/bin/activate
//for gcloud installation
$source env/bin/activate
```

#### install/update dependancies (flask libraries)
```
$cd YOUR_PROJECT
$pip install  -r requirements.txt
```


## Setup the Google Proxy

Before you can run or deploy, you will need to do the following:

1. Get permission to use our [Second Generation Cloud SQL](https://cloud.google.com/sql/docs/create-instance) instance. 
1. Get root password for the instance sql database. 
1. Create your own [Service Account](https://cloud.google.com/sql/docs/external#createServiceAccount) for our project (I think). You'll use this service account to connect to your Cloud SQL instance locally.

1. Download the [Cloud SQL Proxy](https://cloud.google.com/sql/docs/sql-proxy).
1. Use [this link](https://cloud.google.com/sql/docs/mysql/quickstart-proxy-test) to get started. 
** Don't use the tutorial curl on macs, use this one
```
$ curl -o cloud_sql_proxy https://dl.google.com/cloudsql/cloud_sql_proxy.darwin.amd64
chmod +x cloud_sql_proxy
```

1. Run the proxy to allow connecting to your instance from your machine.
```
$ ./cloud_sql_proxy -instances="sadata-219914:us-central1:datathon"=tcp:3306
```
   
1. Set the connection string environment variable. This allows the app to connect to your Cloud SQL instance through the proxy:

```
    export SQLALCHEMY_DATABASE_URI=mysql+pymysql://USER:PASSWORD@127.0.0.1/YOUR_DATABASE
```

1. Run ``create_tables.py`` to ensure that the database is properly configured and to create the tables needed for the sample.

1. Update the connection string in ``app.yaml`` with your configuration values. These values are used when the application is deployed.

## Running locally

1. Run the proxy as stated above. 

1. Set the following environment variables via your shell before running the sample:
```
    $ export SQLALCHEMY_DATABASE_URI=[your connection string]
```
 
1. Launch the application
```
    $ python main.py
```
