import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import sequelize  from "./models/index";

sequelize.sequelize.sync({force:false}) 
.then(()=>{
    sequelize.sequelize.query("insert into `meet_room` (`room_id`, `name`, `size`) values('1','CREATIVE실','4')");
    sequelize.sequelize.query("insert into `meet_room` (`room_id`, `name`, `size`) values('2','INNOVATION실','4')");
    sequelize.sequelize.query("insert into `meet_room` (`room_id`, `name`, `size`) values('3','DO실','6')");
    sequelize.sequelize.query("insert into `meet_room` (`room_id`, `name`, `size`) values('4','대회의실','8')");
    sequelize.sequelize.query("insert into `meet_room` (`room_id`, `name`, `size`) values('5','LIBERTY실','6')");

    sequelize.sequelize.query("insert into `user` (`user_id`, `name`, `dept`) values('1','김요셉','개발부서')");
    sequelize.sequelize.query("insert into `user` (`user_id`, `name`, `dept`) values('2','김선달','사업기획부서')");
    sequelize.sequelize.query("insert into `user` (`user_id`, `name`, `dept`) values('3','홍길동','마케팅')");
    sequelize.sequelize.query("insert into `user` (`user_id`, `name`, `dept`) values('4','이순신','전략사업부')");
    sequelize.sequelize.query("insert into `user` (`user_id`, `name`, `dept`) values('5','강감찬','개발부서')");

    sequelize.sequelize.query("insert into `reservation` (`id`, `user_id`, `room_id`, `start_at`, `end_at`) values('2','1','2','2019-06-08 17:00:00','2019-06-08 18:00:00')");
    sequelize.sequelize.query("insert into `reservation` (`id`, `user_id`, `room_id`, `start_at`, `end_at`) values('3','2','3','2019-06-08 15:00:00','2019-06-08 16:00:00')");
    sequelize.sequelize.query("insert into `reservation` (`id`, `user_id`, `room_id`, `start_at`, `end_at`) values('4','3','1','2019-06-08 19:00:00','2019-06-08 21:00:00')");
}).catch(()=>{
    throw new Error("데이터베이스 오류 발생!!");
});

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});
server.start(()=>console.log("graphQLServer started")) ;