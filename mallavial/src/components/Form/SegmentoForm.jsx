import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import { addSegmento, addBordillo, addCalzada } from "../../../services/api";

const SegmentoForm = ({ onAddSuccess }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
      try {
        setLoading(true);
        
        const responseSegmento = await addSegmento({
          direccion: values.direccion,
          numero: values.numero,
          longitud: values.longitud,
        });
        
        const segmentoId = responseSegmento.id; 

        console.log(segmentoId)
      
        const calzadaData = {
          tipo: values.tipoCalzada,
          ancho: values.anchoCalzada,
          segmentoId, 
        };
        const bordilloData = {
          material: values.materialBordillo,
          altura: values.alturaBordillo,
          segmentoId, 
        };
      
        await addCalzada(calzadaData);
        await addBordillo(bordilloData);
      
        message.success("Segmento, calzada y bordillo agregados con éxito");
        onAddSuccess();
      } catch (error) {
        console.error("Error en la API:", error); 
        message.error("Error al agregar el segmento");
      } finally {
        setLoading(false);
      }
      
    
  };

  return (
    <Form
      name="segmentoForm"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >

      <Form.Item
        label="Longitud del segmento"
        name="longitud"
        rules={[{ required: true, message: "Por favor ingrese la longitud del segmento" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Direccion del segmento"
        name="direccion"
        rules={[{ required: true, message: "Por favor ingrese la dirección del segmento" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Numero del segmento"
        name="numero"
        rules={[{ required: true, message: "Por favor ingrese el número del segmento" }]}
      >
        <Input />
      </Form.Item>

      <h3>Datos de Calzada</h3>
      <Form.Item
        label="Tipo de Calzada"
        name="tipoCalzada"
        rules={[{ required: true, message: "Por favor ingrese el tipo de calzada" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ancho de Calzada"
        name="anchoCalzada"
        rules={[{ required: true, message: "Por favor ingrese el ancho de la calzada" }]}
      >
        <Input />
      </Form.Item>

      <h3>Datos de Bordillo</h3>
      <Form.Item
        label="Material del Bordillo"
        name="materialBordillo"
        rules={[{ required: true, message: "Por favor ingrese el material del bordillo" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Altura del Bordillo"
        name="alturaBordillo"
        rules={[{ required: true, message: "Por favor ingrese la altura del bordillo" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Agregar Segmento
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SegmentoForm;
