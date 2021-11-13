FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db graphql --collection categories --type json --file /init.json --jsonArray