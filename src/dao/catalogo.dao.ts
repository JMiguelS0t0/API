import GetConnection from "../conexion/connection";
import { catalogo } from "../model/catalogo";

export const listarCatalogo = async (): Promise<catalogo[]> => {
  try {
    let sql = "SELECT * FROM catalogo";
    const pool = await GetConnection();
    let rs = await pool.query<catalogo[]>(sql);
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
    let sql = `INSERT INTO catalogo(nombre, descripcion, img, items) VALUES('${C.nombre}','${C.descripcion}', '${C.img}', '${C.items}')`;
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
