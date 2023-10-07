// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

import { Message } from '@/types';
import { isValidEmail } from '@/utils/util';

type Data = {
  message: string;
  data?: Message;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !isValidEmail(email) ||
      !subject ||
      subject.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid input' });
    }

    const newMessage: Message = {
      name,
      email,
      subject,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.4gcubwo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    let client;

    try {
      client = new MongoClient(connectionString);
      await client.connect();
    } catch (err) {
      return res.status(500).json({ message: 'Cannot connect to database' });
    }

    const db = client.db();

    try {
      const result = await db
        .collection(process.env.DB_COLLECTION!)
        .insertOne(newMessage);
      newMessage.id = result.insertedId.toString();
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Failed to save message to database' });
    } finally {
      client.close();
    }

    res.status(201).json({ message: 'Message sent', data: newMessage });
  }
}
