import GetConnection from "../conexion/connection";
import { catalogo } from "../model/catalogo";

export const listarCatalogo = async (): Promise<catalogo[]> => {
  try {
    let sql = "SELECT * FROM catalogo";
    const pool = await GetConnection();
    let rs = await pool.query<catalogo>(sql);
    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export async function crearCatalogo(C: catalogo): Promise<boolean> {
  try {
    let sql = `INSERT INTO catalogo VALUES('${C.Nombre}', '${C.img}', '${C.descripcion}')`;
    const pool = await GetConnection();
    let rs = await pool.query(sql);
    if (rs != undefined) {
      return rs.rowsAffected.length == 2;
    }
    return false;
  } catch (error) {
    throw error;
  }
}
