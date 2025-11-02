import { injectable } from "tsyringe";
import { Block, Prisma, PrismaClient } from "../generated/prisma";
import { CreateBlockData, UpdateBlockData } from "../schemas/blog.schema";
import { Queries } from "../response/query";
@injectable()
class BlockRepo {
  constructor(private readonly prisma: PrismaClient) {}
  async createBlock(blockData: CreateBlockData): Promise<Block> {
    return await this.prisma.block.create({
      data: {
        ...blockData,
        content:
          blockData.content === null ? Prisma.JsonNull : blockData.content,
      },
    });
  }
  async getBlockByID(id: string): Promise<Block | null> {
    return await this.prisma.block.findUnique({
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

  async updateBlockByID(blockID: string, blockData: UpdateBlockData) {
    return await this.prisma.block.update({
      where: { id: blockID, isDeleted: false },
      data: {
        ...blockData,
      },
    });
  }
}

export default BlockRepo;
