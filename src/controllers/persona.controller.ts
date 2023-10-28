import { Persona } from "../model/persona"
import * as DaoPersona from '../dao/persona.dao'

export const GetPersonas = async (): Promise<Persona[]> => {
    try {
        let p: Persona[] = await DaoPersona.ListarPersonas();
        return p;
    } catch (error) {
        throw error;
    }
}


export const PostPersona = async (P: Persona): Promise<boolean> => {
    try {
        return DaoPersona.CrearPersona(P);
    } catch (error) {
        throw error;
    }
}