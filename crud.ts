import { prisma } from "./lib/prisma";

async function run() {
    const createUser = await prisma.user.create({
        data: {
            name: 'faruk bhai',
            email: 'faruk@gn.com'
        }
    })

    console.log('created user', createUser);
}

run()