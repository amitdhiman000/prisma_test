import { buildSchema } from "graphql";
import express_graphql from "express-graphql";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function createUser(args)
{
    try {
        const user = await prisma.user.create({
            data: {
                name: args.name,
                email: args.email,
                password: args.password,
                gender: args.gender
            }
        });
        return user;
    } catch(error) {
        console.log(error);
    }
    return {};
}

async function users()
{
    try {
        const usersData = await prisma.user.findMany();
        //console.log(usersData);
        return usersData;
    } catch(error) {
        console.log(error);
    }
    return [];
}


const schemaDef = `
type User {
    id: Int
    name: String!
    email: String!
    password: String!
    gender: String!
    birthday: String
}
type Query {
    users: [User]
}
type Mutation {
    createUser(name: String, email: String, password: String, gender: String): User
}
`;
const schema = buildSchema(schemaDef);

const resolvers = {
    users: () => users(),
    createUser: (args: any) => createUser(args)
}

const graphql_controller = express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
});

export default graphql_controller;