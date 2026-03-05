import { injectable } from "tsyringe";
import { Block } from "../generated/prisma";
import BlockRepo from "../repositories/block.repo";
import { CreateBlockData, UpdateBlockData } from "../schemas/blog.schema";
import { ErrorResponse } from "../response/response";
import { ReasonPhrases, StatusCodes } from "../response";
import PageRepo from "../repositories/page.repo";
import { Queries } from "../response/query";

@injectable()
class BlockService {
  constructor(
    private readonly blockRepo: BlockRepo,
    private readonly pageRepo: PageRepo,
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
      const blockParent = await this.blockRepo.getBlockByID(blockData.parentId);
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

    // Step 3: Check OrderIndex
    const orderIsExists = await this.blockRepo.getBlockByFilter({
      parentId: blockData.parentId,
      pageId: blockData.pageId,
      orderIndex: blockData.orderIndex,
    });

    if (orderIsExists) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "Order index is invalid",
        error: ReasonPhrases.BAD_REQUEST,
      });
    }

    const block = await this.blockRepo.createBlock(blockData);
    if (!block) {
      throw new ErrorResponse({
        message: "Create Blog Failed",
        statusCode: StatusCodes.BAD_REQUEST,
        error: "Create Block error",
      });
    }
    return block;
  }

  async getBlockByID(blockID: string): Promise<Block> {
    const block = await this.blockRepo.getBlockByID(blockID);
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

    if (!blocks || blocks.length === 0) {
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
    if (!childrenBlocks || childrenBlocks) {
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
    const blockHolder = await this.blockRepo.getBlockByID(blockID);
    if (!blockHolder) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: `Block ${blockID} not found`,
        error: ReasonPhrases.NOT_FOUND,
      });
    }

    const updatedBlock = await this.blockRepo.updateBlockByID(
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
    const blockHolder = await this.blockRepo.getBlockByID(blockID);
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
}

export default BlockService;
