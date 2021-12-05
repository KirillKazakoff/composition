export type NewsDataType = {
    newsList: {
        [key: string]: string[];
    };
    navBar: {
        [key: string]: string;
    };
};

export const newsData: NewsDataType = {
    newsList: {
        now: [
            'there is some interesting information1',
            'there is some interesting information2',
            'there is some interesting information3',
            'there is some interesting information4',
        ],
        inGermany: [
            'there is some interesting information11',
            'there is some interesting information22',
            'there is some interesting information33',
        ],
        recomend: [
            'there is some interesting information111',
            'there is some interesting information222',
            'there is some interesting information333',
            'there is some interesting information444',
            'there is some interesting information555',
        ],
    },

    navBar: {
        now: 'Сейчас в СМИ',
        inGermany: 'В Германии',
        recomend: 'Рекомендуем',
    },
};
