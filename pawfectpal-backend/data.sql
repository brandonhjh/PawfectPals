#CREATE DATABASE heap23;

CREATE TABLE user (
    username VARCHAR(15) NOT NULL,
    password VARCHAR(15),
    userPicture LONGBLOB,
    CONSTRAINT user_pk PRIMARY KEY (username)
);

CREATE TABLE groups (
    groupID INT NOT NULL AUTO_INCREMENT,
    groupName VARCHAR(15),
    CONSTRAINT groups_pk PRIMARY KEY(groupID)
);

CREATE TABLE userGroup (
    groupID INT NOT NULL,
    username VARCHAR(15),
    CONSTRAINT userGroup_pk PRIMARY KEY (groupID, username),
    CONSTRAINT usergroup_fk1 FOREIGN KEY (username) REFERENCES user (username),
    CONSTRAINT usergroup_fk2 FOREIGN KEY (groupID) REFERENCES groups (groupID)
);

CREATE TABLE pet (
    petName VARCHAR(15) NOT NULL,
    groupID INT NOT NULL,
    breed VARCHAR(30),
    birthday DATE,
    petPicture LONGBLOB,
    CONSTRAINT pet_pk PRIMARY KEY (petName, groupID),
    CONSTRAINT pet_fk1 FOREIGN KEY (groupID) REFERENCES groups (groupID)
);

CREATE TABLE task (
    taskID INT NOT NULL,
    groupID INT NOT NULL,
    taskDate DATE,
    taskTime TIME,
    petName VARCHAR(15),
    title VARCHAR(40),
    notes VARCHAR(100),
    isCompleted BOOLEAN,
    people VARCHAR(40),
    CONSTRAINT task_pk PRIMARY KEY (taskID, groupID),
    CONSTRAINT task_fk1 FOREIGN KEY (groupID) REFERENCES groups (groupID)
);

CREATE TABLE taskPeople (
    taskID INT NOT NULL,
    groupID INT NOT NULL,
    person VARCHAR(40),
    CONSTRAINT taskpeople_pk PRIMARY KEY (taskID, groupID, person),
    CONSTRAINT taskpeople_fk1 FOREIGN KEY (taskID, groupID) REFERENCES task (taskID, groupID)
);


INSERT INTO user (username, password, userPicture)
VALUES ('brandon', 'apple123', NULL),
       ('jennifer', 'orange456', NULL),
       ('michael', 'banana789', NULL);

INSERT INTO groups (groupID, groupName)
VALUES (100, 'Safe Space'),
       (101, 'Study Group'),
       (102, 'Fitness Club');

INSERT INTO userGroup (groupID, username)
VALUES (100, 'brandon'),
       (101, 'brandon'),
       (101, 'jennifer'),
       (102, 'michael');

INSERT INTO pet (petName, groupID, breed, birthday, petPicture)
VALUES ('Leo', 100, 'Husky', '2001-01-01', NULL),
       ('Bella', 101, 'Labrador', '2015-03-10', NULL),
       ('Max', 101, 'Golden Retriever', '2018-07-22', NULL),
       ('Charlie', 102, 'Bulldog', '2019-01-05', NULL);

INSERT INTO task (taskID, groupID, taskDate, taskTime, petName, title, notes, isCompleted, people)
VALUES (200, 100, '2023-06-15', '12:00:00', 'Leo', 'Leo''s dinner', 'Remember to top up food!', false, 'brandon,jennifer'),
       (201, 101, '2023-06-16', '14:30:00', 'Bella', 'Walk in the park', 'Take Bella for a 30-minute walk', false, 'brandon'),
       (202, 101, '2023-06-18', '10:00:00', 'Max', 'Training session', 'Train Max on basic commands', false, 'jennifer'),
       (203, 102, '2023-06-17', '16:00:00', 'Charlie', 'Playtime at the park', 'Spend some time playing with Charlie', false, 'michael,jennifer');

select * from user;
select * from groups;
select * from userGroup;
select * from pet;
select * from task;