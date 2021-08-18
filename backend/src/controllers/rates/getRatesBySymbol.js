import asyncPool from "../../database";

export const getRatesBySymbol = async (req, res) => {
  try {
    const { symbol } = req.params;
    const [fields] = await asyncPool.query(
      "SELECT * FROM rates INNER JOIN currencies ON rates.id_currency = currencies.id_currency WHERE currencies.symbol = ?",
      [symbol]
    );

    if (!fields.length) {
      return res.json({
        message: "No data",
      });
    }

    return res.json(fields);
  } catch (error) {
    return res.json(error);
  }
};
