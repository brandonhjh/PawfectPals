CREATE DATABASE heap23;

CREATE TABLE user
(
	 username varchar(15) not null,
	 password varchar(15),
	 userPicture LONGBLOB,
	 constraint user_pk primary key(username)
);

CREATE TABLE groups
(
  groupID int not null AUTO_INCREMENT,
	groupName varchar(15),
	constraint groups_pk primary key(groupID)
);
 
CREATE TABLE userGroup
(
  groupID int not null,
	username varchar(15),
	constraint userGroup_pk primary key(groupID, username),
	constraint usergroup_fk1 foreign key(username) references user(username),
	constraint usergroup_fk2 foreign key(groupID) references groups(groupID)
);

CREATE TABLE pet
(
  petName varchar(15) not null,
  groupID int not null,
  breed varchar(30),
  birthday datetime,
  petPicture BLOB,
	constraint pet_pk primary key(petName, groupID),
  constraint pet_fk1 foreign key(groupID) references groups(groupID)
);

CREATE TABLE task
(
    taskID int not null,
    groupID int not null,
    taskDate date, // YYYY-MM-DD
    taskTime time, // HH:MM:SS
    petName varchar(15),
    title varchar(40),
    notes varchar(100),
    isCompleted boolean,
    people varchar(100),
    constraint task_pk primary key(taskID, groupID),
    constraint task_fk1 foreign key(groupID) references groups(groupID)
);

INSERT INTO user
VALUES ("brandon", "apple123", null);

INSERT INTO groups
VALUES (100, "Safe Space");

INSERT INTO usergroup
VALUES (100, "brandon");

INSERT INTO pet
VALUES ("Leo", 100, "Husky", "2001-01-01", null);

INSERT INTO task
VALUES (
    200,
    100,
    '2023-06-15',
    '14:30:00',
    'Leo',
    'Leo''s dinner',
    'Remember to top up food!',
    false,
    'Brandon, Ryan, Sam'
);