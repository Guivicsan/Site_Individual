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
    tipo char (11), constraint checkTipo check (tipo = 'Café da manhã' or tipo = 'Almoço' or tipo = 'Café da tarde' or tipo = 'Janta'),
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

select nomeRef, tipo, DATE_FORMAT(horaRef, '%d/%m/%Y %Hh%i') as 'horaRef' from refeicoes where fkUsuarioRef = 1;

select * from refeicoes;
select * from exercicios;
select * from usuario;