import db from "../../models";
const Sequelize = db.Sequelize;
const Op = db.Sequelize.Op;
const meet_room = db.meet_room;
const reservation = db.reservation;

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

export const getUseableMeetRoomList = async (start_at) =>{
    const result = await meet_room.findAll({
            include: [
                {
                    model:reservation,
                    where:
                        Sequelize.where(
                            Sequelize.fn('date_format', start_at, '%Y-%m-%d %H:i:s'),{
                                [Op.between]:[Sequelize.literal('start_at'), Sequelize.literal('end_at')]
                            }
                        ),
                    required:false
                }
            ],
            where:{
                'room_id':null
            }
        });
    return result;
}