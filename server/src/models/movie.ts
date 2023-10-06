import db from '../db/connection';
import { DataTypes} from 'sequelize';
import sequelize from '../db/connection';
const Movie = db.define('Movie', {
    id:{
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING
    },
    genre:{
        type: DataTypes.STRING
    },
    format:{
        type: DataTypes.ENUM //ver porque en la basee de datos no me deja usar el tipo de dato enum
    },
    description:{
        type: DataTypes.STRING
    },
    clasification:{
        type: DataTypes.STRING
    },
    duration:{
        type: DataTypes.STRING //ver porque en la basee de datos no me deja usar el tipo de dato time
    }
}, 
{
    createdAt: false, updatedAt: false
});
export default Movie;