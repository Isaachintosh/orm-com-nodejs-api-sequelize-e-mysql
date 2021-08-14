'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pessoas', [
      {
				name: 'Ana Souza',
				ativo: true,
				email: 'ana@ana.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@marcos.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Sandra Gomes',
				ativo: false,
				email: 'sandra@sandra.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Paula Morais',
				ativo: true,
				email: 'paula@paula.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Sergio Lopes',
				ativo: true,
				email: 'sergio@sergio.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Paulo Silveira',
				ativo: true,
				email: 'paulo.silveira@alura.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Juliana Amoasei',
				ativo: true,
				email: 'juliana.amoasei@alura.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Guilherme Lima',
				ativo: true,
				email: 'gui.lima@alura.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
