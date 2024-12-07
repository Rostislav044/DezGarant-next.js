
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("blog"); // Имя твоей БД
  const collection = db.collection("posts"); // Название коллекции

  if (req.method === "POST") {
    try {
      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }

      const result = await collection.insertOne({ title, content });
      return res.status(201).json({ success: true, data: result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const posts = await collection.find({}).toArray();
      return res.status(200).json({ success: true, data: posts });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
