import { useSQLiteContext } from "expo-sqlite";

export type PropertyDatabase = {
    id?: number; 
    nome_imovel: string;
    descricao: string;
    cep: string;
    endereco: string;
    numero: number;
    complemento: string;
    cidade: string;
    uf: string;
    preco?: number;
    imagem?: string;
    disponivel?: boolean;
};

export function usePropertyDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<PropertyDatabase, "id" | "preco" | "imagem" | "disponivel">) {
        const statement = await database.prepareAsync(
            "INSERT INTO property (nome_imovel, descricao, cep, endereco, numero, complemento, cidade, uf) VALUES ($nome_imovel, $descricao, $cep, $endereco, $numero, $complemento, $cidade, $uf)"
        );

        try {
            const result = await statement.executeAsync({
                $nome_imovel: data.nome_imovel,
                $descricao: data.descricao,
                $cep: data.cep,
                $endereco: data.endereco,
                $numero: data.numero,
                $complemento: data.complemento,
                $cidade: data.cidade,
                $uf: data.uf
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return { insertedRowId };
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function listAll() {
        try {
            const query = "SELECT * FROM property"
           
            const response = await database.getAllAsync<PropertyDatabase>(query)

            return response.map((row: any) => ({
                id: row.id,
                nome_imovel: row.nome_imovel,
                descricao: row.descricao,
                cep: row.cep,
                endereco: row.endereco,
                numero: row.numero,
                complemento: row.complemento,
                cidade: row.cidade,
                uf: row.uf,
                preco: row.preco ?? 98,
                imagem: row.imagem,
                disponivel: row.disponivel,
            }));
        } catch (error) {
            throw error;
        }
    }

    return { create, listAll };
}
