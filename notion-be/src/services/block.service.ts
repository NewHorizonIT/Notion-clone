import { injectable } from "tsyringe";
import { Block } from "../generated/prisma";
import BlockRepo from "../repositories/block.repo";
import { CreateBlockData, UpdateBlockData } from "../schemas/blog.schema";
import { ErrorResponse } from "../response/response";
import { ReasonPhrases, StatusCodes } from "../response";
import PageRepo from "../repositories/page.repo";
import { Queries } from "../response/query";
import { Prisma, PrismaClient } from "../generated/prisma";

@injectable()
class BlockService {
  constructor(
    private readonly blockRepo: BlockRepo,
    private readonly pageRepo: PageRepo,
    private prisma: PrismaClient,
  ) {}
  async createNewBlock(blockData: CreateBlockData): Promise<Block> {
    // Step 1:  Check pageId is exists
    const pageHolder = await this.pageRepo.getPageByID(blockData.pageId);
    if (!pageHolder) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: `Page ${blockData.pageId} not found`,
        error: ReasonPhrases.BAD_REQUEST,
      });
    }
    // Step 2: Check block parrent is exists
    if (blockData.parentId) {
      const blockParent = await this.blockRepo.getBlockByID(
        this.prisma,
        blockData.parentId,
      );
      if (!blockParent) {
        throw new ErrorResponse({
          statusCode: StatusCodes.BAD_REQUEST,
          message: `Block ${blockData.parentId} not found`,
          error: ReasonPhrases.BAD_REQUEST,
        });
      }

      if (blockParent.pageId !== blockData.pageId) {
        throw new ErrorResponse({
          statusCode: StatusCodes.BAD_REQUEST,
          message: "Parent block does not belong to the same page",
          error: ReasonPhrases.BAD_REQUEST,
        });
      }
    }

    const block = await this.blockRepo.createBlock(this.prisma, blockData);
    if (!block) {
      throw new ErrorResponse({
        message: "Create Block Failed",
        statusCode: StatusCodes.BAD_REQUEST,
        error: "Create Block error",
      });
    }
    return block;
  }

  async getBlockByID(blockID: string): Promise<Block> {
    const block = await this.blockRepo.getBlockByID(this.prisma, blockID);
    if (!block) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: `Block ${blockID} not found`,
        error: ReasonPhrases.NOT_FOUND,
      });
    }

    return block;
  }

  async getBlockByPage(pageID: string, query: Queries): Promise<Block[]> {
    const blocks = await this.blockRepo.getBlocksByPage(
      { pageId: pageID },
      query,
    );

    if (!blocks) {
      throw new ErrorResponse({
        message: "Get blocks of page failed",
        error: ReasonPhrases.NOT_FOUND,
        statusCode: StatusCodes.NOT_FOUND,
      });
    }
    return blocks;
  }

  async getChildrenOfBlock(parentBlockID: string): Promise<Block[]> {
    const childrenBlocks = await this.blockRepo.getBlocksByFilter({
      parentId: parentBlockID,
    });
    if (!childrenBlocks || childrenBlocks.length === 0) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Get children blocks not found",
        error: ReasonPhrases.NOT_FOUND,
      });
    }
    return childrenBlocks;
  }

  async updateBlock(
    blockID: string,
    blockData: Partial<UpdateBlockData>,
  ): Promise<Block> {
    const blockHolder = await this.blockRepo.getBlockByID(this.prisma, blockID);
    if (!blockHolder) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: `Block ${blockID} not found`,
        error: ReasonPhrases.NOT_FOUND,
      });
    }

    const updatedBlock = await this.blockRepo.updateBlockByID(
      this.prisma,
      blockID,
      blockData,
    );
    if (!updatedBlock) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "Update block failed",
        error: ReasonPhrases.BAD_REQUEST,
      });
    }

    return updatedBlock;
  }

  async deleteBlock(blockID: string): Promise<Block> {
    const blockHolder = await this.blockRepo.getBlockByID(this.prisma, blockID);
    if (!blockHolder) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: `Block ${blockID} not found`,
        error: ReasonPhrases.NOT_FOUND,
      });
    }

    const deletedBlock = await this.blockRepo.softDeleteBlockByID(blockID);
    if (!deletedBlock) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "Delete block failed",
        error: ReasonPhrases.BAD_REQUEST,
      });
    }

    return deletedBlock;
  }

  // Create blocks in batch
  async createBlocksBatch(blocksData: CreateBlockData[]): Promise<Block[]> {
    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      return Promise.all(
        blocksData.map((blockData) =>
          this.blockRepo.createBlock(tx, blockData),
        ),
      );
    });
  }

  // Update blocks in batch
  async updateBlocksBatch(
    blocksData: { id: string; data: Partial<UpdateBlockData> }[],
  ): Promise<Block[]> {
    return this.prisma.$transaction(async (tx) => {
      return Promise.all(
        blocksData.map(async ({ id, data }) => {
          const block = await this.blockRepo.getBlockByID(tx, id);

          if (!block) {
            throw new ErrorResponse({
              statusCode: StatusCodes.NOT_FOUND,
              message: `Block ${id} not found`,
              error: ReasonPhrases.NOT_FOUND,
            });
          }

          return this.blockRepo.updateBlockByID(tx, id, data);
        }),
      );
    });
  }
}

export default BlockService;
