To run mysql locally

1. Install docker
2. Create image of mysql container

========================================== You can use this command to intall mysql container in docker ==============================================
 docker run --detach --env MYSQL_ROOT_PASSWORD=todosrest --env MYSQL_USER=babar --env MYSQL_PASSWORD=todosrest --env MYSQL_DATABASE=todos --name mysql --publish 3306:3306 mysql:8-oracle
