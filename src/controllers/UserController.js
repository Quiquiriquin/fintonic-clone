import Sequelize from 'sequelize';
import User from '../models/User';
/*
* UserController <- Clase
* let/var/const nombreVariable = new Clase();
* import UserController from '...';
* UserController.createUser
*
* */
class UserController {

    static createUser (request, response) {
        let ans;
        console.log('Ans: ', ans);
        User.create({
            name: 'Enrique',
            email: 'enrique@gmail.com',
            password: 'Quiquiriquin'
        })
            .then( newUser => {
                console.log('Todo salió bien');
            })
            .catch( err => {
                console.log('Hubo un error');
            });


        response.send({ success: true, message: 'Working' });
    }

}

export default UserController;
