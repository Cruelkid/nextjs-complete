import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Meetups</title>
                <meta name="description" content="React Next.js meetups" />;
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const client = await MongoClient.connect(
        'mongodb+srv://Cruelkid:awesomepassword@cluster0.lrhy8.mongodb.net/meetupsDB?retryWrites=true&w=majority'
    );

    const db = client.db();
    const collection = db.collection('meetups');

    const meetups = await collection.find().toArray();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

export default HomePage;
