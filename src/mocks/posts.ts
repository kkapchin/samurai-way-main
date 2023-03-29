import {PostType} from "../types/post-type";

export const posts: Array<PostType> = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet. Non recusandae quidem et velit quidem qui iste animi et mollitia repudiandae aut dolorem voluptas est molestiae quisquam et voluptas aperiam. At sint reiciendis hic ipsam reiciendis et quia quod.',
        time: '1 min ago',
        user: {
            id: 1,
            name: 'Ivo Namtar Wijers',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_-_Xc8u7HQEVA66YYznJZwFctc06g3wFhKajU_BAVZb1BiFXBd8qChGfjK8WBkfALq0&usqp=CAU',

        }
    },
    {
        id: 2,
        text: 'Dura Lex Sed Lex',
        time: '5 min ago',
        user: {
            id: 2,
            name: 'Madara Alexndrovich',
            avatar: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/8/83/Jabba-the-hut.jpg?width=640',

        }
    },
]