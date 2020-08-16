import make from '../core/util/make'
import { stateManagerConstructor } from '../core/convo-engine/state-manager'
import log from '../core/util/logging'

export const cheerModule = make.module({
    id: 'cheer',
    submodules: [],
    convoSegments: [
        {
            id: '/cheer',
            convo: [
                {
                    type: 'text',
                    text: `This is the place where you can get a mood boost!

Which one do you prefer?`
                }
            ],
            choices: [
                {
                    text: 'Jokes',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/jokes'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Cute animal photos',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/photos'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/jokes',
            convo: [
                {
                    type: 'text',
                    text: `Here are some jokes to make you laugh!

• What did the female firefly say to the other female firefly? You glow, girl.

• Did you hear about the claustrophobic astronaut? He just needed a little space.

• Why don't scientists trust atoms? Because they make up everything.

• What do you call a fake noodle? An impasta!

• What did the shark say when he ate the clownfish? This tastes a little funny.

• What is an astronaut's favorite part of a laptop? The space bar.

• What do you call an apology written in dots and dashes? Re-morse code.

• Why did the Oreo go to the dentist? Because he lost his filling.

• How do you throw a space party? You planet.
`
                }
            ],
            choices: [
                {
                    text: 'Go back to start',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Go back to Cheer me up! center',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/cheer'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Bye :)',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/end'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/photos',
            convo: [
                {
                    type: 'text',
                    text: `Which animal you like more?`
                }
            ],
            choices: [
                {
                    text: 'Puppies',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/puppy'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Kittens',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/kitten'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '/puppy',
            convo: [
                {
                    type: 'image',
                    src: 'https://img.osjar.net/uploads/2017/08/12-Cutest-puppy-dogs.jpg'
                },
                {
                    type: 'image',
                    src: 'https://data1.ibtimes.co.in/en/full/645417/norbert-therapy-dog-cute.jpg'
                },
                {
                    type: 'image',
                    src: 'https://static.boredpanda.com/blog/wp-content/uploads/2018/07/dog-grooming-transformations-yoriko-hamachiyo-japan-5b39dcdd9b30f__700.jpg'
                },
                {
                    type: 'image',
                    src: 'https://3.bp.blogspot.com/-QRRf7rC3TZY/WKC1bI5ZyZI/AAAAAAABuX4/ERoXzvDoMgseK_q834qxj3Xt2j_9Aa0nwCLcB/s1600/cute-dogs-164-49.jpg'
                },
                {
                    type: 'image',
                    src: 'https://s.abcnews.com/images/Health/puppies-01-stock-gty-jef-180920_hpMain_16x9_992.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/736x/38/2d/20/382d206223e69356f567762c428802c6.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/b1/08/79/b10879d92a351201d0a1738037709e2b.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/a8/e2/09/a8e209000fdba6bf308575e1744cd4da.png'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/736x/7d/3f/6b/7d3f6bf1b74414aa00a54085b9b2c07e.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/f7/59/f8/f759f8a5e210e13e8ddb935a85289790.jpg'
                },
                {
                    type: 'image',
                    src: 'https://bemorepanda.com/files/2020-08-10/images/591888.jpeg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/e2/9d/49/e29d49d7b9c0521bdfade081ac40a3c0.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/20/e8/2a/20e82a1e2d5f9f89e5a27af61b5f2644.jpg'
                }
            ],
            choices: [
                {
                    text: 'Go back to start',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Go back to Cheer me up! center',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/cheer'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Bye :)',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/end'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/kitten',
            convo: [
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/64/5c/03/645c03d80fd4ad0ae9d7da9da4b3e4ff.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/0b/71/a8/0b71a839abcdf62e3dcc79806317d31d.jpg'
                },
                {
                    type: 'image',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Cute-kittens-12929201-1600-1200.jpg'
                },
                {
                    type: 'image',
                    src: 'https://image.winudf.com/v2/image1/Y29tLmhkd2Nhci5jYXQyMDE1MDExMV9zY3JlZW5fMF8xNTY3MDE2NDkwXzA4OQ/screen-0.jpg?fakeurl=1&type=.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/d0/b3/8b/d0b38b37577e8f560af9ad9b6a375cd4.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/b6/d7/9c/b6d79c6e1ee126587d2fd852c07e9b73.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/474x/1a/f4/35/1af43542e309f22433e9477055351063.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/564x/05/41/31/054131020d69aaf20f967024fc4d70dd.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/736x/ee/46/44/ee4644f7f01fd44eafb1b29c23862b95.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/06/9a/85/069a85a64260cdd7ec92f695b0bb576c.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/84/cb/c9/84cbc938b5594499ca68851b4834aa81.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/736x/67/ad/ca/67adcaa685d33388666a97266ec09ef8.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/76/12/37/761237d705a035bed68e03c3ff013e3d.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/736x/6d/1a/8d/6d1a8df2a8bc4c6546aa7e1ce9f9352f--baby-animals-baby-cats.jpghttps://i.pinimg.com/originals/76/12/37/761237d705a035bed68e03c3ff013e3d.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/45/8b/2b/458b2b9d5a6f7b04367529099175c47f.jpg'
                },
                {
                    type: 'image',
                    src: 'https://i.pinimg.com/originals/ff/85/78/ff8578b8921602c859f7de5a839079a2.jpg'
                },
            ],
            choices: [
                {
                    text: 'Go back to start',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Go back to Cheer me up! center',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/cheer'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Bye :)',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/end'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
    ],
})
