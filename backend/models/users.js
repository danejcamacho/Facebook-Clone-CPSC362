module.exports = (sequlize, DataTypes) => {
    const User = sequlize.define("Users", {
        username: {
            type: DataTypes.STRING(50),
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, 
    {
        createdAt : false,
        updatedAt : false
    })
    return User
}
