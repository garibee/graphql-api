// import {getMovies, getById, addMovie, deleteMovie} from "./db";
import { getMeetRooms, getMeetRoomById, getUseableMeetRoomList} from "./database/meet_room";
import { getUsers, getUserById } from "./database/user";
import { AddReservation, getWeeklyReservationList } from "./database/reservation";

const resolvers = {
    Query:{
        meet_room_list: () => getMeetRooms(),
        meet_room: (_, {room_id}) => getMeetRoomById(room_id),
        user_list: () => getUsers(),
        user: (_, {user_id}) => getUserById(user_id),
        weekly_reservation_list: () => getWeeklyReservationList(),
        useable_meet_room_list:(_,{start_at}) => getUseableMeetRoomList(start_at)
    },
    Mutation:{
        AddReservation:(_,{user_id, room_id, start_at, end_at}) => 
            AddReservation(user_id, room_id, start_at, end_at)
    }
}

export default resolvers;
