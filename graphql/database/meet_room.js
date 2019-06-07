import db from "../../models";
const meet_room = db.MEET_ROOM;

export const getMeetRooms = async () => {
    const result = await meet_room.findAll();
    return result;
}

export const getMeetRoomById = async (room_id) => {
    const result = await meet_room.findOne({
        where:{
            room_id : room_id
        }
    })
    return result;
}