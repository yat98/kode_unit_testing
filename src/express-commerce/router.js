import express from "express";
import { addItem, getItem, getItems } from "./models";

const router = express.Router();
router.use(express.json());

router.get('/items',async (req, res) => {
  const items = await getItems();
  return res.status(200).json({
    items: items,
  });
});

router.post('/items',async (req, res) => {
  try {
    const {id} = (await addItem(req.body))[0];
    return res.status(200).json({
      item: await getItem(id),
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;