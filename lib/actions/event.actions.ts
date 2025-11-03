'use server'

import { Event} from "@/database";
import connectDB from "../mongodb"
import { EventItem } from "../constants";

export const getSimilarEventBySlug = async (slug: string) => {
    try {
        await connectDB();

        const event = await Event.findOne({ slug });
        return await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags } }).lean<EventItem[]>().limit(3);

    } catch {
        return [];
    }
}


