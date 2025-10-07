import { container } from "tsyringe";

import { prisma } from "../utils/prisma";
import { PrismaClient } from "../generated/prisma";
import Redis from "ioredis";
import { redis } from "../utils";

container.registerInstance(PrismaClient, prisma);
container.registerInstance(Redis, redis);
