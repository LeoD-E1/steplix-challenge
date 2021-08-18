import asyncPool from "../../database";

export const getRates = async (req, res) => {
  try {
    const [rows] = await asyncPool.query(
      "SELECT * FROM rates INNER JOIN currencies ON rates.id_currency = currencies.id_currency ORDER BY id_rate DESC"
    );

    if (!rows.length) {
      return res.status(404).json({
        message: "No data about Rates",
      });
    }

    return res.status(200).json({
      rates: rows,
    });
  } catch (error) {
    return res.json({ error });
  }
};
