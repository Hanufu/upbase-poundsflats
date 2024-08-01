import { type SQLiteDatabase } from 'expo-sqlite'

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS properties (
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
    `)
} 