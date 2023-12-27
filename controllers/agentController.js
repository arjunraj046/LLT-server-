const { addagentDataDB, getAgentEntity } = require("../database/repository/agentRepository");

// const addEntity = async (req, res) => {
//   try {
//     console.log("hai add");
//     // const { date, tokenNumber, count } = req.body;
//     let id = '658a603d365ed61de6f39827'
//     let date = data.now()
//     let tokenNumber = 22
//     let count = 10
//     let res = await addagentDataDB(id, date, tokenNumber, count);
//     res.status(200).json({ status: "success",  res });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const addEntity = async (req, res) => {
  try {
    console.log("hai add");
    const { _id, date, tokenNumber, count } = req.body;
    // let id = "658a603d365ed61de6f39827";
    // let date = Date.now(); // Fixed typo
    // let tokenNumber = 32;
    // let count = 40;

    let result = await addagentDataDB(_id, date, tokenNumber, count); // Renamed variable to prevent conflict
    console.log(result);
    res.status(200).json({ status: "success", result }); // Sending result in response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};










const listEntity = async (req, res) => {
  try {
    console.log("agent",req.body);
    const { _id } = req.body;
    const listEntity = await getAgentEntity(_id);

    res.status(200).json({ status: "success", listEntity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};









module.exports = { addEntity, listEntity };
