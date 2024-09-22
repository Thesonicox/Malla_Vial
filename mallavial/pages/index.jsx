import { Layout, Button, Modal } from "antd";
import { useState } from "react";
import SegmentoTable from '../src/components/SegmentoTable'
import SegmentoForm from "../src/components/Form/SegmentoForm";
const { Header, Content, Footer } = Layout;

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleAddSuccess = () => {
    setIsModalVisible(false);
    setRefresh(!refresh); 
  };

  return (
    <Layout>
      <Header style={{ color: "white" }}>Sistema de Gestión de Segmentos</Header>
      <Content style={{ padding: '50px', minHeight: '80vh' }}>
        <Button
          type="primary"
          style={{ marginBottom: "20px" }}
          onClick={() => setIsModalVisible(true)}
        >
          Agregar Segmento
        </Button>

        <SegmentoTable refresh={refresh} />

        <Modal
          title="Agregar Nuevo Segmento"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <SegmentoForm onAddSuccess={handleAddSuccess} />
        </Modal>
      </Content>
      <Footer style={{ textAlign: "center" }}>Sebastian Ramirez Vasco </Footer>
    </Layout>
  );
}

export default Home




