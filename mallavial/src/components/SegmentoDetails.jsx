
const SegmentoDetails = ({ segmento }) => {
  console.log(segmento)
    return (
      <div>
        {segmento.calzadas?.length > 0 && (
          <div>
            <h4>Calzadas</h4>
            {segmento.calzadas.map((calzada) => (
              <div key={calzada.id}>
                <p>Tipo: {calzada.tipo}</p>
                <p>Ancho: {calzada.ancho}</p>
              </div>
            ))}
          </div>
        )}
  
        {segmento.bordillos?.length > 0 && (
          <div>
            <h4>Bordillos</h4>
            {segmento.bordillos.map((bordillo) => (
              <div key={bordillo.id}>
                <p>Material: {bordillo.material}</p>
                <p>Altura: {bordillo.altura}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default SegmentoDetails;
  