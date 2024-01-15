CREATE DATABASE Telleknapp;
USE Telleknapp;

    DROP TABLE Telleknapp;

    CREATE TABLE Telleknapp (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        count INT NOT NULL,
        PRIMARY KEY (id)
    );

    INSERT INTO Telleknapp (name, count) VALUES ('Telleknapp-1', 0), ('Telleknapp-2', 0), ('Telleknapp-3', 0), ('Telleknapp-4', 0), ('Telleknapp-5', 0);

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'passord';