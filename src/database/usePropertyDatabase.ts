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
            "INSERT INTO property (nome_imovel, descricao, cep, endereco, numero, complemento, cidade, uf) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        );

        try {
            const result = await statement.executeAsync([
                data.nome_imovel,
                data.descricao,
                data.cep,
                data.endereco,
                data.numero,
                data.complemento,
                data.cidade,
                data.uf
            ]);

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
            const query = "SELECT * FROM property";
            const response = await database.getAllAsync<PropertyDatabase>(query);

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

    async function update(id: number, data: Partial<Omit<PropertyDatabase, "id">>) {
        const statement = await database.prepareAsync(
            "UPDATE property SET nome_imovel = ?, descricao = ?, cep = ?, endereco = ?, numero = ?, complemento = ?, cidade = ?, uf = ?, preco = ?, imagem = ?, disponivel = ? WHERE id = ?"
        );

        try {
            // Preencher valores `undefined` com valores padrão, como `null`
            const values = [
                data.nome_imovel ?? null,
                data.descricao ?? null,
                data.cep ?? null,
                data.endereco ?? null,
                data.numero ?? null,
                data.complemento ?? null,
                data.cidade ?? null,
                data.uf ?? null,
                data.preco ?? null,
                data.imagem ?? null,
                data.disponivel ?? null,
                id
            ];

            await statement.executeAsync(values);
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function deleteProperty(id: number) {
        const statement = await database.prepareAsync(
            "DELETE FROM property WHERE id = ?"
        );

        try {
            await statement.executeAsync([id]);
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    return { create, listAll, update, deleteProperty };
}
