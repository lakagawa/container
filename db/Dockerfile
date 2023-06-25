FROM mysql:8.0

# Set MySQL environment variables
ENV MYSQL_USER=mynodeapp
ENV MYSQL_ROOT_PASSWORD=mynodeapp
ENV MYSQL_PASSWORD=mynodeapp
ENV MYSQL_DATABASE=mydb

COPY my.cnf /my.cnf


# Expose the MySQL port (optional)
EXPOSE 3306

# Start MySQL server when the container launches
CMD ["mysqld"]