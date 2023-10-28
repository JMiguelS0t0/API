import * as DaoServicio from "../dao/servicio.dao";
import { servicios } from "../model/servicios";

export const getServicios = async (): Promise<servicios[]> => {
  try {
    let s: servicios[] = await DaoServicio.listarServicio();
    return s;
  } catch (error) {
    throw error;
  }
};

export const PostServicio = async (S: servicios): Promise<boolean>=>{
    try {
        return DaoServicio.crearServicio(S);
    } catch (error) {
        throw error;
    }
}
