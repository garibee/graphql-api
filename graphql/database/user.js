import db from "../../models";
const user = db.USER;

export const getUsers = async () => {
    const result = await user.findAll();
    return result;
}
export const getUserById = async (user_id) =>{
    const result = await user.findOne({
        where:{
            user_id : user_id
        }
    });

    return result;
}