if [ "$MONGO_USERDB_ADMIN_USERNAME" ] && [ "$MONGO_USERDB_ADMIN_PASSWORD" ]; then
    mongo -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" <<-EOJS
    use $MONGO_INITDB_DATABASE

    db.createUser({
        user: "$MONGO_USERDB_ADMIN_USERNAME",
        pwd: "$MONGO_USERDB_ADMIN_PASSWORD",
        roles: [ { role: "readWrite", db: "$MONGO_INITDB_DATABASE"} ]
    })
EOJS
fi