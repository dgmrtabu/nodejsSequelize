module.exports = (sequilize, Sequelize) => {
    const Usuario = sequilize.define('security', {
        usuario_id: { type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true },
        persona_id: Sequelize.INTEGER,
        login: Sequelize.STRING,
        tipo: Sequelize.INTEGER,
        razon_registro: Sequelize.STRING,
        fecha_ini: Sequelize.DATE,
        fecha_fin: Sequelize.DATE,
        /*correo_electonico
        estado*/
        usuario_creacion: Sequelize.TIMESTAMPS,
        /*fecha_creacion
        host_creacion
        usuario_modificacion
        fecha_modificacion
        host_modificacion*/
        estado_registro: Sequelize.BOOLEAN
    });

    return Usuario;
}