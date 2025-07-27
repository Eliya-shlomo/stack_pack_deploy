import Subscription from '../models/Subscription.js';

export async function createSubscription(req, res) {
  try {
    const { userId, plan } = req.body;
    const sub = await Subscription.create({ userId, plan });
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getAllSubscriptions(req, res) {
  try {
    const subs = await Subscription.findAll();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
