module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
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
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
