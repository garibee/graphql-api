import moment from "moment";
import db from "../../models";
const Op = db.Sequelize.Op;
const reservation = db.reservation;
const meet_room = db.meet_room;
const user = db.user;

export const getReservation = async () => {
    const result = await reservation.findAll();
    return result;
}

const isOccupiedRoom = async (room_id, start_at, end_at) =>{
    const result = await reservation.count({
        where:{
            room_id : room_id,
            start_at : {
                [Op.gte]: start_at
            },
            end_at : {
                [Op.lte] : end_at
            }
        }
    });

    if(result > 0){
        return false;
    }

    return true;
}

export const AddReservation = async (user_id, room_id, start_at, end_at) => {
    const isOccupied = await isOccupiedRoom(room_id, start_at, end_at);
    if(isOccupied == false ){
        throw new Error("해당 시간 예약이 이미 마감되었습니다.");
    }
    
    const result = await reservation.create({
        user_id : user_id,
        room_id : room_id,
        start_at : start_at,
        end_at : end_at
    });
    
    return result;
}

export const getWeeklyReservationList = async () => {    
    const lastSunday = moment().day(0).format("YYYY-MM-DD 00:00:00");
    const thisSunday = moment().day(7).format("YYYY-MM-DD 23:59:59");
    
    const result = await reservation.findAll({
        include: [{
                model:user,
                required: true,
            },
            {
                model:meet_room,
                required:true,
            },
        ],
        where:{
            start_at : {
                [Op.gte]: lastSunday
            },
            end_at : {
                [Op.lte]: thisSunday
            }
        }
    });
    
    return result;
}