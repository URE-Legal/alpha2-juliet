import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getAllCopyrights = async (req, res) => {
  try {
    const rocResult = await prisma.copyright.findMany({
      take: 100,
    });
    const rocNos = rocResult.map((row) => row.ROCNo);

    if (rocNos.length === 0) {
      return res.status(200).json([]);
    }

    const result = await prisma.copyright.findMany({
      where: {
        ROCNo: {
          in: rocNos,
        },
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.error("Error getAllCopyrights controller:", err);
  }
};

export const searchROCNo = async (req, res) => {
  try {
    const diaryNo = req.query["inputValue"];

    if (!diaryNo) {
      return res.status(400).json({ error: "RoC No. is required" });
    }

    const result = await prisma.copyright.findMany({
      where: {
        DiaryNo: {
          contains: diaryNo,
        },
      },
    });

    if (!result) {
      return res
        .status(404)
        .json({ message: "No record found for this RoC No." });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("Error searchROCNo controller:", err);
  }
};

export const getCopyright = async (req, res) => {
  try {
    const copyrightID = Number(req.params.id);

    if (!copyrightID) {
      return res.status(400).json({ error: "Copyright ID is required" });
    }

    const result = await prisma.copyright.findFirst({
      where: {
        id: copyrightID,
      },
    });

    if (!result) {
      return res
        .status(404)
        .json({ message: "No record found for this copyright ID." });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("Error getCopyright controller:", err);
  }
};
