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
    }
    catch (err) {
        console.error("Error getAllCopyrights controller:", err);
    }
};
export const searchROCNo = async (req, res) => {
    try {
        const rocNo = req.query["inputValue"];
        if (!rocNo) {
            return res.status(400).json({ error: "RoC No. is required" });
        }
        const result = await prisma.copyright.findFirst({
            where: {
                ROCNo: rocNo,
            },
        });
        if (!result) {
            return res
                .status(404)
                .json({ message: "No record found for this RoC No." });
        }
        console.log(result);
        res.status(200).json(result);
    }
    catch (err) {
        console.error("Error searchROCNo controller:", err);
    }
};
//# sourceMappingURL=copyrightController.js.map