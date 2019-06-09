import { getWeeklyReservationList, AddReservation } from "../graphql/dao/reservation";
import { getUseableMeetRoomList } from "../graphql/dao/meet_room";
import sequelize from "../models";

const start = async () => {
    await sequelize.sequelize.sync({force:false, logging:false})
    .then(()=>{
        sequelize.sequelize.query("insert into `meet_room_test` (`room_id`, `name`, `size`) values('1','CREATIVE실','4')");
        sequelize.sequelize.query("insert into `meet_room_test` (`room_id`, `name`, `size`) values('2','INNOVATION실','4')");
        sequelize.sequelize.query("insert into `meet_room_test` (`room_id`, `name`, `size`) values('3','DO실','6')");
        sequelize.sequelize.query("insert into `meet_room_test` (`room_id`, `name`, `size`) values('4','대회의실','8')");
        sequelize.sequelize.query("insert into `meet_room_test` (`room_id`, `name`, `size`) values('5','LIBERTY실','6')");

        sequelize.sequelize.query("insert into `user_test` (`user_id`, `name`, `dept`) values('1','김요셉','개발부서')");
        sequelize.sequelize.query("insert into `user_test` (`user_id`, `name`, `dept`) values('2','김선달','사업기획부서')");
        sequelize.sequelize.query("insert into `user_test` (`user_id`, `name`, `dept`) values('3','홍길동','마케팅')");
        sequelize.sequelize.query("insert into `user_test` (`user_id`, `name`, `dept`) values('4','이순신','전략사업부')");
        sequelize.sequelize.query("insert into `user_test` (`user_id`, `name`, `dept`) values('5','강감찬','개발부서')");

        sequelize.sequelize.query("insert into `reservation_test` (`id`, `user_id`, `room_id`, `start_at`, `end_at`) values('2','1','2','2019-06-08 17:00:00','2019-06-08 18:00:00')");
        sequelize.sequelize.query("insert into `reservation_test` (`id`, `user_id`, `room_id`, `start_at`, `end_at`) values('3','2','3','2019-06-08 15:00:00','2019-06-08 16:00:00')");
        sequelize.sequelize.query("insert into `reservation_test` (`id`, `user_id`, `room_id`, `start_at`, `end_at`) values('4','3','1','2019-06-08 19:00:00','2019-06-08 21:00:00')");
    })
}
const end = () => {
    sequelize.sequelize.query("DROP TABLE reservation_test");
    sequelize.sequelize.query("DROP TABLE user_test");
    sequelize.sequelize.query("DROP TABLE meet_room_test");
}


function throwError(err){
    throw new Error("에러 발생 : "+err);
}

describe("TEST 진행 사항",()=>{
    before("모델링을 시작합니다.",async ()=>{
        await start();
    });    
    after("모델링을 종료합니다.", ()=> { 
        end();
    });
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
});
