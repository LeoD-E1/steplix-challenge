import asyncPool from "../../database";

export const getCurrencies = async (req, res) => {
  try {
    const [rows] = await asyncPool.query("SELECT * FROM currencies");

    if (!rows.length) {
      res.status(404).json({
        message: "No data about Currencies",
      });
    }
    res.status(200).json({
      currencies: rows,
    });
  } catch (error) {
    res.json({ error });
  }
};
