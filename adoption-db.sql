database : cdemo
backend : springboot(childadoption-backend)
frontend: react(projectChildAdoption)

Tables :

1. users

create table users(id bigint(15) auto_increment primary key, user_name varchar(85), email varchar(45), password varchar(45), cpassword varchar(45), security_que varchar(255), answer varchar(255));

 desc users;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | bigint       | NO   | PRI | NULL    | auto_increment |
| user_name    | varchar(85)  | YES  |     | NULL    |                |
| email        | varchar(45)  | YES  |     | NULL    |                |
| password     | varchar(45)  | YES  |     | NULL    |                |
| cpassword    | varchar(45)  | YES  |     | NULL    |                |
| security_que | varchar(255) | YES  |     | NULL    |                |
| answer       | varchar(255) | YES  |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+

2 childes

create table childes(id bigint(11) auto_increment primary key, age int(11), agency_namee varchar(255), child_name varchar(85), desc_child varchar(255), gender varchar(10), handicaped varchar(10), img longblob);

desc childes;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | bigint       | NO   | PRI | NULL    | auto_increment |
| age          | int          | YES  |     | NULL    |                |
| agency_namee | varchar(255) | YES  |     | NULL    |                |
| child_name   | varchar(85)  | YES  |     | NULL    |                |
| desc_child   | varchar(255) | YES  |     | NULL    |                |
| gender       | varchar(10)  | YES  |     | NULL    |                |
| handicaped   | varchar(10)  | YES  |     | NULL    |                |
| img          | longblob     | YES  |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+

3. agencies
create table agencies(id bigint(15) auto_increment primary key, agency_name varchar(255), astate varchar(40), district varchar(40), address varchar(255), contact_info varchar(85), total_childs int(11), adoptable_childs int(11));

desc agencies;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| id               | bigint       | NO   | PRI | NULL    | auto_increment |
| agency_name      | varchar(255) | YES  |     | NULL    |                |
| astate           | varchar(40)  | YES  |     | NULL    |                |
| district         | varchar(40)  | YES  |     | NULL    |                |
| address          | varchar(255) | YES  |     | NULL    |                |
| contact_info     | varchar(85)  | YES  |     | NULL    |                |
| total_childs     | int          | YES  |     | NULL    |                |
| adoptable_childs | int          | YES  |     | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+




4. registers
 
  create table registers(id bigint(11) auto_increment primary key,childid bigint(11), email varchar(55), parents_img longblob, martial_status varchar(45), mparent_name varchar(55), fparent_name varchar(55), mage int(11), fage int(11), moccupation varchar(55), foccupation varchar(55), mincome int(11), fincome int(11), mwhours int(11), fwhours int(11), childrens int(11), address varchar(255), city varchar(45), astate varchar(45), district varchar(45), pincode int(11), mobile bigint(15), aadharno bigint(30), reg_date varchar(55), is_active int(10) default '1', document longblob, hsr varchar(255), status varchar(100), gender varchar(12));
  
  desc registers;
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| id             | bigint       | NO   | PRI | NULL    | auto_increment |
| childid        | bigint       | YES  |     | NULL    |                |
| email          | varchar(55)  | YES  |     | NULL    |                |
| parents_img    | longblob     | YES  |     | NULL    |                |
| martial_status | varchar(45)  | YES  |     | NULL    |                |
| mparent_name   | varchar(55)  | YES  |     | NULL    |                |
| fparent_name   | varchar(55)  | YES  |     | NULL    |                |
| mage           | int          | YES  |     | NULL    |                |
| fage           | int          | YES  |     | NULL    |                |
| moccupation    | varchar(55)  | YES  |     | NULL    |                |
| foccupation    | varchar(55)  | YES  |     | NULL    |                |
| mincome        | int          | YES  |     | NULL    |                |
| fincome        | int          | YES  |     | NULL    |                |
| mwhours        | int          | YES  |     | NULL    |                |
| fwhours        | int          | YES  |     | NULL    |                |
| childrens      | int          | YES  |     | NULL    |                |
| address        | varchar(255) | YES  |     | NULL    |                |
| city           | varchar(45)  | YES  |     | NULL    |                |
| astate         | varchar(45)  | YES  |     | NULL    |                |
| district       | varchar(45)  | YES  |     | NULL    |                |
| pincode        | int          | YES  |     | NULL    |                |
| mobile         | bigint       | YES  |     | NULL    |                |
| aadharno       | bigint       | YES  |     | NULL    |                |
| reg_date       | varchar(55)  | YES  |     | NULL    |                |
| is_active      | int          | YES  |     | 1       |                |
| document       | longblob     | YES  |     | NULL    |                |
| hsr            | varchar(255) | YES  |     | NULL    |                |
| status         | varchar(100) | YES  |     | NULL    |                |
| gender         | varchar(12)  | YES  |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+