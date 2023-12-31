import { catalogo } from "../model/catalogo";
import * as DaoCatalogo from "../dao/catalogo.dao";

export const getCatalogo = async (): Promise<catalogo[]> => {
  try {
    let c: catalogo[] = await DaoCatalogo.listarCatalogo();
    return c;
  } catch (error) {
    throw error;
  }
};

export const postCatalogo = async (C: catalogo): Promise<boolean> => {
  try {
    return DaoCatalogo.crearCatalogo(C);
  } catch (error) {
    throw error;
  }
};
