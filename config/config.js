module.exports =
    {
        "development": {
            "username": "root",
            "password": "root",
            "database": "show_me_whats_next",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "port": 8889
        },
        "test": {
            "username": "root",
            "password": "root",
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "port": 8889
        },
        "production": {
            "use_env_variable": "JAWSDB_URL",
            "dialect": "mysql"
        }
    }