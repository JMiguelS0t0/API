import GetConnection from "../conexion/connection";
import { Persona } from "../model/persona";

export const ListarPersonas = async (): Promise<Persona[]> => {
    try {
        let tsql = "SELECT * FROM Persona";
        const pool = await GetConnection();
        let rs = await pool.query<Persona>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearPersona(p: Persona): Promise<boolean> {
    try {
        let sql = `INSERT INTO Persona(Nombre) VALUES('${p.Nombre}')`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}