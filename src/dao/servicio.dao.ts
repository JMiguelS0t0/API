import GetConnection from "../conexion/connection";
import { servicios } from "../model/servicios";

export const listarServicio = async (): Promise<servicios[]> => {
  try {
    let sql = "SELECT * FROM servicios";
    const pool = await GetConnection();
    let rs = await pool.query<servicios>(sql);
    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export async function crearServicio(S: servicios): Promise<boolean> {
  try {
    let sql = `INSERT INTO catalogo VALUES('${S.img}', '${S.descripcion}')`;
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
