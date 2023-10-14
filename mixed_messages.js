function generate_message(category) {
    switch (category) {
        case 'inspiration':
            generate_inspiration();
            break;
        case 'horoscope':
            generate_horoscope();
            break;
        case 'fortune':
            generate_fortune();
            break;
        default:
            console.log('Invalid input.\nPlease enter \'fortune\', \'horoscope\', or \'inspiration\'');
    }
}

function generate_horoscope() {
    msg = {'sign': ['sun', 'moon', 'cancer', 'aries'],
           'luck': ['good', 'bad', 'neutral', 
                    'Unable to determine your luck'],
           'youShould': ['trust no one', 
                         'only trust your closest allies',
                         'be careful next week',
                         'be cautious']
          };
    for (key in msg) {
        rand = Math.floor(Math.random() * 4);
        if (key === 'sign') {
            console.log(`Your sign is ${msg[key][rand]}\n`);
        } else if (key === 'luck') {
            if (rand === 3) {
                console.log(msg[key][rand], '\n');
            } else {
                console.log(`Your luck is ${msg[key][rand]}\n`);
            }
        } else {
            console.log(`You should: "${msg[key][rand]}"\n`);
        }
    }
}

function generate_inspiration() {
    historical_quotes = [
                          '"All our dreams can come true, if we have the courage to'
                            + ' pursue them."\n  - Walt Disney\n',
                          '"The secret of getting ahead is getting started."'
                            + '\n  - Mark Twain\n',
                          '"Don\'t limit yourself. Many people limit themselves to'
                            + ' what they think\nthey can do. You can go as far as your' 
                            + ' mind lets you. What you believe,\nremember, you can' 
                            + ' achieve."\n  - Mary Kay Ash\n',
                          '"When one door of happiness closes, another opens; but'
                            + ' often we look so\nlong at the closed door that we do not'    
                            + ' see the one which has been opened\nfor us."'
                            + '\n  - Helen Keller\n'
                        ];
    modern_quotes =     [
                          '"I\'ve missed more than 9,000 shots in my career. I\'ve lost'
                            + ' almost 300\ngames. 26 times I\'ve been trusted to take'
                            + ' the game winning shot and missed.\nI\'ve failed over and' 
                            + ' over and over again in my life, and that is why I\n'
                            + 'succeed."\n  - Michael Jordan\n',
                          '"If something is important enough, even if the odds are'
                            + ' stacked against\nyou, you should still do it."\n  - Elon Musk\n',
                          '"I now tried a new hypothesis: It was possible that I was'
                            + ' more in charge\nof my happiness than I was allowing myself'
                            + ' to be."\n  - Michelle Obama\n',
                          '"I think you end up doing the stuff you were supposed to do'
                            + ' at the time you\nwere supposed to do it."'
                            + '\n  - Robert Downey Jr\n'
                        ];
    ancient_proverbs =  [
                          '"The best time to plant a tree was 20 years ago. The'
                            + ' second best time is now."\n  - Chinese Proverb\n',
                          '"Sunshine all the time makes a desert."\n  - Arabic Proverb\n',
                          '"If there is no wind, row."\n  - Latin Proverb\n',
                          '"To learn a language is to have one more window from which'
                            + ' to look at\n the world."\n  - Chinese Proverb\n'
                        ];
    msg = {'proverb': ancient_proverbs,
           'historical': historical_quotes,
           'modern': modern_quotes};
    for (key in msg) {
        rand = Math.floor(Math.random() * 4);
        console.log(msg[key][rand]);
    }
}

function generate_fortune() {
    msg = {'You Will': ['get an "A" on a test\n',
                        'be rich\n',
                        'have many friends\n',
                        'go to a party soon\n'],
            'Will happen': ['Good fortune will be yours\n',
                            'Someone will call you today\n',
                            'Your luck will soon turn\n',
                            'Someone will soon come into your life\n'],
            'You should': ['do a good deed today\n',
                           'be careful on Tuesday\n',
                           'trust no one\n',
                           'only trust your closest allies\n']};
    for (key in msg) {
        rand = Math.floor(Math.random() * 4)
        if (key === 'You Will') {
            console.log(`You will ${msg[key][rand]}`);
        } else if (key === 'You should') {
            console.log(`You should ${msg[key][rand]}`);
        } else {
            console.log(msg[key][rand]);
        }
    }
}

generate_message('inspiration');