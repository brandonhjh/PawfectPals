#create database heap23;

create table user
(
	 username varchar(15) not null,
	 password varchar(15),
	 userPicture BLOB,
	 constraint user_pk primary key(username)
);

create table groups
(
    groupID int not null,
	groupName varchar(15),
	constraint groups_pk primary key(groupID)
);
 
create table userGroup
(
    groupID int not null,
	username varchar(15),
	constraint userGroup_pk primary key(groupID, username),
	constraint usergroup_fk1 foreign key(username) references user(username),
	constraint usergroup_fk2 foreign key(groupID) references groups(groupID)
);

create table pet
(
    petName varchar(15) not null,
    groupID int not null,
    breed varchar(30),
    birthday datetime,
    petPicture BLOB,
	constraint pet_pk primary key(petName, groupID),
    constraint pet_fk1 foreign key(groupID) references groups(groupID)
);

create table task
(
    taskID int not null,
    groupID int not null,
    taskDateTime datetime,
    petName varchar(15),
    title varchar(40),
    notes varchar(100),
    isCompleted boolean,
    #taskGroupID int,
    people varchar(40),
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
    "2023-06-15",
    "Leo",
    "Leo's dinner",
    "Remember to top up food!",
    false,
    "Brandon, Ryan, Sam"
);

#SELECT username FROM user LIMIT 1;

