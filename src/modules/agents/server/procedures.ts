import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server"


export const agentsRouter = createTRPCRouter({
    getMany: baseProcedure.query(async () => {
        const data = await db
          .select()
          .from(agents);
        
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // throw new TRPCError({ code: "Bad_request"});

    return data;
    }),
});