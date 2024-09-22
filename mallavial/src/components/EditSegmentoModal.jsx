import { useState, useEffect } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { updateSegmento, updateCalzada, updateBordillo } from "../../services/api";

const EditSegmentoModal = ({ segmento, isVisible, onClose, reloadSegmentos }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (segmento) {
      form.setFieldsValue({
        longitud: segmento.longitud,
        direccion: segmento.direccion,
        numero: segmento.numero,
        tipoCalzada: segmento.calzadas?.tipo,
        anchoCalzada: segmento.calzadas?.ancho,
        materialBordillo: segmento.bordillos?.material,
        alturaBordillo: segmento.bordillos?.altura,
      });
    }
  }, [segmento, form]);

  const handleUpdate = async (values) => {
    setLoading(true);
    try {

      await updateSegmento(segmento.id, {
        direccion: values.direccion,
        longitud: values.longitud,
        numero: values.numero,
      });
  

      await updateCalzada(segmento.calzadas[0].id, {
        tipo: values.tipoCalzada,
        ancho: values.anchoCalzada,
      });
  

      await updateBordillo(segmento.bordillos[0].id, {
        material: values.materialBordillo,
        altura: values.alturaBordillo,
      });
  
      message.success("Segmento, calzada y bordillo actualizados exitosamente");

      reloadSegmentos(); 
  
      onClose(); 
    } catch (error) {
      message.error("Error al actualizar los datos");
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <Modal
      title="Editar Segmento"
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleUpdate}>
        <Form.Item
          label="Longitud del segmento"
          name="longitud"
          rules={[{  message: "Por favor ingrese la longitud del segmento" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Direccion del segmento"
          name="direccion"
          rules={[{  message: "Por favor ingrese la dirección del segmento" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Numero del segmento"
          name="numero"
          rules={[{  message: "Por favor ingrese el número del segmento" }]}
        >
          <Input />
        </Form.Item>

        <h3>Datos de Calzada</h3>
        <Form.Item
          label="Tipo de Calzada"
          name="tipoCalzada"
          rules={[{  message: "Por favor ingrese el tipo de calzada" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ancho de Calzada"
          name="anchoCalzada"
          rules={[{  message: "Por favor ingrese el ancho de la calzada" }]}
        >
          <Input />
        </Form.Item>

        <h3>Datos de Bordillo</h3>
        <Form.Item
          label="Material del Bordillo"
          name="materialBordillo"
          rules={[{  message: "Por favor ingrese el material del bordillo" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Altura del Bordillo"
          name="alturaBordillo"
          rules={[{  message: "Por favor ingrese la altura del bordillo" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Actualizar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditSegmentoModal;
