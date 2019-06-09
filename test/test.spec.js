import { getWeeklyReservationList, AddReservation } from "../graphql/dao/reservation";
import { getUseableMeetRoomList } from "../graphql/dao/meet_room";

function throwError(err){
    throw new Error("에러 발생 : "+err);
}

describe('#weeklyReservationList', ()=>{
    it('주간 회의실 예약 내역',async ()=>{
        const result = await getWeeklyReservationList();
        
        if(result==null){
            throwError("Sequelize 확인이 필요합니다.");
        }
    });
});

describe('#getUseableMeetRoomList', ()=>{
    it('현재 이용 가능한 회의실',async ()=>{
        const result = await getUseableMeetRoomList("1970-01-01 00:00:00");
        
        if(result==null){
            throwError("Sequelize 확인이 필요합니다.");
        }
    });
});

describe('#AddReservation', ()=>{
    it('회의실 예약',async ()=>{
        const result = await AddReservation(1,1,"1970-01-01 00:00:00","1970-01-01 01:00:00");
        
        if(result==null){
            throwError("Sequelize 확인이 필요합니다.");
        }
    });
});