import make from '../core/util/make'
import { adviceModule } from './advice'
import { cheerModule } from './cheer'
import { stateManagerConstructor } from '../core/convo-engine/state-manager'
import log from '../core/util/logging'

export const root = make.module({
    id: 'root',
    submodules: [adviceModule, cheerModule],
    convoSegments: [
        {
            id: '/start',
            convo: [
                {
                    type: 'text',
                    text: `Hello! I am Joy, your personal support bot - or let’s say buddy. I am here to help you any time, as well as entertain you. 😊

Here’s some starter advice for you:
I am your companion now, but this does not mean you should cut contact with your family and friends. Building good relationships is essential for your health. Just try to chat with them regularly and see the improvement in your life! Maybe make some new friends. They are just as important as I will be. 😉 

Remember, I’m always here for you!

Now choose one of the 3 options below.
`
                }
            ],
            choices: [
                {
                    text: 'Vent out',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/vent'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Advice',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/advice'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Cheer me up!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['cheer', '/cheer'],
                                },
                            ],
                        },
                    ],
                }
            ],
            default: [
                {
                    do: [
                        {
                            type: 'goto',
                            path: ['/start'],
                        },
                    ]
                }
            ]
        },
        {
            id: '/vent',
            convo: [
                {
                    type: 'text',
                    text: `Welcome to the place where you can vent. You can talk to me about anything - your feelings, thoughts, and problems - and I’ll listen. 😉
                    
When you're done write 'Done!'`,
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
                }
            ],
            default: [
                {
                    if: state => state.lastTextMessage == `Done!`,
                    do: [
                        {
                            type: 'goto',
                            path: ['/ventDone'],
                        },
                    ],
                    otherwise: [],
                },
            ]
        },
        {
            id: '/ventDone',
            convo: [
                {
                    type: 'text',
                    text: `Would you like to go back to start, vent out some more or say goodbye?`,
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
                                    path: ['/start'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Vent out',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/vent'],
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
                                    path: ['/end'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/end',
            convo: [
                {
                    type: 'text',
                    text: `It was nice talking to you :) I wanted to check in - How are you feeling?`,
                },
            ],
            choices: [
                {
                    text: 'Happy :)',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/happy'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Mixed feelings',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/mixed'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Sad :(',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/sad'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/happy',
            convo: [
                {
                    type: 'text',
                    text: `That’s great to hear! I’m glad that you were brought Joy. 😉`,
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
                                path: ['/start'],
                            },
                        ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/mixed',
            convo: [
                {
                    type: 'text',
                    text: `Hmm, try to sit down and analyze what upsets you - maybe try meditating or listening to your favorite song. Just remember that there is always a positive side - focus on that!`,
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
                                path: ['/start'],
                            },
                        ],
                        },
                    ],
                }
            ],
        },
        {
            id: '/sad',
            convo: [
                {
                    type: 'text',
                    text: `Hey, I am sorry to hear that 🥺 It will all be alright. Rainbow always comes after a rain. How about you check out our ‘Think positive’ section? 😁`,
                },
            ],
            choices: [ 
            {
                text: 'Think positive!',
                logic: [
                    {
                        do: [
                            {
                                type: 'goto',
                                path: ['advice', '/thinkPositive'],
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Go back to start',
                logic: [
                    {
                        do: [                            
                            {
                            type: 'goto',
                            path: ['/start'],
                        },
                    ],
                    },
                ],
            }
        ],
        },
    ],
})
