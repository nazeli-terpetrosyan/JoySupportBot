import make from '../core/util/make'
import { stateManagerConstructor } from '../core/convo-engine/state-manager'
import log from '../core/util/logging'

export const adviceModule = make.module({
    id: 'advice',
    submodules: [],
    convoSegments: [
        {
            id: '/advice',
            convo: [
                {
                    type: 'text',
                    text: `Here you can find advice on various things - your daily activities, health and lifestyle.`
                }
            ],
            choices: [
                {
                    text: 'Activities',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/activities'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Health',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/health'],
                                },
                            ],
                        },
                    ],
                },
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
            ],
        },
        {
            id: '/activities',
            convo: [
                {
                    type: 'text',
                    text: `Here you will find help related to your hobbies and other activities you may be interested in!

Now choose one of these activities and do it! You’ll have fun, trust me! You can talk to me about it later. 

1. Read a book 📖 
2. Take a walk outside 🍃
3. Listen to music 🎶 
4. Play a sport ⚾️
5. Do art (drawing, painting, etc.) 🎨 
6. Watch a movie/TV 🍿 

You can also do something else you love! But remember, sleeping doesn’t count as an option. 😉

`,
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
                    text: 'Go back to advice center',
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
            id: '/health',
            convo: [
                {
                    type: 'text',
                    text: `Here you will find advice which will help you stay healthy and happy!`,
                },
            ],
            choices: [
                {
                    text: 'Sleep',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/sleep'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Diet',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/diet'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '/diet',
            convo: [
                {
                    type: 'text',
                    text: `Are you struggling to decide what to eat today that's both healthy and delicious? I’ve got you! 😋

Have you noticed a change in your eating habits?
`,
                }
            ],
            choices: [
                {
                    text: 'Yes',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/dietYes'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'No',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/dietNo'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '/dietYes',
            convo: [
                {
                    type: 'text',
                    text: `Check out this great <a href = 'https://www.webmd.com/depression/guide/diet-recovery#1
'>article</a> about healthy eating habits I found for you! 🍏

Remember that skipping meals or not drinking enough water throughout the day will harm you in the long run. You must not deprive your body of the vital nutrients it needs.
`,
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
                    text: 'Go back to advice center',
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
            id: '/dietNo',
            convo: [
                {
                    type: 'text',
                    text: `That’s good to hear! Remember, you may be prone to falling ill if you change your diet drastically. Don’t eat too much or too less!
3 full meals in a day. 🍎🍝🍚
`,
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
                    text: 'Go back to advice center',
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
            id: '/sleep',
            convo: [
                {
                    type: 'text',
                    text: `Your sleep is important. You should sleep around 7-8 hours a night ideally. 💤 

Sleeping less than 7 hours, such as 5-6 hours, is harmful for your health in the long run. You may not notice this now, but it is bad, trust me.

How many hours do you sleep at night?
`,
                }
            ],
            choices: [
                {
                    text: 'Less than 7',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/badSleep'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '6-7',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/goodSleep'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '7-8',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/goodSleep'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'More than 8',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/badSleep'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '/badSleep',
            convo: [
                {
                    type: 'text',
                    text: `‘This is a bit out of the safe range. Remember that 7-8 hours is the best for your well-being and functioning in your daily life. You do not want to have headaches, fatigue or body pains during your day! 🤕’

Some advice:

• Make a sleep schedule (on paper or digitally, where you can see it) 📝 
• Avoid excessive physical activity during the day so you don’t get tired 🏃‍♀️
• Avoid looking at your device screen unnecessarily (constant exposure to radiation can cause insomnia)📱 

<i>Even if your body has difficulty coming to rest, tell yourself to fall asleep. Do not allow your body to control your mind and make you stay awake late. 🔮 </i>

`,
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
                    text: 'Go back to advice center',
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
            id: '/goodSleep',
            convo: [
                {
                    type: 'text',
                    text: `You are in the right range! Remember that 7-8 hours is the best for your health. Keep it up! ✔️`,
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
                    text: 'Go back to advice center',
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
            id: '/thinkPositive',
            convo: [
                {
                    type: 'text',
                    text: `I’m sure you have a negative voice in the back of your head, telling you stuff you wish you did not have to listen to.
                    
Do you experience deeply negative thoughts about yourself often?`,
                },
            ],
            choices: [
                {
                    text: 'Yes',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/badT'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'No',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['advice', '/noBadT'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '/badT',
            convo: [
                {
                    type: 'text',
                    text: `Here’s some ways to get rid of the negativity and welcome positivity.

- Meditate or do yoga 🧘🏾‍: This helps release your stress and channel positive energy throughout your body and mind.

- Keep a gratitude journal: List all the things you are grateful for. It could be family or friends, a person you admire, your pet, your home, or even something like . There is always something you should be grateful for!

- Maintain a diary: Write about your feelings and thoughts daily or weekly. You can describe your day. It’s a good way to vent out 😉

- Use my ‘Vent Out’ channel! You are always welcome 😊

These methods really help, trust me!

Here’s an <a href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/positive-thinking/art-20043950">article</a> I found for you:
`,
                },
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
                    text: 'Go back to advice center',
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
            id: '/noBadT',
            convo: [
                {
                    type: 'text',
                    text: `That’s great! Remember, if you feel a little down at any time, you can always talk to me...`,
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
                    text: 'Go back to advice center',
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
