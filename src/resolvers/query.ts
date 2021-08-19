import { IResolvers } from "@graphql-tools/utils";
import { database } from '../data/data.store';

const query : IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, {id}): any {
            const resultado = database.estudiantes.filter(estudiante => estudiante.id === id)[0];
            if(resultado == undefined) {
                return {
                    id: '-1',
                    name: `Nada encontrado con el id: ${id}`,
                    email: '',
                    courses: []
                }
            } 
            return resultado;
        },
        cursos(): any {
            return database.cursos;
        },
        curso(__: void, {curso}): any {
            const resultado = database.cursos.filter(curso_ => curso_.id === curso)[0];
            if(resultado == undefined) {
                return {
                    id: '-1',
                    title: `Nada encontrado con el curso: ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            } 
            return resultado;
        }
    }
};

export default query;