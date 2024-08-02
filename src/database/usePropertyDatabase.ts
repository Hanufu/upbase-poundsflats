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
  

export function usePropertyDatabase(){
    const database = useSQLiteContext()

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

            return { insertedRowId }
        } catch (error) {
            throw error;
            
        }
    }

    return { create }
}