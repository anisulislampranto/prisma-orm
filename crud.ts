import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'faruk bhai',
    //         email: 'faruk@gn.com'
    //     }
    // })

    // console.log('created user', createUser);

    const createPost = await prisma.post.create({
        data: {
            title: 'faruk bhai',
            content: 'faruk@gn.com',
            authorId: 1
        }
    })

    console.log('created post', createPost);
}

run()