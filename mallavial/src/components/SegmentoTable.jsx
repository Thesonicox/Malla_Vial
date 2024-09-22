import { Table, Button, Modal, Spin, Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import SegmentoDetails from "./SegmentoDetails";
import { fetchSegmentos, deleteSegmento, fetchSegmentoById} from "../../services/api";
import EditSegmentoModal from "./EditSegmentoModal";

const SegmentoTable = ({ refresh }) => {
  const [segmentos, setSegmentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSegmento, setSelectedSegmento] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); 

  // Función para obtener los segmentos desde la API
  const getSegmentos = async () => {
    try {
      setLoading(true);
      const data = await fetchSegmentos();
      setSegmentos(data);
    } catch (error) {
      console.error("Error fetching segmentos:", error);
      message.error("Error al cargar los segmentos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSegmentos();
  }, [refresh]);

  const showDetails = async (segmento) => {
    try {
      setLoading(true);
      const data = await fetchSegmentoById(segmento.id); 
      setSelectedSegmento(data); 
      setIsModalVisible(true);
    } catch (error) {
      message.error("Error al cargar los detalles del segmento");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSegmento(id);
      message.success("Segmento eliminado exitosamente");
      getSegmentos();
    } catch (error) {
      message.error("Error al eliminar segmento");
    }
  };

  const showEditModal = (segmento) => {
    setSelectedSegmento(segmento); 
    setIsEditModalVisible(true); 
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false); 
    getSegmentos(); 
  };
  

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Longitud",
      dataIndex: "longitud",
      key: "longitud",
    },
    {
      title: "Direccion",
      dataIndex: "direccion",
      key: "direccion",
    },
    {
      title: "Numero",
      dataIndex: "numero",
      key: "numero",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (text, record) => (
        <span>
     
          <Popconfirm
            title="¿Estás seguro de eliminar este segmento?"
            onConfirm={() => handleDelete(record.id)}
            okText="Sí"
            cancelText="No"
          >
            <Button type="primary" danger>
              Eliminar
            </Button>
          </Popconfirm>

          <Button type="primary" onClick={() => showDetails(record)} style={{ marginLeft: 8 }}>
            Ver Detalles
          </Button>

          <Button type="default" onClick={() => showEditModal(record)} style={{ marginLeft: 8 }}>
            Actualizar
          </Button>
        </span>
      ),
    },
  ];
  

  if (loading) return <Spin />;

  return (
    <div>
      <Table dataSource={segmentos} columns={columns} rowKey="id" />
      <Modal
        title={`Detalles del Segmento ${selectedSegmento?.id}`}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {selectedSegmento && <SegmentoDetails segmento={selectedSegmento} />}
      </Modal>

      {selectedSegmento && (
        <EditSegmentoModal
          segmento={selectedSegmento}
          isVisible={isEditModalVisible}
          onClose={closeEditModal}
          reloadSegmentos={getSegmentos} 
        />
      )}
    </div>
  );
};

export default SegmentoTable;
