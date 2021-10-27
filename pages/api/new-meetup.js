import { MongoClient } from 'mongodb';

async function handler(request, response) {
    if (request.method === 'POST') {
        const data = request.body;
        
        const client = await MongoClient.connect(
            'mongodb+srv://Cruelkid:awesomepassword@cluster0.lrhy8.mongodb.net/meetupsDB?retryWrites=true&w=majority'
        );
        
        const db = client.db();
        const collection = db.collection('meetups');
        const result = await collection.insertOne(data);

        client.close();

        response.status(201).json({ message: 'Meetup created!' });
    }
}

export default handler;
