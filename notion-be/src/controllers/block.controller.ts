import { injectable } from "tsyringe";
import { CreateBlockData, UpdateBlockData } from "../schemas/blog.schema";
import BlockService from "../services/block.service";
import { SuccessResponse } from "../response/response";
import { StatusCodes } from "../response";
import { Request, Response } from "express";
import { Queries } from "../response/query";

@injectable()
class BlockController {
  constructor(private readonly blockService: BlockService) {}
  // Create new Block
  createBlock = async (req: Request, res: Response): Promise<void> => {
    const blockData = req.body as CreateBlockData;
    const block = await this.blockService.createNewBlock(blockData);

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Create block Success",
      data: block,
    }).send(res);
  };

  // Get block By ID
  getBlockByID = async (req: Request, res: Response): Promise<void> => {
    const blockID = req.params.id as string;
    const block = await this.blockService.getBlockByID(blockID);

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Get block success",
      data: block,
    }).send(res);
  };

  // Get block of Page
  getBlockOfPage = async (req: Request, res: Response): Promise<void> => {
    const queries = req.query as Queries;
    const pageID = req.params.id;
    const blocks = await this.blockService.getBlockByPage(pageID, queries);

    new SuccessResponse({
      message: "Get blocks of page success",
      statusCode: StatusCodes.OK,
      data: blocks,
    }).send(res);
  };

  // Get children block
  getChildrenBlocksOfParent = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const parentID = req.params.id as string;
    const blocks = await this.blockService.getChildrenOfBlock(parentID);

    new SuccessResponse({
      message: "Get blocks of parrent success",
      statusCode: StatusCodes.OK,
      data: blocks,
    }).send(res);
  };

  // Update block
  updateBlock = async (req: Request, res: Response): Promise<void> => {
    const blockID = req.params.id as string;
    const blockData = req.body as Partial<UpdateBlockData>;
    const block = await this.blockService.updateBlock(blockID, blockData);

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Update block success",
      data: block,
    }).send(res);
  };

  // Delete soft block
  deleteBlock = async (req: Request, res: Response): Promise<void> => {
    const blockID = req.params.id as string;
    await this.blockService.deleteBlock(blockID);

    new SuccessResponse({
      data: null,
      statusCode: StatusCodes.OK,
      message: "Delete block success",
    }).send(res);
  };
}

export default BlockController;
