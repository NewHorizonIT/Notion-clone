import { Redis } from "ioredis";
import { injectable } from "tsyringe";

@injectable()
export default class CacheService {
  private client: Redis;
  constructor(redisCLient: Redis) {
    this.client = redisCLient;
  }
  // ===== STRING =====
  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<boolean> {
    try {
      const data = typeof value === "string" ? value : JSON.stringify(value);
      if (ttlSeconds) {
        await this.client.set(key, data, "EX", ttlSeconds);
      } else {
        await this.client.set(key, data);
      }

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async get<T = any>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) return null;

    try {
      return JSON.parse(data);
    } catch {
      return data as unknown as T;
    }
  }

  async delete(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    return (await this.client.exists(key)) === 1;
  }

  // ===== HASH =====
  async setHash(
    key: string,
    data: Record<string, string | number | boolean>,
  ): Promise<void> {
    const stringified = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, v.toString()]),
    );
    await this.client.hset(key, stringified);
  }

  async getHash(key: string): Promise<Record<string, string> | null> {
    const data = await this.client.hgetall(key);
    return Object.keys(data).length ? data : null;
  }

  async getHashField(key: string, field: string): Promise<string | null> {
    return await this.client.hget(key, field);
  }

  async deleteHashField(key: string, field: string): Promise<number> {
    return await this.client.hdel(key, field);
  }

  // ===== LIST =====
  async pushToList(key: string, value: string): Promise<void> {
    await this.client.rpush(key, value);
  }

  async popFromList(key: string): Promise<string | null> {
    return await this.client.lpop(key);
  }

  async getListRange(key: string, start = 0, end = -1): Promise<string[]> {
    return await this.client.lrange(key, start, end);
  }

  // ===== SET =====
  async addToSet(key: string, value: string): Promise<void> {
    await this.client.sadd(key, value);
  }

  async isMemberOfSet(key: string, value: string): Promise<boolean> {
    const result = await this.client.sismember(key, value);
    return result === 1;
  }

  async removeFromSet(key: string, value: string): Promise<void> {
    await this.client.srem(key, value);
  }
}
