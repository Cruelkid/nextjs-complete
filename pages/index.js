import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_city_hall_of_Leipzig_%2820%29.jpg',
        address: 'Markt 1, 04109 Leipzig, Germany',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/V%C3%B6lkerschlachtdenkmal_blaue_Stunde.jpg',
        address: 'Str. des 18. Oktober 100, 04299 Leipzig, Germany',
        description: 'This is a second meetup'
    },
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
