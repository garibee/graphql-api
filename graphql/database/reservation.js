import moment from "moment";
import db from "../../models";
const Sequelize = db.Sequelize;
const Op = db.Sequelize.Op;
const reservation = db.RESERVATION;
const meet_room = db.MEET_ROOM;
const user = db.USER;

export const getReservation = async () => {
    const result = await reservation.findAll();
    return result;
}

const isOccupiedRoom = async (room_id, start_at, end_at) =>{
    const param = {
        room_id : room_id,
        start_at : {
            [Op.gte]: start_at
        },
        end_at : {
            [Op.lte] : end_at
        }
    };

    const result = await reservation.count({
        where:param
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
    const param = {
        user_id : user_id,
        room_id : room_id,
        start_at : start_at,
        end_at : end_at
    };
    
    const result = await reservation.create(param);
    
    return result;
}

export const getWeeklyReservationList = async () => {    
    const lastSunday = moment().day(0).format("YYYY-MM-DD 00:00:00");
    const thisSunday = moment().day(7).format("YYYY-MM-DD 23:59:59");
    
    const result = await reservation.findAll({
        distinct: true,
        attributes:[
            "user_id",
            "room_id",
            ["id","reservation_id"],
            "start_at",
            "end_at"
        ],
        include: [
            {
                model:user,
                as : "user",
                required: true
            },
            {
                model:meet_room,
                as : "room",
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