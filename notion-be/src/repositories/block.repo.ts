import { injectable } from "tsyringe";
import { Block, Prisma, PrismaClient } from "../generated/prisma";
import { CreateBlockData, UpdateBlockData } from "../schemas/blog.schema";
import { Queries } from "../response/query";

type db = PrismaClient | Prisma.TransactionClient;
@injectable()
class BlockRepo {
  constructor(private readonly prisma: PrismaClient) {}
  async createBlock(db: db, blockData: CreateBlockData): Promise<Block> {
    return await db.block.create({
      data: {
        ...blockData,
        content:
          blockData.content === null ? Prisma.JsonNull : blockData.content,
      },
    });
  }
  async getBlockByID(db: db, id: string): Promise<Block | null> {
    return await db.block.findUnique({
      where: { id, isDeleted: false },
    });
  }

  async getBlockByFilter(
    filter: Prisma.BlockWhereInput,
  ): Promise<Block | null> {
    return await this.prisma.block.findFirst({
      where: { ...filter, isDeleted: false },
    });
  }

  async getBlocksByFilter(filter: Prisma.BlockWhereInput): Promise<Block[]> {
    return await this.prisma.block.findMany({
      where: { ...filter, isDeleted: false },
    });
  }

  async getBlocksByPage(
    filter: Prisma.BlockWhereInput,
    query?: Queries,
  ): Promise<Block[]> {
    const limit = parseInt(query?.limit as any, 10) || 10;
    const offset = parseInt(query?.offset as any, 10) || 0;
    const depth = parseInt(query?.depth as any, 10) || 0;
    return await this.prisma.block.findMany({
      where: { ...filter, isDeleted: false, orderIndex: depth as number },
      skip: offset,
      take: limit,
    });
  }

  async updateBlockByID(db: db, blockID: string, blockData: UpdateBlockData) {
    return await db.block.update({
      where: { id: blockID, isDeleted: false },
      data: {
        ...blockData,
      },
    });
  }

  async softDeleteBlockByID(blockID: string): Promise<Block> {
    return await this.prisma.block.update({
      where: { id: blockID },
      data: {
        isDeleted: true,
      },
    });
  }
}

export default BlockRepo;
