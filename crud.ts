import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'faruk bhai',
    //         email: 'faruk@gn.com'
    //     }
    // })

    // console.log('created user', createUser);

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'faruk bhai',
    //         content: 'faruk@gn.com',
    //         authorId: 1
    //     }
    // })

    // console.log('created post', createPost);
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'web dev at ph',
    //         userId: 1
    //     }
    // })

    // console.log('created profile', createProfile);

    // retrive all data
    // const users = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profile: true
    //     // },
    //     select: {
    //         posts: true,
    //         profile: true,
    //         id: true, 
    //         name: true, 
    //         email: true
    //     }
    // })

    // console.dir(users, {depth: Infinity});


    const updateUser = await prisma.profile.update({
        where: {
            userId: 1
        },
        data: {
            bio: 'web developer and mentor',
            dateOfBirth: '2025-09-20T14:23:05.455Z'
        },
        select: {
            id: true, 
            bio: true,
            user: {
                select: {
                    name: true,
                    email: true
                }
            }
        }
    })

    console.dir(updateUser, {depth: Infinity});
}

run()