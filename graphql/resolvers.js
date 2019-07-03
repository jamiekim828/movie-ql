import { people, getById } from './db'

const resolvers = {
    Query: {
        person:() => people,
        person: (_, {id}) => getById(id)
    }
};

export default resolvers