-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
-- CREATE DATABASE acquatec;

create database fitness;

use fitness;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table refeicoes (
	idRefeicao int primary key auto_increment,
    nomeRef varchar (50),
    tipo char (13), constraint checktipo check (tipo = 'Café da manhã' or tipo = 'Almoço' or tipo = 'Café da tarde' or tipo = 'Janta'),
    horaRef datetime,
    fkUsuarioRef int,
    foreign key (fkUsuarioRef) references usuario (idUsuario)
);

create table exercicios (
	idExercicio int primary key auto_increment,
    nomeExerc varchar (50),
    dificuldade char (13), constraint chekdif check (dificuldade = 'iniciante' or dificuldade = 'intermediario' or dificuldade = 'avancado'),
    horaExerc datetime,
    fkUsuarioExerc int,
    foreign key (fkUsuarioExerc) references usuario (idUsuario)
);

select * from Usuario;


-- ------------------------------------------------------------------------



create database fitness;

use fitness;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table refeicao (
	idRefeicao int primary key auto_increment,
    nomeRef varchar (50),
    fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario)
);

create table exercicios (
	idExercicio int primary key auto_increment,
    nomeExerc varchar (50),
    dificuldade char (13), constraint chekdif check (dificuldade = 'iniciante' or dificuldade = 'intermediario' or dificuldade = 'avancado'),
    horaExerc datetime,
    fkUsuario int,
    foreign key (fkUsuario) references usuario (idUsuario)
); 

insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuario) values
	('abdomen', 'iniciante', '2022-06-05 15:00:00', 2);

select * from usuario;
select * from exercicios;
select nomeExerc, dificuldade, horaExerc from exercicios where fkUsuario = 1;
select count(idExercicio) as 'qtdexerc' from exercicios where fkUsuario = 2; 

    SELECT COUNT(*) AS 'qtdExercDia' , date_format(horaExerc, '%w') AS 'diaSemana'
        FROM exercicios WHERE WEEK(horaExerc) = week(current_timestamp()) 
			AND fkUsuario = 2 and date_format(horaExerc, '%w')
                group BY day(horaExerc);

select nomeExerc, dificuldade, horaExerc from exercicios where fkUsuario = 1 GROUP BY nomeExerc;












-- USE acquatec;

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300)
-- );

-- /* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );


-- /* para sql server - remoto - produção */
-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50),
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	descricao VARCHAR(300)
-- );

-- /* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

-- CREATE TABLE medida (
-- 	id INT PRIMARY KEY IDENTITY(1,1),
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
-- );

-- --------------------------criptografado ----------------------------------------------------

-- CREATE DATABASE acquatec;

-- USE acquatec;

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha varbinary(150)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300)
-- );

-- /* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );

-- insert into usuario (nome, email, senha) values
-- ('Guilherme', 'gui@ht.com', aes_encrypt('guisenha', 'thiagosafado'));

-- select id, nome, email, aes_decrypt(senha, 'thiagosafado') as senha from usuario 
-- where email = 'gui@ht.com' and senha = aes_encrypt('gui1', 'gui');

-- update usuario set senha = aes_encrypt('gui1', 'gui') where id = 1;

-- select * from usuario;
