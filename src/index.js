const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const usuarioRoutes = require('./../routes/general/usuarioRoutes');
const rolRoutes = require('./../routes/general/rolRoutes');
const servicios = require('./../routes/general/servicioRoutes');
const tipoDocumento = require('./../routes/general/tipoDocumentoRoutes');
const documentoRoutes = require('./../routes/general/documentoRoutes');
const tipoEquipos = require('./../routes/biomedica/tipoEquipoRoutes');
const equipo = require('./../routes/biomedica/equipoRoutes');
const hojaVida = require('./../routes/biomedica/hojaVidaRoutes');
const sede = require('./../routes/general/sedeRoutes');
const responsable = require('./../routes/biomedica/responsableRoutes');
const planMantenimiento = require('./../routes/biomedica/planMantenimientoRoutes');
const Proveedor = require('./../routes/biomedica/proveedorRoutes');
const Fabricante = require('./../routes/biomedica/fabricanteRoutes');
const DatosTecnicos = require('./../routes/biomedica/datosTecnicosRoutes');
const PlanActividadMetrologica = require('./../routes/biomedica/planMetrologiaRoutes');
const ActividadMetrologica = require('./../routes/biomedica/actividadMetrologicaRoutes');
const Reporte = require('./../routes/biomedica/reporteRoutes');
const ProtocoloPreventivo = require('./../routes/biomedica/protocoloPreventivoRoutes');
const ProgramacionMantenimiento = require('./../routes/biomedica/programacionMantenimientoRoutes');
const ProgramacionAmetrologicas = require('./../routes/biomedica/programacionAMetrologicasRoutes');
const CumplimientoProtocoloPreventivoRoutes = require('./../routes/biomedica/cumplimiento.ProtocoloPreventivoRoutes');
const {checkToken} =  require('./../utilities/middleware');
const sequelize = require('./../config/configDb');
const imagenesRoutes = require('./../routes/general/imagenesRoutes');
const archivosRoutes = require('./../routes/general/archivosRoutes');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(rolRoutes);
app.use(usuarioRoutes);
app.use(imagenesRoutes);
app.use(archivosRoutes);
app.use(servicios, checkToken);
app.use(tipoDocumento, checkToken);
app.use(documentoRoutes, checkToken);
app.use(tipoEquipos, checkToken);
app.use(hojaVida, checkToken);
app.use(equipo, checkToken);
app.use(sede, checkToken);
app.use(responsable, checkToken);
app.use(planMantenimiento, checkToken);
app.use(Proveedor, checkToken);
app.use(Fabricante, checkToken);
app.use(DatosTecnicos, checkToken);
app.use(Reporte, checkToken);
app.use(ProtocoloPreventivo, checkToken);
app.use(CumplimientoProtocoloPreventivoRoutes, checkToken);
app.use(ProgramacionMantenimiento, checkToken);
app.use(ProgramacionAmetrologicas, checkToken);
app.use(PlanActividadMetrologica, checkToken);
app.use(ActividadMetrologica, checkToken);

sequelize.sync()
  .then(() => {
    app.listen(3005,'0.0.0.0', () => {
      console.log('Server is running on http://localhost:3005');
    });
  })
  .catch(err => console.log('Error:', err));