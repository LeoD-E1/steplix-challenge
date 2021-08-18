import asyncPool from "../../database";

export const postRates = async (req, res) => {
  try {
    const { id_currency, value } = req.body;

    // Verificar si id_currency existe en la bdd
    const [rows] = await asyncPool.query(
      "SELECT * FROM currencies WHERE id_currency = ?",
      [id_currency]
    );

    if (!rows.length) {
      return res.status(404).res.json({
        message: "Currency does not exits in database",
      });
    }

    const [fields] = await asyncPool.query(
      "INSERT INTO rates(id_currency, value) VALUES (?, ?)",
      [id_currency, value]
    );
    if (!fields) {
      return res.status().json({
        message: "Something goes wrong",
      });
    }
    return res.status(200).json({
      message: "OK",
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};
