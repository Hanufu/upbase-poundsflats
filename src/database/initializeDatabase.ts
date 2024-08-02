import { SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
    try {
        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS property (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_imovel TEXT NOT NULL,
            descricao TEXT,
            cep TEXT,
            endereco TEXT,
            numero INTEGER,
            complemento TEXT,
            cidade TEXT,
            uf TEXT,
            preco REAL,
            imagem TEXT,
            disponivel BOOLEAN
          );
        `);
    } catch (error) {
        console.error("Falha ao inicializar o banco de dados:", error);
        throw new Error("Falha ao inicializar o banco de dados");
    }
}
